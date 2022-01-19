const fetch = require('node-fetch');
const apiTokenUrl = 'https://identity.nuvolahubapi.io/oauth2/token'
const ibUrlBase = 'https://sandbox-110.nuvolahub.com:8443';

/**
 * Authenticate with 
 * @returns Token response object
 */
const apiAuth = async () => {
    var client_cred = "1971otu0j3n5g6omvegg7lschj:2n7bbee090sp0eebf1eoe594btvomeprkf5dau4gpnl4iiovbkj"
    var client_cred_64 = Buffer.from(client_cred, 'binary').toString('base64')

    var response = await fetch(apiTokenUrl, {
            method: 'POST', 
            headers: {"Content-Type":"application/x-www-form-urlencoded", 
                      "Authorization":"Basic "+client_cred_64},
            body: "grant_type=client_credentials"});

    return response.json();
};

/**
 * Build the request headers for IB API queries
 * @param {*} token 
 * @returns Request headers
 */
const reqHeaders = (token) => {
    return {
        "Authorization": "Bearer "+token.access_token,
        "Content-Type":"application/json"}
}


const IBLocationFetch = (endpoint, data) => {
    apiAuth().then(
        token => {   
            fetch(endpoint, {
                method: 'GET', 
                headers: reqHeaders(token),
                body: data})
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                });
        }
    )
}

const IBPatientQuery = (endpoint, data) => {
    apiAuth().then(
        token => {   
            fetch(endpoint, {
                method: 'POST', 
                headers: reqHeaders(token),
                body: JSON.stringify(data)})
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                });
        }
    )
}


//Query IB's location data
IBLocationFetch(ibUrlBase+'/api/BIyPiqm6xYjc6M6ebOy1b/ph/locations/18', {});


//Query state registry for patient vaccine history/forecast
var patientQueryData = {
    "bridgeway_id": 32,
    "data": {
      "mrn": "111111111111",
      "last_name": "Plastname1",
      "first_name": "Pfirstname1",
      "middle_initial": "",
      "dob": "05/15/1950",
      "gender": "M",
      "address": "11111 Dallas Noway",
      "city": "Dallas",
      "state": "TX",
      "zip": "75252",
      "phone": {
        "area_code": "972",
        "local_number": "321-0000"
      },
      "last_update_date": "01/01/2011",
      "last_update_facility": "Test Facility CA3",
      "multiple_birth_indicator": "N",
      "birth_order": 1,
      "mother_last_name": "last",
      "mother_first_name": "first"
    },
    "environment": "Testing"
  }
IBPatientQuery(ibUrlBase+'/api/frVOVQcerOKM4IYWEkvYx/ph/registries/60/query', patientQueryData)
