const ohrmService = require("../services/ohrm-service");

exports.getAllSalesmen = function (req, res) {
    ohrmService.getSalesmen().then(salesmen => {
        res.send(salesmen);
    }).catch(_ => {
        console.log(_);
        res.status(500).send();
    })
}

exports.getSalesmenById = function (req, res) {
    ohrmService.getSalesmanById(req.params.id).then(salesman => {
        res.send(salesman);
    }).catch(_ => {
        console.log(_);
        res.status(500).send();
    })
}

exports.addBonusSalary = function (req, res) {
    ohrmService.addBonusSalary(req).then(bonus => {
        res.send(bonus);
    }).catch(_ => {
        console.log(_);
        res.status(500).send();
    })
}