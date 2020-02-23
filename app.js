// Business logic
let orderNumber = 0;
let toppings = [];
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
	}

	timeStamp() {
		return new Date();
	}

	sizePricing() {
		switch (pizzaSize) {
			case 'Personal + ($3)':
				total += 3;
				console.log('inside personal case');
				break;
			case 'Small + ($4)':
				total += 4;
				console.log('inside small case');
				break;
			case 'Medium + ($5)':
				total += 5;
				console.log('inside medium case', total);
				break;
			case 'Large + ($6)':
				total += 6;
				break;
		}
	}
	toppingsPricing() {
		if (totalToppings === 1) {
			console.log('inside totaltoppings = 1');
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
		total = 7;
		event.preventDefault();
		const userName = $('#name').val();
		pizzaSize = $('#pizza-size').val();
		totalToppings = 4 - $('input:checkbox:not(":checked")').length;
		// newOrder = new NewOrder();
		newOrder = new NewOrder(pizzaSize, totalToppings);
		console.log(userName, pizzaSize, totalToppings, total);

		newOrder.toppingsPricing();
		newOrder.sizePricing();
		orders.push(newOrder);
		$('#current-total').val(`$${total}`);
		$('#history').append(
			`<h4>${userName} ordered a ${pizzaSize} pizza with ${totalToppings} toppings for a total of $${total}. </h4> <p>${newOrder.timeStamp()}</p>`
		);
	});
});
