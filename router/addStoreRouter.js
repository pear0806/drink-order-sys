const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const storeDataPath = path.join(__dirname, "../public/data/store.json");

router.post("/", (req, res) => {
	const store = req.body;
	let isUpdate;
	fs.readFile(storeDataPath, "utf8", (err, data) => {
		let stores = [];

		if (!err) {
			try {
				stores = JSON.parse(data);
				if (!Array.isArray(stores)) stores = [];
			} catch (e) {
				console.error("[店家新增] JSON 解析錯誤(非JSON格式):", e);
			}
		}

		let existingStore = stores.find((s) => s.store === store.store);

		if (existingStore) {
			isUpdate = true;
			existingStore.name = store.name;
			if (store.phone) {
				existingStore.phone = store.phone;
			} else {
				delete existingStore.phone;
			}
			if (store.address) {
				existingStore.address = store.address;
			} else {
				delete existingStore.address;
			}
		} else {
			stores.push(store);
		}

		fs.writeFile(storeDataPath, JSON.stringify(stores, null, 4), (err) => {
			if (err) {
				console.error("[店家新增] 例外錯誤:", err);
				return res.status(500).json({ error: "店家新增失敗" });
			}
			if (isUpdate) {
				res.status(200).json({ message: "店家資料更新成功" });
			} else {
				res.status(200).json({ message: "店家新增成功" });
			}
		});
	});
});

module.exports = router;
