// Business logic
let orderNumber = 0;
const orders = [];

class NewOrder {
	constructor(pizzaSize, totalToppings) {
		this.pizzaSize = pizzaSize;
		this.totalToppings = totalToppings;
		this.orderNumber = orderNumber++;
		this.history = '';
		this.orderTotal = 7;
	}
	// used for the transaction history timestamp
	timeStamp() {
		return new Date();
	}

	sizePricing() {
		switch (pizzaSize) {
			case 'Personal + ($3)':
				return this.orderTotal + 3;
			case 'Small + ($4)':
				return this.orderTotal + 4;
			case 'Medium + ($5)':
				return this.orderTotal + 5;
			case 'Large + ($6)':
				return this.orderTotal + 6;
		}
	}
	// tried to use a switch statement here but couldn't get it to work
	toppingsPricing(totalToppings) {
		if (totalToppings === 1) {
			this.orderTotal += 2;
		} else if (totalToppings === 2) {
			this.orderTotal += 4;
		} else if (totalToppings === 3) {
			this.orderTotal += 6;
		} else if (totalToppings === 4) {
			this.orderTotal += 8;
		}
		return this.orderTotal;
	}
}

// UI Logic
$(document).ready(function() {
	$('#order').submit(function() {
		// base pizza price is $7
		event.preventDefault();
		const userName = $('#name').val();
		pizzaSize = $('#pizza-size').val();
		const totalToppings = 4 - $('input:checkbox:not(":checked")').length;

		// Create new order using a constructor.
		newOrder = new NewOrder(pizzaSize, totalToppings);
		console.log(userName, pizzaSize, totalToppings, `${newOrder.orderTotal}`);
		// calls both class methods.
		// Pass in totalToppings to eliminate the global variable.
		newOrder.toppingsPricing(totalToppings);
		newOrder.sizePricing();

		orders.push(newOrder);
		$('#current-total').val(`$${newOrder.sizePricing()}`);
		$('#history').append(
			`<h4>${userName} ordered a ${pizzaSize} pizza with ${totalToppings} toppings for a total of $${newOrder.orderTotal}. </h4> <p>${newOrder.timeStamp()}</p>`
		);
	});
});
