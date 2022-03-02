const data = require("./db.js");



const getRandomNumber = (min, max) => (Math.random() * (max - min) + min).toFixed();
const getRandomDate = () => new Date(new Date(2018, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2012, 0, 1).getTime()));
const getRandomTime = () => `${getRandomNumber(0, 59)}${getRandomNumber(0, 59)}:${getRandomNumber(0, 59)}${getRandomNumber(0, 59)}`;
const getRAlphabetic = () => data.alphabetic[getRandomNumber(0, data.alphabetic.length-1)];
const getRandomBoolean = () => getRandomNumber(0, 10) % 2 === 0 ? true : false;
const getRandomProduct = () => data.products[getRandomNumber(0, data.products.length-1)];
const getRandomAdress = () => data.adresses[getRandomNumber(0, data.adresses.length-1)];
const getRandomName = () => data.names[getRandomNumber(0, data.names.length-1)];
const getRDateAndTime = () => `${getRandomTime()} ${getRandomDate()}`;
const getMonetaryValue = (min, max) => `R$${getRandomNumber(min, max)}`;
const getRandomCode = (size = 5) => {
	let text = "";
	for(let i = 0; i < size; i++){
		text += getRAlphabetic();
	}
	return text;
};
const getRandomChart = () => {
	const limit = 13;
	const thisData = [];
	for(let i = 1; i < limit; i++){
		thisData.push({
			name: `Page ${i}`,
			value: getRandomNumber(500, 1500),
			date: getRandomDate().toString(),
			amt: getRandomNumber(1500, 2000),
		});
	}
	return thisData;
};
const getListInvoices = () => {
	const thisData = [];

	for(let i = 0; i < getRandomNumber(0, 50); i++){
		thisData.push({
			id: i,
			data: getRandomDate(),
			name: getRandomName(),
			adress: getRandomAdress(),
			order: getRandomCode(),
			taxes: getMonetaryValue(0, 90),
			fees: getMonetaryValue(0, 90),
			taxesTotal: getMonetaryValue(0, 90),
			total: getMonetaryValue(0, 500),
		});
	}

	return thisData;
};
const getListCostumers = () => {
	const thisData = [];

	for(let i = 0; i < getRandomNumber(0, 50); i++){
		thisData.push({
			id: i,
			name: getRandomName(),
			lastSeen: getRandomDate(),
			orders: getRandomNumber(0, 9),
			total: getRandomNumber(13, 643),
			lastTime: getRandomDate(),
			newer: getRandomBoolean(),
			segments: data.segments[getRandomNumber(0, data.segments.length-1)],
		});
	}

	return thisData;
};
const getListSegments = () => {
	const thisData = [];

	for(let i = 0; i < getRandomNumber(0, 50); i++){
		thisData.push({
			id: i,
			segments: data.segments[i],
		});
	}

	return thisData;
};
const getListReviews = () => {
	const thisData = [];

	for(let i = 0; i < getRandomNumber(0, 50); i++){
		thisData.push({
			id: i,
			date: getRandomDate(),
			name: getRandomName(),
			product: data.products[getRandomNumber(0, data.products.length-1)],
			rating: getRandomNumber(1, 5),
			comments: getRandomCode(15),
			status: getRandomBoolean() ? "Online" : "Offline"
		});
	}

	return thisData;
};
const getListOrders = () => {
	const thisData = [];

	for(let i = 0; i < getRandomNumber(0, 50); i++){
		thisData.push({
			id: i,
			name: generator.getRandomName(),
			date: generator.getRandomDate().toString(),
			time: generator.getRandomTime(),
			monetaryValue: generator.getMonetaryValue(3, 300),
		});
	}

	return thisData;
};
const getListOrdered = () => {
	const thisData = [];

	for(let i = 0; i < getRandomNumber(0, 50); i++){
		thisData.push({
			data: generator.getRandomDate(),
			reference: generator.getRandomCode(),
			name: generator.getRandomName(),
			adress: generator.getRandomAdress(),
			nbItens: generator.getRandomNumber(0, 19),
			monetaryValue: generator.getMonetaryValue(0, 982)
		});
	}

	return thisData;
};
const getListDelivered = () => {
	const thisData = [];

	for(let i = 0; i < getRandomNumber(0, 50); i++){
		thisData.push({
			data: generator.getRandomDate(),
			reference: generator.getRandomCode(),
			name: generator.getRandomName(),
			adress: generator.getRandomAdress(),
			nbItens: generator.getRandomNumber(0, 19),
			monetaryValue: generator.getMonetaryValue(0, 982),
			returned: generator.getRandomBoolean(),
		});
	}

	return thisData;
};


const generator = {
	getRandomNumber,
	getRandomDate,
	getRandomTime,
	getRAlphabetic,
	getRandomBoolean,
	getRandomCode,
	getRandomProduct,
	getRandomChart,
	getListInvoices,
	getMonetaryValue,
	getRandomAdress,
	getRandomName,
	getRDateAndTime,
	getListCostumers,
	getListSegments,
	getListReviews,
	getListOrders,
	getListOrdered,
	getListDelivered,
};

module.exports = generator;