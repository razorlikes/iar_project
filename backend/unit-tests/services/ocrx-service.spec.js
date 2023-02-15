const service = require("../../src/services/ocrx-service");
const chai = require("chai");
const sinon = require("sinon");
const axios = require("axios");
const expect = chai.expect;

describe("Testing OpenCRX Service", () => {
    afterEach(function () {
        sinon.restore();
    });

    it("should return product name", async () => {
        sinon.stub(axios, "get").resolves({
            data: {
                name: 'Cool Product Name',
            }
        });

        expect(await service.getProductById({id: 1})).to.eqls({"name": "Cool Product Name"});
    });

    it("should return company info", async () => {
        sinon.stub(axios, "get").resolves({
            data: {
                '@href': 'https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.account1/provider/CRX/segment/Standard/account/USERIDHERE',
                name: 'Cool Company Name',
                accountRating: 9001,
            }
        });

        expect(await service.getCustomerById({id: 1})).to.eqls({
            "id": "USERIDHERE",
            "fullName": "Cool Company Name",
            "customerRating": 9001
        });
    });
})

