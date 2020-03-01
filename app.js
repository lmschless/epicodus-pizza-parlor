// Business logic
let orderNumber = 0;
let newOrder;
let orders = [];
let total = 0;
let pizzaSize;
let totalToppings;

class NewOrder {
	constructor(pizzaSize, totalToppings) {
		this.pizzaSize = pizzaSize;
		this.totalToppings = totalToppings;
		this.orderNumber = orderNumber++;
		this.total = 7;
		this.history = '';
		this.orderTotal = 0;
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
		this.orderTotal = sizePrice + this.total;
		return this.orderTotal;
	}
	// tried to use a switch statement here but couldn't get it to work
	toppingsPricing() {
		if (totalToppings === 1) {
			this.total += 2;
		} else if (totalToppings === 2) {
			this.total += 4;
		} else if (totalToppings === 3) {
			this.total += 6;
		} else if (totalToppings === 4) {
			this.total += 8;
		}
		return this.total;
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
			`<h4>${userName} ordered a ${pizzaSize} pizza with ${totalToppings} toppings for a total of $${total}. </h4> <p>${newOrder.timeStamp()}</p>`
		);
	});
});
