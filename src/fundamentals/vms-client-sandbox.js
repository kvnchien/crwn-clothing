const fetch = require('node-fetch');
const apiTokenUrl = 'https://vomnisand.omnisys-inc.com:5001/vms/v1/query'
const endpoint = 'https://vomnisand.omnisys-inc.com:5001/vms/v1/query';

/**
 * Authenticate with 
 * @returns Token response object
 */
const apiAuth = async () => {
    var response = await fetch(apiTokenUrl, {
            method: 'POST', 
            headers: {"Content-Type":"application/json", 
                      "Authorization":"Basic QVBJb21uaVN0cmFuZFRlc3Q6UUM1NXRWMnZZNHZKWWtsWHZ6QkYxaQ=="},
            body: ""});

    return response.json();
};

/**
 * Build the request headers for IB API queries
 * @param {*} token 
 * @returns Request headers
 */
const reqHeaders = (token) => {
    console.log(token);

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

IBLocationFetch(endpoint, {})