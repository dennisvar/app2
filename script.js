// forgot to add 'document'
allButtons = document.querySelectorAll('.menuBtn')

allButtons.forEach((button) => {
	let itemName = button.dataset.name
	// forgot to add parseFloat
	let itemPrice = parseFloat(button.dataset.price)

	button.addEventListener("click", () => {
		addItem(itemName, itemPrice)
	})
// forgot to add the closing parenthesis
})

let items = []

function addItem(name, price) {
	items.push({name, price})
	printReceipt()
}

function printReceipt() {
	receipt = document.getElementById('receipt')
	itemList = ""
	// made this a string instead of a number by mistake
	total = 0

	items.forEach((item) => {
		itemList += `${item.name} - $${item.price}<br>`
		total += item.price
	})

	receipt.innerHTML = itemList
	receipt.innerHTML += `<br>total: $${total.toFixed(2)}`
}






