const orderId = new URLSearchParams(location.href).get("orderId");

document.querySelector(".submitBtn").addEventListener("click", () => {
	console.log(orderId);
	const nameInput = document.querySelector(".people");
	const drinkInput = document.querySelector(".drink");
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

	fetch(`/add-item/${orderId}/add-item`, {
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
