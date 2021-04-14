 var removeCartItemButtons = document.getElementsByClassName('btn');
    console.log(removeCartItemButtons);
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click' , function(event){
            // console.log('clicked')
            var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.remove()
            updateCartTotal()
        }) 
    }

    function updateCartTotal() {
        var cartItemContainer = document.getElementsByClassName('all-cart-items')[0]
        var cartRows = cartItemContainer.getElementsByClassName('cart-row')
        var total = 0
        for (var i = 0; i < cartRows.length; i++) {
            var cartRow = cartRows[i]
            var priceElement = cartRow.getElementsByClassName('cart-price')[0]
            var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
           console.log(priceElement,quantityElement)
           var price = parseFloat(priceElement.innerText.replace('$', ''))
           var quantity = quantityElement.value
           total = total + (price * quantity)
       }
        total = Math.round(total * 100) / 100
        document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
    }