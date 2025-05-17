document.querySelector(".submitBtn").addEventListener("click", () => {
	const peopleNameInput = document.querySelector(".PeopleNameInput");
	const storeNameInput = document.querySelector(".StoreNameInput");
	const storePhoneInput = document.querySelector(".StorePhoneInput");
	const storeAddressInput = document.querySelector(".StoreAddressInput");
	const peopleName = peopleNameInput.value;
	const storeName = storeNameInput.value;
	const storePhone = storePhoneInput?.value;
	const storeAddress = storeAddressInput?.value;

	if (!peopleName || !storeName) {
		alert("People Name and Store Name could not be empty!!!");
		return;
	}

	const storeData = {
		name: peopleName,
		store: storeName,
	};
	if (storePhone) storeData.phone = storePhone;
	if (storeAddress) storeData.address = storeAddress;

	fetch("/add-store", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(storeData),
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			alert(data.message);

			peopleNameInput.value = "";
			storeNameInput.value = "";
			storePhoneInput.value = "";
			storeAddressInput.value = "";
		});
});
