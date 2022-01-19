const fetch = require('node-fetch');

const headers = () => {
  let client_cred = "1971otu0j3n5g6omvegg7lschj:2n7bbee090sp0eebf1eoe594btvomeprkf5dau4gpnl4iiovbkj"
  let client_cred_64 = Buffer.from(client_cred, 'binary').toString('base64')

  return {"Content-Type":"application/x-www-form-urlencoded", 
          "Authorization":"Basic "+client_cred_64};
}

const dispatch = (token) => {
    console.log(token);
}

const getApiToken = () => {
    fetch('https://identity.nuvolahubapi.io/oauth2/token', {
            method: 'POST', 
            headers: headers(),
            body: "grant_type=client_credentials"})
        .then(response => response.json())
        .then(data => {
            dispatch(data.access_token);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

export default getApiToken;
