exports.getSalesmen = async function(db){
    return await db.collection('Salesmen').find().toArray();
}

exports.deleteAllSalesmen = async function (db) {
    await db.collection('Salesmen').deleteMany();
}

exports.createSalesman = async function(db, body){
    await db.collection('Salesmen').insertOne(body);
}

exports.updateSalesman = async function(db, req) {
    let filter={_id:parseInt(req.params.id)};
    let updatedBody={$set: req.body};
    await db.collection('Salesmen').updateOne(filter,updatedBody);
}

exports.deleteSalesmanById = async function(db, req) {
    let filter={_id:parseInt(req.params.id)}
    await db.collection('Salesmen').deleteOne(filter);
}

exports.getSalesmanById = async function(db, req) {
    let filter = {_id:parseInt(req.params.id)}
    return await db.collection('Salesmen').findOne(filter);
}