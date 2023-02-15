const express = require('express');
const router = express.Router();
const {checkAuthorization} = require('../middlewares/auth-middleware');

/*
    In this file is the routing for the REST-endpoints under /api managed
 */

const authApi = require('../apis/auth-api'); //api-endpoints are loaded from separate files
router.post('/login', authApi.login); //the function decides which request type should be accepted
router.delete('/login', checkAuthorization(), authApi.logout); //middlewares can be defined in parameters
router.get('/login', authApi.isLoggedIn); //the function, which handles requests is specified as the last parameter

const userApi = require('../apis/user-api');
router.get('/user', checkAuthorization(), userApi.getSelf);

const peopleDemoApi = require('../apis/people-demo-api');
router.get('/people', checkAuthorization(), peopleDemoApi.getPeople);

const salesmanApi = require("../apis/salesman-api");
router.get('/salesmen', checkAuthorization(), salesmanApi.getSalesmen);
router.get('/salesmen/:id', checkAuthorization(), salesmanApi.getSalesmenById);
router.delete('/salesmen', checkAuthorization(), salesmanApi.deleteSalesmen);
router.delete('/salesmen/:id', checkAuthorization(), salesmanApi.deleteSalesmenById);
router.post('/salesmen', checkAuthorization(), salesmanApi.createSalesmen);
router.put('/salesmen/:id', checkAuthorization(), salesmanApi.updateSalesmen);

const evaluationRecordsApi = require("../apis/evaluation-record-api")
router.get('/evaluationRecords', checkAuthorization(), evaluationRecordsApi.getRecords);
router.get('/evaluationRecords/:id', checkAuthorization(), evaluationRecordsApi.getRecordsById);
router.post('/evaluationRecords', checkAuthorization(), evaluationRecordsApi.createRecord);
router.put('/evaluationRecords/:id', checkAuthorization(), evaluationRecordsApi.updateRecord);
router.delete('/evaluationRecords/:id', checkAuthorization(), evaluationRecordsApi.deleteRecord);

const ocrxApi = require("../apis/ocrx-api");
router.get('/ocrx/products/:id', checkAuthorization(), ocrxApi.getProductById);
router.get('/ocrx/customers', checkAuthorization(), ocrxApi.getAllCustomers);
router.get('/ocrx/customers/:id', checkAuthorization(), ocrxApi.getCustomerById);
router.get('/ocrx/orders', checkAuthorization(), ocrxApi.getAllOrders);
router.get('/ocrx/orders/:id/positions', checkAuthorization(), ocrxApi.getSalesPositions);
router.get('/ocrx/salesmen', checkAuthorization(), ocrxApi.getAllSalesman);
router.get('/ocrx/salesmen/:id', checkAuthorization(), ocrxApi.getSalesmanById);
router.get('/ocrx/salesmen/:id/orders/:year', checkAuthorization(), ocrxApi.getOrdersOfSalesman);

const ohrmApi = require("../apis/ohrm-api");
router.get('/ohrm/salesmen', checkAuthorization(), ohrmApi.getAllSalesmen);
router.get('/ohrm/salesmen/:id', checkAuthorization(), ohrmApi.getSalesmenById);
router.post('/ohrm/salesmen/:id', checkAuthorization(), ohrmApi.addBonusSalary);

module.exports = router;