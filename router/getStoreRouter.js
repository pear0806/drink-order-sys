const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
	const storeDataPath = path.join(__dirname, "../public/data/store.json");
	fs.readFile(storeDataPath, "utf8", (err, data) => {
		if (err) {
			return res.status(500).json({ error: "讀取失敗" });
		}
		try {
			const stores = JSON.parse(data);
			res.status(200).json(stores);
		} catch (e) {
			res.status(500).json({ error: "JSON格式錯誤" });
		}
	});
});

module.exports = router;
