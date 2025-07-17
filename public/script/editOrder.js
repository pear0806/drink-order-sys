document.addEventListener("DOMContentLoaded", () => {
	const container = document.querySelector(".container");
	fetch("/get-orders")
		.then((res) => res.json())
		.then((data) => {
			container.innerHTML = "";

			data.forEach((order) => container.appendChild(createOrder(order)));

			const homePageLink = document.createElement("a");
			homePageLink.href = "../index.html";
			homePageLink.innerText = "返回首頁";
			container.appendChild(homePageLink);
		});
});
