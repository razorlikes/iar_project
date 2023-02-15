const {ObjectId} = require("mongodb");
exports.createRecord = async function (db, req) {
    let body = {sid: req.body.sid};
    await db.collection('EvaluationRecords').insertOne(body)
}

exports.getRecords = async function (db) {
    return await db.collection('EvaluationRecords').find().toArray();
}

exports.getRecordsById = async function (db, req) {
    let filter = {sid: req.params.id}
    return await db.collection('EvaluationRecords').find(filter).toArray();
}

exports.updateRecord = async function (db, req) {
    let filter = {_id: ObjectId(req.params.id)};
    let updatedBody = {
        $set: {
            sid: req.body.sid,
            year: req.body.year,
            orderEval: req.body.orderEval,
            socialEval: req.body.socialEval,
            orderBonus: req.body.orderBonus,
            socialBonus: req.body.socialBonus,
            totalBonus: req.body.totalBonus,
            remarks: req.body.remarks
        }
    };
    await db.collection('EvaluationRecords').updateOne(filter, updatedBody)
}

exports.deleteRecord = async function (db, req) {
    let filter = {_id: ObjectId(req.params.id)};
    await db.collection('EvaluationRecords').deleteOne(filter);
}
