exports.createRecord = async function(db, body) {
    await db.collection('EvaluationRecords').insertOne(body)
}

exports.getRecords = async function(db) {
    return db.collection('EvaluationRecords').find().toArray();
}

exports.getRecordByIdAndYear = async function(db, params) {
    let filter = {sid: parseInt(params.id), year: parseInt(params.year)}
    return db.collection('EvaluationRecords').findOne(filter);
}

exports.updateRecord = async function(db, params, body) {
    let filter = {sid: parseInt(params.id), year: parseInt(params.year)}
    let updatedRecord = {$set: body};
    await db.collection('EvaluationRecords').updateOne(filter, updatedRecord)
}

exports.deleteRecord = async function(db, params) {
    let filter = {sid: parseInt(params.id), year: parseInt(params.year)};
    db.collection('EvaluationRecords').deleteOne(filter);
}
