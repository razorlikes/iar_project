class Salesman{
    constructor(body) {
        this._id = undefined;

        this.ocrxId = body.ocrxId;
        this.ohrmId = body.ohrmId;
        this.firstName = body.firstName;
        this.lastName = body.lastName;
        this.jobTitle = body.jobTitle;
        this.evaluationRecords = body.evaluationRecords;
    }
}

module.exports = Salesman;