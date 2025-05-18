const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

router.post("/", (req, res) => {
	const orderData = req.body;
	const ordersPath = path.join(__dirname, "../public/data/orders.json");

	fs.readFile(ordersPath, "utf8", (err, data) => {
		let orders = [];

		if (!err) {
			try {
				orders = JSON.parse(data);
				if (!Array.isArray(orders)) orders = [];
			} catch (e) {
				console.error("[訂單建立] JSON 解析錯誤:", e);
			}
		}

		const newOrder = {
			...orderData,
			id: Date.now(),
			createTime: new Date().toISOString(),
		};

		orders.push(newOrder);

		fs.writeFile(ordersPath, JSON.stringify(orders, null, 4), (err) => {
			if (err) {
				console.error("[訂單建立] 儲存失敗:", err);
				return res.status(500).json({ error: "訂單建立失敗" });
			}
			res.status(200).json({
				message: "訂單建立成功",
			});
		});
	});
});

module.exports = router;
