const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.static("public"));

const addStoreRouter = require("./router/addStoreRouter");
const getStoreRouter = require("./router/getStoreRouter");
const createOrderRouter = require("./router/createOrderRouter");
const getOrdersRouter = require("./router/getOrdersRouter");
const addItemRouter = require("./router/addItemRouter");

app.use("/add-store", addStoreRouter);
app.use("/get-store", getStoreRouter);
app.use("/create-order", createOrderRouter);
app.use("/get-orders", getOrdersRouter);
app.use("/add-item", addItemRouter);

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
