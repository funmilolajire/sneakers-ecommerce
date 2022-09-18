const displayQuantity = document.getElementById('quantity-to-add')
const headerCartButton = document.getElementById('header-cart-button')
const cartBox = document.getElementById('cart-box')
let quantityInCart = 0

const headerCartQuantityHandler = () => {
if(headerCartButton){
    if (quantityInCart) {
        headerCartButton.dataset.quantityInCart = `${quantityInCart}`
        if (!headerCartButton.classList.contains('header__cart--active')) {
            headerCartButton.classList.add('header__cart--active')
        }
         if (cartBox?.classList.contains('cart-box--is-empty')) {
            cartBox.classList.remove('cart-box--is-empty')
        }
        const cartAmountCalc = document.getElementById('cart-item-calc')
        const cartAmountTotal = document.getElementById('cart-item-total')
        if(cartAmountCalc&&cartAmountTotal){
            cartAmountCalc.textContent = `$125.00 x ${quantityInCart}`
            cartAmountTotal.textContent = `${(125.00 * quantityInCart).toFixed(2)}`
        }
    } else {
        headerCartButton.dataset.quantityInCart = '0'
        if (headerCartButton.classList.contains('header__cart--active')) {
            headerCartButton.classList.remove('header__cart--active')
        }
        if (!cartBox?.classList.contains('cart-box--is-empty')) {
            cartBox?.classList.add('cart-box--is-empty')
        }
    }
    }
}
const increaseQuantity = () => {
    if(displayQuantity){
        let currentAmount = Number(displayQuantity?.textContent)
        displayQuantity.textContent = `${currentAmount + 1}`
    }
}
const increaseButton = document.getElementById('increase-quantity') 
increaseButton?.addEventListener('click', increaseQuantity)

const decreaseQuantity = () => { 
    if(displayQuantity){
        let currentAmount = Number(displayQuantity?.textContent)
        displayQuantity.textContent = currentAmount !==0 ? `${currentAmount - 1}` : '0'
    }   
}
const decreaseButton = document.getElementById('reduce-quantity')
decreaseButton?.addEventListener('click', decreaseQuantity) 

const addToCart = () => {
    if(displayQuantity){
        quantityInCart = Number(displayQuantity?.textContent);
        headerCartQuantityHandler()
    }
}
const addToCartButton = document.getElementById('add-to-cart')
addToCartButton?.addEventListener('click', addToCart)

const removeFromCart = () => {
    if(displayQuantity){
        quantityInCart = 0;
        headerCartQuantityHandler()
    }
}
const removeFromCartButton = document.getElementById('remove-from-cart')
removeFromCartButton?.addEventListener('click', removeFromCart)

const clickHeaderCart = () => {
        cartBox?.classList.toggle('cart-box--open')
}
headerCartButton?.addEventListener('click', clickHeaderCart)

const checkOutButton = document.getElementById("checkout-button")
const checkOut = () => {
    if(checkOutButton){
    checkOutButton.textContent = 'Checking Out...'
    checkOutButton.setAttribute('disabled', 'true')
    addToCartButton?.setAttribute('disabled', 'true')
    removeFromCartButton?.setAttribute('disabled', 'true')
    setTimeout(() => {
        checkOutButton.textContent = 'Done'
        setTimeout(() => {
        checkOutButton.textContent = 'Checkout'
        quantityInCart = 0
        headerCartQuantityHandler()
        setTimeout(() => {
            checkOutButton.removeAttribute('disabled')
            addToCartButton?.removeAttribute('disabled')
            removeFromCartButton?.removeAttribute('disabled')
            cartBox?.classList.remove('cart-box--open')   
            }, 1000)
        }, 2000)
    }, 4000)
    }
}
checkOutButton?.addEventListener('click', checkOut)