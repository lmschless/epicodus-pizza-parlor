// Business logic
let orderNumber = 0;
let toppings = [];
let newOrder;
let orders = [];
let total;
let pizzaSize;
let totalToppings;

class NewOrder {
	constructor(pizzaSize, toppings) {
		this.pizzaSize = pizzaSize;
		this.toppings = [];
		this.orderNumber = orderNumber++;
		this.total = 0;
		this.history = '';
	}

	timeStamp() {
		return new Date();
	}

	sizePricing() {
		switch (pizzaSize) {
			case 'Personal':
				total += 2;
				console.log('inside personal case');
				break;
			case 'Small':
				total += 3;
				break;
			case 'Medium':
				total += 4;
				break;
			case 'Large':
				total += 5;
				break;
		}
	}
	totalToppings() {
		switch (totalToppings) {
			case totalToppings === 1:
				total += 2;
				console.log('inside 1 topping case');
				break;
			case totalToppings === 2:
				total += 3;
				break;
			case totalToppings === 3:
				total += 4;
				break;
			case totalToppings === 4:
				total += 5;
				break;
			case totalToppings === 0:
				break;
		}
	}

	// withdrawal(amount) {
	// 	if (amount > 0) {
	// 		if (amount <= this.balance) {
	// 			this.balance -= amount;
	// 			this.history += `<h4>${this.timeStamp()}</h4> <p>Withdrawn: $${amount}, Balance: $${this.balance}<p>`;
	// 			return true;
	// 		} else {
	// 			alert(`Withdraw error: ${amount} exceeds current funds!`);
	// 			return false;
	// 		}
	// 	} else {
	// 		return false;
	// 	}
	// }
}

// UI Logic
$(document).ready(function() {
	$('#order').submit(function() {
		event.preventDefault();
		const userName = $('#name').val();
		pizzaSize = $('#pizza-size').val();
		const currentToppings = $('#toppings').val();
		totalToppings = 4 - $('input:checkbox:not(":checked")').length;
		console.log(userName, pizzaSize, currentToppings);
		newOrder = new NewOrder(pizzaSize, toppings);
		newOrder.sizePricing();
		newOrder.totalToppings();
		orders.push(newOrder);
		$('#current-total').val(newOrder.total);
	});
});
