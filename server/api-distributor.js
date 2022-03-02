const generator = require("./data-generator");

module.exports = {
	dashboard: {
		monthlyRevenue: generator.getMonetaryValue(3, 300),
		orders: generator.getRandomNumber(0, 25),
		pendingViews: generator.getRandomNumber(0, 50),
		costumers: generator.getRandomNumber(0, 49),
		chart: generator.getRandomChart(),
		pendingOrders: generator.getListOrders(),
	},

	orders: {
		ordered: generator.getListOrdered(),
		delivered: generator.getListDelivered(),
		canceled: generator.getListDelivered(),
	},
	invoices: generator.getListInvoices(),
	costumers: generator.getListCostumers(),
	segments: generator.getListSegments(),
	reviews: generator.getListReviews(),
};