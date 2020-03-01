// Business logic
let orderNumber = 0;
const orders = [];
let pizzaSize;
let totalToppings;

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
		let sizePrice = 0;
		switch (pizzaSize) {
			case 'Personal + ($3)':
				sizePrice += 3;
				break;
			case 'Small + ($4)':
				sizePrice += 4;
				break;
			case 'Medium + ($5)':
				sizePrice += 5;
				break;
			case 'Large + ($6)':
				sizePrice += 6;
				break;
		}
		this.orderTotal = sizePrice + this.orderTotal;
		return this.orderTotal;
	}
	// tried to use a switch statement here but couldn't get it to work
	toppingsPricing() {
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
		totalToppings = 4 - $('input:checkbox:not(":checked")').length;

		// Create new order using a constructor.
		newOrder = new NewOrder(pizzaSize, totalToppings);
		console.log(userName, pizzaSize, totalToppings, `${newOrder.orderTotal}`);
		// calls both class methods.
		newOrder.toppingsPricing();
		newOrder.sizePricing();

		orders.push(newOrder);
		$('#current-total').val(`$${newOrder.sizePricing()}`);
		$('#history').append(
			`<h4>${userName} ordered a ${pizzaSize} pizza with ${totalToppings} toppings for a total of $${newOrder.orderTotal}. </h4> <p>${newOrder.timeStamp()}</p>`
		);
	});
});
