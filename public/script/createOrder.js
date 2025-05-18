document.addEventListener("DOMContentLoaded", () => {
	fetch("/get-store")
		.then((res) => res.json())
		.then((data) => {
			const select = document.querySelector(".StoreSelect");
			data.forEach((store) => {
				const option = document.createElement("option");
				option.value = store.store;
				option.textContent = store.store;
				select.appendChild(option);
			});
		});
});

document.querySelector(".submitBtn").addEventListener("click", () => {
	const nameInput = document.querySelector(".PeopleNameInput");
	const storeSelect = document.querySelector(".StoreSelect");
	const remarkInput = document.querySelector(".remarkInput");

	const name = nameInput.value;
	const store = storeSelect.value;
	const remark = remarkInput?.value;

	if (!name || !store) {
		alert("發起人及店家不得為空!!!");
		return;
	} else {
		const orderData = {
			name: name,
			store: store,
		};
		if (remark) {
			orderData.remark = remark;
		}

		fetch("/create-order", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(orderData),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				alert(data.message);

				nameInput.value = "";
				storeSelect.value = "";
				remarkInput.value = "";
			});
	}
});
