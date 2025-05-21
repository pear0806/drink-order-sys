const urlParams = new URLSearchParams(window.location.search);
const orderId = urlParams.get("orderId");

document.querySelector(".submitBtn").addEventListener("click", () => {
	const nameInput = document.querySelector(".peopleName");
	const drinkInput = document.querySelector(".peopleName");
	const sweetInput = document.querySelector(".sweet");
	const iceInput = document.querySelector(".ice");
	const remarkInput = document.querySelector(".remark");

	const name = nameInput.value;
	const drink = drinkInput.value;
	const sweet = sweetInput.value;
	const ice = iceInput.value;
	const remark = remarkInput?.value;

	const order = {
		name: name,
		drink: drink,
		sweet: sweet,
		ice: ice,
		remark: remark,
	};

	fetch(`/get-order/${orderId}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(order),
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			alert(data.message);

			nameInput.value = "";
			drinkInput.value = "";
			sweetInput.value = "";
			iceInput.value = "";
			remarkInput.value = "";
		});
});
