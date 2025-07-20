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

const createOrder = (orderData) => {
	const result = document.createElement("div");
	result.className = "order";

	result.innerHTML = `
		<div class="imformationDiv">
			<h3>店家 :</h3>
			<p>${orderData.store}</p>
		</div>
		
		<div class="imformationDiv">
			<h3>發起人 :</h3>
			<p>${orderData.name}</p>
		</div>

		<div class="imformationDiv">
			<h3>訂單ID :</h3>
			<p class="id">${orderData.id}</p>
		</div>

        <div class="imformationDiv">
            <h3>備註 :</h3>
            <p>${orderData.remark?.trim() ? orderData.remark : "無"}</p>
        </div>

		<a class="enterBtn" href="../page/ordering.html?orderId=${
			orderData.id
		}">加入訂單</a>
	`;

	return result;
};
