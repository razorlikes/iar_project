const axios = require('axios');
const dayjs = require('dayjs');

let environment;
if (process.env.NODE_ENV === 'development') {
    environment = require('../../environments/environment.js').default;
} else {
    environment = require('../../environments/environment.prod.js').default;
}

const baseURL = environment.ocrx.baseURL;
const credentials = {
    username: environment.ocrx.username,
    password: environment.ocrx.password
};
const config = {
    header: {
        Accept: 'application/json',
    },
    auth: credentials,
};

exports.getProductById = async function(params) {
    const product = (await axios.get(`${baseURL}/org.opencrx.kernel.product1/provider/CRX/segment/Standard/product/${params.id}`, config)).data;
    return {
        name: product.name,
    };
}

exports.getAllCustomers = async function() {
    const users = (await axios.get(`${baseURL}/org.opencrx.kernel.account1/provider/CRX/segment/Standard/account`, config)).data.objects;
    return users
        .filter(user => user['@type'] === 'org.opencrx.kernel.account1.LegalEntity')
        .map(user => {
            return {
                id: user['@href'].split('/').pop(),
                fullName: user.name,
                customerRating: user.accountRating
            };
        });
}

exports.getCustomerById = async function(params) {
    const user = (await axios.get(`${baseURL}/org.opencrx.kernel.account1/provider/CRX/segment/Standard/account/${params.id}`, config)).data;
        return {
            id: user['@href'].split('/').pop(),
            fullName: user.name,
            customerRating: user.accountRating
        };
}

exports.getAllOrders = async function() {
    const salesOrders = (await axios.get(`${baseURL}/org.opencrx.kernel.contract1/provider/CRX/segment/Standard/salesOrder`, config)).data.objects;
    return salesOrders
        .map(salesOrder => {
            return {
                salesOrderId: salesOrder['@href'].split('/').pop(),
                salesRep: salesOrder.salesRep['@href'].split('/').pop(),
                totalAmount: salesOrder.totalAmount,
                totalAmountIncludingTax: salesOrder.totalAmountIncludingTax,
            };
        });
}

exports.getSalePositions = async function(params) {
    const positions = (await axios.get(`${baseURL}/org.opencrx.kernel.contract1/provider/CRX/segment/Standard/salesOrder/${params.id}/position`, config)).data.objects;
    return positions
        .map(position => {
            return {
                product: position.product['@href'].split('/').pop(),
                baseAmount: position.baseAmount,
                pricePerUnit: position.pricePerUnit,
                quantity: position.quantity,
                taxAmount: position.taxAmount,
            };
        });
}

exports.getSalesmanById = async function(params) {
    const salesman = (await axios.get(`${baseURL}/org.opencrx.kernel.account1/provider/CRX/segment/Standard/account/${params.id}`, config)).data;
    return {
        firstName: salesman.firstName,
        lastName: salesman.lastName,
        jobTitle: salesman.jobTitle,
        governmentId: salesman.governmentId,
        organization: salesman.organization,
        department: salesman.department,
    };
}

exports.getAllSalesman = async function() {
    const salesmen = (await axios.get(`${baseURL}/org.opencrx.kernel.account1/provider/CRX/segment/Standard/account/`, config)).data.objects;
    return salesmen
        .filter(salesman => salesman['@type'] === 'org.opencrx.kernel.account1.Contact')
        .map(salesman => {
            return {
                firstName: salesman.firstName,
                lastName: salesman.lastName,
                governmentId: salesman.governmentId,
                id: salesman['@href'].split('/').pop(),
                jobTitle: salesman.jobTitle,
            };
        });
}

exports.getOrdersOfSalesman = async function(params) {
    const sales = (await axios.get(`${baseURL}/org.opencrx.kernel.contract1/provider/CRX/segment/Standard/salesOrder`, config)).data.objects;
    return sales
        .filter(sale => sale.salesRep['@href'].endsWith(params.id))
        .filter(sale => dayjs(sale.createdAt).format('YYYY') === params.year.toString())
        .map(sale => {
            return {
                salesOrderId: sale['@href'].split('/').pop(),
                totalAmount: sale.totalAmount,
                totalAmountIncludingTax: sale.totalAmountIncludingTax,
            }
        });
}