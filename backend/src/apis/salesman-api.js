const salesmanService = require("../services/salesman-service");

exports.createSalesmen = function (req, res){
    const db = req.app.get('db');

    salesmanService.createSalesman(db, req.body).then(salesman => {
        res.send(salesman);
    }).catch(_=>{
        console.log(_);
        res.status(500).send();
    })
}

exports.getSalesmen = function (req, res){
    const db = req.app.get('db');

    salesmanService.getSalesmen(db).then(salesman => {
        res.send(salesman);
    }).catch(_=>{
        console.log(_);
        res.status(500).send();
    })
}

exports.getSalesmenById = function (req,res){
    const db = req.app.get('db');

    salesmanService.getSalesmanById(db, req).then(salesman => {
        res.send(salesman);
    }).catch(_=>{
        console.log(_);
        res.status(500).send();
    })
}

exports.updateSalesmen = function (req, res) {
    const db = req.app.get('db');

    salesmanService.updateSalesman(db, req).then(salesman => {
        res.send(salesman);
    }).catch(_=>{
        console.log(_);
        res.status(500).send();
    })
}

exports.deleteSalesmen = function(req, res) {
    const db = req.app.get('db');

    salesmanService.deleteAllSalesmen(db).then(() => {
        res.status(200).send();
    }).catch(_=>{
        console.log(_);
        res.status(500).send();
    })
}

exports.deleteSalesmenById = function(req, res) {
    const db = req.app.get('db');

    salesmanService.deleteSalesmanById(db, req).then(salesman => {
        res.send(salesman);
    }).catch(_=>{
        console.log(_);
        res.status(500).send();
    })
}
