const environment = {
    production: true,
    port: 8080,
    defaultAdminPassword: 'c3uz#3zd',
    db:{
        host: 'iar-mongo.inf.h-brs.de',
        port: 27017,
        username: 'team_18',
        password: 'team_18!',
        authSource: 'team_18',
        name: 'team_18'
    },
    corsOrigins: [
        'http://iar-frontend.inf.h-brs.de'
    ]
};

exports.default = environment;
