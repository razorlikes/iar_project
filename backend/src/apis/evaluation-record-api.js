const evaluationRecordsService = require("../services/evaluation-record-service");

exports.getRecords = function (req, res) {
    const db = req.app.get('db');

    evaluationRecordsService.getRecords(db).then(records => {
        res.send(records);
    }).catch(_ => {
        res.status(500).send();
    })
}

exports.getRecordsById = function (req, res) {
    const db = req.app.get('db');

    evaluationRecordsService.getRecordsById(db, req).then(records => {
        res.send(records);
    }).catch(_ => {
        res.status(500).send();
    })
}

exports.createRecord = function (req, res) {
    const db = req.app.get('db');

    evaluationRecordsService.createRecord(db, req).then(record => {
        res.send(record);
    }).catch(_ => {
        res.status(500).send();
    })
}
exports.updateRecord = function (req, res) {
    const db = req.app.get('db');

    evaluationRecordsService.updateRecord(db, req).then(record => {
        res.send(record);
    }).catch(_ => {
        res.status(500).send();
    })
}
exports.deleteRecord = function (req, res) {
    const db = req.app.get('db');

    evaluationRecordsService.deleteRecord(db, req).then(record => {
        res.send(record);
    }).catch(_ => {
        res.status(500).send();
    })
}