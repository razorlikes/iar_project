const evaluationRecordsService = require("../services/evaluation-record-service");

exports.getRecords = function (req, res){
    const db = req.app.get('db');

    evaluationRecordsService.getRecords(db).then(records => {
        res.send(records);
    }).catch(_=>{
        res.status(500).send();
    })
}

exports.getRecordByIdAndYear = function (req, res){
    const db = req.app.get('db');

    evaluationRecordsService.getRecordByIdAndYear(db, req.params).then(record => {
        res.send(record);
    }).catch(_=>{
        res.status(500).send();
    })
}
exports.createRecord = function (req, res) {
    const db = req.app.get('db');

    evaluationRecordsService.createRecord(db, req.body).then(record => {
        res.send(record);
    }).catch(_=>{
        res.status(500).send();
    })
}
exports.updateRecord = function(req, res) {
    const db = req.app.get('db');

    evaluationRecordsService.updateRecord(db, req.params, req.body).then(record => {
        res.send(record);
    }).catch(_=>{
        res.status(500).send();
    })
}
exports.deleteRecord = function(req, res) {
    const db = req.app.get('db');

    evaluationRecordsService.deleteRecord(db, req.params).then(record => {
        res.send(record);
    }).catch(_=>{
        res.status(500).send();
    })
}