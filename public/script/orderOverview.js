document.addEventListener("DOMContentLoaded", () => {
	const container = document.querySelector(".container");
	fetch("/get-orders")
		.then((res) => res.json())
		.then((data) => {
			container.innerHTML = "";

			for (let i = 0; i < data.length; i++) {
				container.appendChild(createOrder(data[i]));
			}

			const homePageLink = document.createElement("a");
			homePageLink.href = "../index.html";
			homePageLink.innerText = "返回首頁";
			container.appendChild(homePageLink);
		});
});

const createOrder = (orderData) => {
	const result = document.createElement("div");
	result.className = "order";
	if (orderData.remark) {
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
                <p>${orderData.remark}</p>
            </div>
        `;
	} else {
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
        `;
	}
	return result;
};

/*
<div class="order">
<div class="imformationDiv">
<h3>店家 :</h3>
<p>Macu</p>
</div>
<div class="imformationDiv">
<h3>發起人 :</h3>
<p>Pear</p>
</div>

<div class="imformationDiv">
<h3>訂單ID :</h3>
<p class="id">1747563608904</p>
</div>

<div class="imformationDiv">
<h3>備註 :</h3>
<p>for all people</p>
</div>
</div>
*/
