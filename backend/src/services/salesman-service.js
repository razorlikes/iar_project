const {ObjectId} = require("mongodb");
exports.getSalesmen = async function (db) {
    return await db.collection('Salesmen').find().toArray();
}

exports.deleteAllSalesmen = async function (db) {
    await db.collection('Salesmen').deleteMany();
}

exports.createSalesman = async function (db, req) {
    await db.collection('Salesmen').insertOne(req.body);
}

exports.updateSalesman = async function (db, req) {
    let filter = {_id: ObjectId(req.params.id)};
    let updatedBody = {
        $set: {
            sid: req.body.sid,
            ocrxId: req.body.ocrxId,
            ohrmId: req.body.ohrmId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            jobTitle: req.body.jobTitle
        }
    };
    await db.collection('Salesmen').updateOne(filter, updatedBody);
}

exports.deleteSalesmanById = async function (db, req) {
    let filter = {_id: ObjectId(req.params.id)};
    await db.collection('Salesmen').deleteOne(filter);
}

exports.getSalesmanById = async function (db, req) {
    let filter = {_id: ObjectId(req.params.id)};
    return await db.collection('Salesmen').findOne(filter);
}