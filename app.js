// Business logic
let orderNumber = 0;
let toppings = [];
let newOrder;
let orders = [];
let total = 0;
let pizzaSize;
let totalToppings;

class NewOrder {
	constructor() {
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
		// switch (totalToppings) {
		// 	case totalToppings === 1:
		// 		total += 2;
		// 		console.log('inside 1 topping case', total);
		// 		break;
		// 	case totalToppings === 2:
		// 		total += 3;
		// 		break;
		// 	case totalToppings === 3:
		// 		total += 4;
		// 		break;
		// 	case totalToppings === 4:
		// 		total += 5;
		// 		break;
		// 	case totalToppings === 0:
		// 		break;
		// }
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
		total = 0;
		event.preventDefault();
		const userName = $('#name').val();
		pizzaSize = $('#pizza-size').val();
		totalToppings = 4 - $('input:checkbox:not(":checked")').length;
		newOrder = new NewOrder();
		console.log(userName, pizzaSize, totalToppings, total);

		newOrder.toppingsPricing();
		newOrder.sizePricing();
		orders.push(newOrder);
		$('#current-total').val(total);
	});
});
