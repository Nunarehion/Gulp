// function apiDataUser() {
// 	const data = {
// 		User: {
// 			head: ["Name", "Email"],
// 			rows: [
// 				["Jon", "jon.doe@example.com"],
// 				["Martin", "martin.smith@example.com"],
// 				["Alice", "alice.johnson@example.com"],
// 				["Emily", "emily.davis@example.com"],
// 				["Michael", "michael.brown@example.com"],
// 				["Sarah", "sarah.wilson@example.com"],
// 				["David", "david.lee@example.com"],
// 				["Laura", "laura.garcia@example.com"],
// 				["James", "james.martinez@example.com"],
// 				["Sophia", "sophia.taylor@example.com"],
// 				["Chris", "chris.jones@example.com"],
// 				["Patricia", "patricia.brown@example.com"],
// 				["Robert", "robert.white@example.com"],
// 				["Linda", "linda.green@example.com"],
// 				["William", "william.black@example.com"],
// 			],
// 		},
// 	};
// 	return data;
// }

// function apiDataProduct() {
// 	const data = {
// 		Product: {
// 			head: ["Product", "About", "Price"],
// 			rows: [
// 				[
// 					"Арбуз",
// 					"Сочный и сладкий фрукт, идеален для летнего освежения",
// 					"300",
// 				],
// 				["Яблоко", "Хрустящий фрукт, богатый витаминами и клетчаткой", "150"],
// 				["Банан", "Мягкий и сладкий фрукт, отличный источник калия", "200"],
// 				["Клубника", "Ароматная ягода, прекрасно подходит для десертов", "400"],
// 				["Апельсин", "Цитрусовый фрукт, богатый витамином C", "250"],
// 				[
// 					"Груша",
// 					"Сладкий и сочный фрукт, отлично подходит для закусок",
// 					"180",
// 				],
// 				["Виноград", "Сладкие ягоды, идеально подходят для перекуса", "350"],
// 				["Персик", "Сочный фрукт с нежной мякотью, идеален для лета", "320"],
// 				["Мандарин", "Маленький цитрусовый фрукт, легко очищается", "220"],
// 				["Киви", "Экзотический фрукт с ярким вкусом и зеленой мякотью", "280"],
// 			],
// 		},
// 	};
// 	return data;
// }

// function apiDataCard() {
// 	const data = {
// 		Card: {
// 			head: ["Card Number", "Cardholder Name", "Expiration Date", "CVV"],
// 			rows: [
// 				["1234 5678 9012 3456", "Jon Doe", "12/25", "123"],
// 				["2345 6789 0123 4567", "Martin Smith", "11/24", "456"],
// 				["3456 7890 1234 5678", "Alice Johnson", "10/23", "789"],
// 				["4567 8901 2345 6789", "Emily Davis", "09/26", "012"],
// 				["5678 9012 3456 7890", "Michael Brown", "08/25", "345"],
// 				["6789 0123 4567 8901", "Sarah Wilson", "07/24", "678"],
// 				["7890 1234 5678 9012", "David Lee", "06/23", "901"],
// 				["8901 2345 6789 0123", "Laura Garcia", "05/26", "234"],
// 				["9012 3456 7890 1234", "James Martinez", "04/25", "567"],
// 				["0123 4567 8901 2345", "Sophia Taylor", "03/24", "890"],
// 			],
// 		},
// 	};
// 	return data;
// }

// function apiDataPayment() {
// 	const data = {
// 		Payment: {
// 			head: ["Payment Amount", "Payment Method", "Transaction ID"],
// 			rows: [
// 				["100.00", "Credit Card", "TXN123456"],
// 				["250.50", "PayPal", "TXN123457"],
// 				["75.00", "Debit Card", "TXN123458"],
// 				["300.00", "Bank Transfer", "TXN123459"],
// 				["50.25", "Credit Card", "TXN123460"],
// 				["150.75", "PayPal", "TXN123461"],
// 				["200.00", "Debit Card", "TXN123462"],
// 				["400.00", "Bank Transfer", "TXN123463"],
// 				["125.00", "Credit Card", "TXN123464"],
// 				["80.00", "PayPal", "TXN123465"],
// 			],
// 		},
// 	};
// 	return data;
// }

// function fetch(url, options = {}) {
// 	return new Promise((resolve, reject) => {
// 		const path = url.split("/");
// 		const point = path[path.length - 1];

// 		const createResponse = data => {
// 			return {
// 				json() {
// 					return Promise.resolve(data);
// 				},
// 				status: 200,
// 				statusText: "OK",
// 				headers: {
// 					get: header => {
// 						const headers = {
// 							"Content-Type": "application/json",
// 						};
// 						return headers[header] || null;
// 					},
// 				},
// 				ok: true,
// 				url: url,
// 			};
// 		};

// 		if (point === "users") {
// 			resolve(createResponse(apiDataUser()));
// 		} else if (point === "products") {
// 			resolve(createResponse(apiDataProduct()));
// 		} else if (point === "cards") {
// 			resolve(createResponse(apiDataCard()));
// 		} else if (point === "payments") {
// 			resolve(createResponse(apiDataPayment()));
// 		} else {
// 			const errorResponse = {
// 				status: 404,
// 				statusText: "Not Found",
// 				ok: false,
// 				url: url,
// 			};
// 			reject(errorResponse);
// 		}
// 	});
// }

document.addEventListener("submit", function (event) {
	event.preventDefault();
	const formData = new FormData(event.target);
	const data = Object.fromEntries(formData);

	console.log("Data to be sent:", data);
	fetch("/" + data.formName, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then(response => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		})
		.then(data => {
			console.log("Success:", data);
		})
		.catch(error => {
			console.error("Ошибка:", error);
		});
});

document.addEventListener("alpine:init", () => {
	Alpine.data("dataStore", () => ({
		dataTest: "mem",

		getData(endpoint) {
			fetch(endpoint)
				.then(response => {
					if (!response.ok) {
						throw new Error(`Error: ${response.statusText}`);
					}
					return response.json();
				})
				.then(data => {
					const fullUrl = `${window.location.origin}${endpoint}`;
					const formattedEndpoint = endpoint
						.replace(/^\//, "")
						.replace(/^./, str => str.toUpperCase());

					data.fullUrl = fullUrl;

					this.window.dataTable = Object.assign(this.window.dataTable, {
						[formattedEndpoint]: data,
					});

					//alert(JSON.stringify(data));
				})
				.catch(error => {
					alert(error);
				});
		},

		getUsers() {
			this.getData("/users");
		},
		getProducts() {
			this.getData("/products");
		},
		getCards() {
			this.getData("/cards");
		},
		getPayments() {
			this.getData("/payments");
		},

		window: {
			state: Array.from(document.querySelectorAll(".sidebar a")).map(
				link => link.textContent
			)[0],
			states: Array.from(document.querySelectorAll(".sidebar a")).map(
				link => link.textContent
			),
			setState(text) {
				this.state = text;
			},
			dataTable: {},
		},

		init() {
			this.getUsers();
			this.getProducts();
			this.getCards();
			this.getPayments();
		},
	}));
});
