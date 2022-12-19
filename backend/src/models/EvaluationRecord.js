class EvaluationRecord {
    constructor(body) {
        this._id = undefined

        this.sid = body.sid;
        this.year = body.year;
        this.orderEval = body.orderEval;
        this.socialEval = body.socialEval;
        this.orderBonus = body.orderBonus;
        this.socialBonus = body.socialBonus;
        this.totalBonus = body.totalBonus;
        this.remarks = body.remarks;
    }
}

module.exports = EvaluationRecord;