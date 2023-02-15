const environment = {
    production: true,
    port: 8080,
    defaultAdminPassword: 'c3uz#3zd',
    db: {
        host: 'iar-mongo.inf.h-brs.de',
        port: 27017,
        username: 'team_18',
        password: 'team_18!',
        authSource: 'team_18',
        name: 'team_18'
    },
    corsOrigins: [
        'http://iar-frontend.inf.h-brs.de'
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
