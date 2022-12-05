const environment = {
    production: false,
    port: 8080,
    defaultAdminPassword: '5$c3inw%',
    db:{
        host: '127.0.0.1',
        port: 27017,
        username: '',
        password: '',
        authSource: 'admin',
        name: 'intArch'
    },
    corsOrigins: [
        'http://localhost:4200'
    ],
    ohrm: {
        baseURL: 'https://sepp-hrm.inf.h-brs.de/symfony/web/index.php',
        username: 'nieth',
        password: 'Safb02da42Demo$',
    },
    ocrx: {
        baseURL: 'https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX',
        username: 'guest',
        password: 'guest',
    }
};

exports.default = environment;
