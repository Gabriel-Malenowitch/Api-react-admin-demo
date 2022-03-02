const express = require("express");
const finalData = require("./api-distributor");

const app = express();

app.get("/", (req, res)=>res.json({
	dashboard: [
		"/monthlyRevenue",
		"/newOrders",
		"/pendingReviews",
		"/newCostumers",
		"/30DayRevenueHistoryChart",
		"/pendingOrders",
	],
	orders: [
		"/orders",
		"/orders/ordered",
		"/orders/delivered",
		"/orders/canceled",
	],
	invoices: [
		"/invoices",
	],
	costumers: [
		"/costumers",
	],
	segments: [
		"/segments",
	],
	reviews: [
		"/reviews",
	],
}));

app.get("/monthlyRevenue", (req, res)=>res.json(finalData.dashboard.monthlyRevenue));
app.get("/newOrders", (req, res)=>res.json(finalData.dashboard.orders));
app.get("/pendingReviews", (req, res)=>res.json(finalData.dashboard.pendingViews));
app.get("/newCostumers", (req, res)=>res.json(finalData.dashboard.costumers));
app.get("/30DayRevenueHistoryChart", (req, res)=>res.json(finalData.dashboard.chart));
app.get("/pendingOrders", (req, res)=>res.json(finalData.dashboard.pendingOrders));


app.get("/orders", (req, res)=>res.json(finalData.orders.ordered));
app.get("/orders/ordered", (req, res)=>res.json(finalData.orders.ordered));
app.get("/orders/delivered", (req, res)=>res.json(finalData.orders.delivered));
app.get("/orders/canceled", (req, res)=>res.json(finalData.orders.canceled));


app.get("/invoices", (req, res)=>res.json(finalData.invoices));

app.get("/costumers", (req, res)=>res.json(finalData.costumers));
app.get("/segments", (req, res)=>res.json(finalData.segments));
app.get("/reviews", (req, res)=>res.json(finalData.reviews));



const PORT = process.env.PORT | 5000;

app.listen(PORT, ()=>console.log(`Servidor rodando na porta ${PORT}`));