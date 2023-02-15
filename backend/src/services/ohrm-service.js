const axios = require('axios');
const qs = require('querystring');

let environment;
if (process.env.NODE_ENV === 'development') {
    environment = require('../../environments/environment.js').default;
} else {
    environment = require('../../environments/environment.prod.js').default;
}

const baseURL = environment.ohrm.baseURL;
let ohrmToken = null;

async function getToken() {
    const body = qs.stringify({
        client_id: 'api_oauth_id',
        client_secret: 'oauth_secret',
        grant_type: 'password',
        username: environment.ohrm.username,
        password: environment.ohrm.password
    });

    const res = await axios.post(`${baseURL}/oauth/issueToken`,
        body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
            }
        }
    );

    return {
        access_token: res.data.access_token,
        expires_at: Date.now + res.data.expires_in * 1000,
    };
}

async function getConfig() {
    if (!ohrmToken || ohrmToken.expires_at <= Date.now()) {
        ohrmToken = await getToken();
    }

    return {
        headers: {
            'Authorization': `Bearer ${ohrmToken.access_token}`,
            'Content-Typ': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
        }
    }
}


exports.getSalesmen = async function () {
    if (ohrmToken === null) {
        ohrmToken = await getToken();
    }

    const salesmen = (await axios.get(`${baseURL}/api/v1/employee/search`, await getConfig())).data.data;
    return salesmen.filter(salesman => (salesman.jobTitle !== null && salesman.unit === null) ||
        (salesman.jobTitle === null && salesman.unit !== null) ||
        (salesman.jobTitle !== null && salesman.unit !== null)).map(salesman => {
        if (salesman.jobTitle !== null && salesman.unit === null) {
            return {
                firstName: salesman.firstName,
                lastName: salesman.lastName,
                sid: salesman.code,
                ohrmId: salesman.employeeId,
                jobTitle: salesman.jobTitle,
            };
        } else if (salesman.jobTitle === null && salesman.unit !== null) {
            return {
                firstName: salesman.firstName,
                lastName: salesman.lastName,
                sid: salesman.code,
                ohrmId: salesman.employeeId,
                jobTitle: salesman.unit,
            };
        } else if (salesman.jobTitle !== null && salesman.unit !== null) {
            return {
                firstName: salesman.firstName,
                lastName: salesman.lastName,
                sid: salesman.code,
                ohrmId: salesman.employeeId,
                jobTitle: salesman.jobTitle,
            };
        }
    });
}

exports.getSalesmanById = async function (id) {
    if (ohrmToken === null) {
        ohrmToken = await getToken();
    }

    return (await axios.get(`${baseURL}/api/v1/employee/search?code=${id}`, await getConfig())).data.data;
}

exports.addBonusSalary = async function (req) {
    if (ohrmToken === null) {
        ohrmToken = await getToken();
    }
    console.log(req.body);
    console.log(req.params.id)

    return (await axios.post(`${baseURL}/api/v1/employee/${req.params.id}/bonussalary?year=${req.body.year}&value=${req.body.totalBonus}`, "", await getConfig())).data;
}