import faker from 'faker'

console.log('Cart APP')

const cartItem = `<div>You have ${faker.random.number()} of items in the cart</div>`

document.getElementById('dev-cart').innerHTML = cartItem
