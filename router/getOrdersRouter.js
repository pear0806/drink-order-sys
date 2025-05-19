const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
	const ordersDataPath = path.join(__dirname, "../public/data/orders.json");
	fs.readFile(ordersDataPath, "utf8", (err, data) => {
		if (err) {
			return res.status(500).json({ error: "讀取失敗" });
		}
		try {
			const orders = JSON.parse(data);
			res.status(200).json(orders);
		} catch (e) {
			res.status(500).json({ error: "JSON格式錯誤" });
		}
	});
});

module.exports = router;
