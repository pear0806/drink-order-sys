const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.static("public"));

const addStoreRouter = require("./router/addStoreRouter");

app.use("/add-store", addStoreRouter);

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
