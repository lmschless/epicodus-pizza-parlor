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
		this.total = 0;
		this.history = '';
		this.sizePrice = 0;
		this.orderTotal = 0;
	}
	// used for the transaction history timestamp
	timeStamp() {
		return new Date();
	}

	sizePricing() {
		switch (pizzaSize) {
			case 'Personal + ($3)':
				total += 3;
				break;
			case 'Small + ($4)':
				total += 4;
				break;
			case 'Medium + ($5)':
				total += 5;
				break;
			case 'Large + ($6)':
				total += 6;
				break;
		}
	}
	// tried to use a switch statement here but couldn't get it to work
	toppingsPricing() {
		if (totalToppings === 1) {
			total += 2;
		} else if (totalToppings === 2) {
			total += 4;
		} else if (totalToppings === 3) {
			total += 6;
		} else if (totalToppings === 4) {
			total += 8;
		}
	}
}

// UI Logic
$(document).ready(function() {
	$('#order').submit(function() {
		// base pizza price is $7
		total = 7;
		event.preventDefault();
		const userName = $('#name').val();
		pizzaSize = $('#pizza-size').val();
		totalToppings = 4 - $('input:checkbox:not(":checked")').length;

		// Create new order using a constructor.
		newOrder = new NewOrder(pizzaSize, totalToppings);
		console.log(userName, pizzaSize, totalToppings, total);
		// calls both class methods.
		newOrder.toppingsPricing();
		newOrder.sizePricing();

		orders.push(newOrder);
		$('#current-total').val(`$${total}`);
		$('#history').append(
			`<h4>${userName} ordered a ${pizzaSize} pizza with ${totalToppings} toppings for a total of $${total}. </h4> <p>${newOrder.timeStamp()}</p>`
		);
	});
});
