const ocrxService = require("../services/ocrx-service");

exports.getProductById = function (req, res) {
    ocrxService.getProductById(req.params).then(product => {
        res.send(product);
    }).catch(_ => {
        console.log(_);
        res.status(500).send();
    })
}

exports.getAllCustomers = function (req, res) {
    ocrxService.getAllCustomers().then(customers => {
        res.send(customers);
    }).catch(_ => {
        console.log(_);
        res.status(500).send();
    })
}

exports.getCustomerById = function (req, res) {
    ocrxService.getCustomerById(req.params).then(customer => {
        res.send(customer);
    }).catch(_ => {
        console.log(_);
        res.status(500).send();
    })
}

exports.getAllOrders = function (req, res) {
    ocrxService.getAllOrders().then(sales => {
        res.send(sales);
    }).catch(_ => {
        console.log(_);
        res.status(500).send();
    })
}

exports.getSalesPositions = function (req, res) {
    ocrxService.getSalePositions(req.params).then(salesPositions => {
        res.send(salesPositions);
    }).catch(_ => {
        console.log(_);
        res.status(500).send();
    })
}

exports.getSalesmanById = function (req, res) {
    ocrxService.getSalesmanById(req.params).then(rep => {
        res.send(rep);
    }).catch(_ => {
        console.log(_);
        res.status(500).send();
    })
}

exports.getAllSalesman = function (req, res) {
    ocrxService.getAllSalesman().then(reps => {
        res.send(reps);
    }).catch(_ => {
        console.log(_);
        res.status(500).send();
    })
}

exports.getOrdersOfSalesman = function (req, res) {
    ocrxService.getOrdersOfSalesman(req.params).then(orders => {
        res.send(orders);
    }).catch(_ => {
        console.log(_);
        res.status(500).send();
    })
}