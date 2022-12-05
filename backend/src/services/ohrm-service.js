const axios= require('axios');
const qs = require('querystring');

let environment;
if (process.env.NODE_ENV === 'development') {
    environment = require('../../environments/environment.js').default;
} else {
    environment = require('../../environments/environment.prod.js').default;
}

const baseURL = environment.ohrm.baseURL;
let ohrmToken = null;

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
    }
};

async function getToken() {
    const body = qs.stringify({
        client_id: 'api_oauth_id',
        client_secret: 'oauth_secret',
        grant_type: 'password',
        username: environment.ohrm.username,
        password: environment.ohrm.password
    });

    return (await axios.post(`${baseURL}/oath/issueToken`, body, config)).data['access_Token'];
}

exports.getSalesmen = async function() {
if(ohrmToken===null){
    ohrmToken = await getToken();
}
    return (await axios.get(`${baseURL}/api/v1/employee/search`, {
        headers: {
            Authorization: `Bearer ${ohrmToken}`
            , ...config.headers
        }})).data.data;
}

exports.getSalesmanById = async function (id) {
    if(ohrmToken===null){
        ohrmToken = await getToken();
    }

    return (await axios.get(`${baseURL}/api/v1/employee/search${id}`, {
        headers: {
            Authorization: `Bearer ${ohrmToken}`
            , ...config.headers
        }})).data.data;
}

exports.addBonusSalary = async function (id, bonus, year) {
    if(ohrmToken===null){
        ohrmToken = await getToken();
    }

    return (await axios.post(`${baseURL}/api/v1/employee${id}/bonussalary?year=${year}&value=${bonus}`, {
        value: bonus,
        year
    }, config)).data;
}