// Business logic
let orderNumber = 0;
let toppings = [];
let newOrder;
let orders = [];
let total;
let pizzaSize;

class NewOrder {
	constructor(pizzaSize, toppings) {
		this.pizzaSize = pizzaSize;
		this.toppings = [];
		this.orderNumber = orderNumber++;
		this.total = total;
		this.history = '';
	}

	timeStamp() {
		return new Date();
	}

	totalToppings() {
		if (this.toppings === 1) {
			return (this.total += 1.99);
		}
	}
	sizePricing(pizzaSize) {
		if (this.toppings === 1) {
			return (this.total += 1.99);
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
		var pizzaSize = $('#pizza-size').val();
		const currentToppings = $('#toppings').val();
		var numberNotChecked = $('input:checkbox:not(":checked")').length;
		console.log(numberNotChecked);
		console.log(userName, pizzaSize, currentToppings);
		newOrder = new NewOrder(pizzaSize, toppings);
		orders.push(newOrder);
		console.log(newOrder.size, newOrder.toppings);
		$('#current-total').val(newOrder.total);
	});
});
