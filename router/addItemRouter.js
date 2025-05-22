const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

router.post("/get-order/:id", (req, res) => {
	const item = req.body;
	const orderId = parseInt(req.params.id);
	const ordersPath = path.join(__dirname, "../public/data/orders.json");

	if (!item || !orderId) {
		return res.status(400).json({ error: "缺少必要參數" });
	}

	fs.readFile(ordersPath, "utf-8", (err, data) => {
		let orders = [];

		if (!err) {
			try {
				orders = JSON.parse(data);
				if (!Array.isArray(orders)) orders = [];
			} catch (e) {
				console.error("[加入物品] JSON 解析錯誤:", e);
			}
		}

		order = orders.find((o) => (o.id = orderId));
		order.items.push(item);

		fs.writeFile(ordersPath, JSON.stringify(orders, null, 4), (err) => {
			if (err) {
				console.error("[加入物品] 儲存失敗:", err);
				return res.status(500).json({ error: "物品儲存失敗" });
			}
			res.status(200).json({
				message: "物品儲存成功",
			});
		});
	});
});

module.exports = router;
