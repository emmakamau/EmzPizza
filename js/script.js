$(document).ready(function(){
    //Click on order online to display form
    $("img#order-now-select").click(function(){
        $("div#order-form-section").show()
    })

    var subTotal = 0
    var calcTotal = 0
    //Form submission and user logic
    $("form#pizza-order-form").submit(function(event){
        event.preventDefault()

        var newPizzaPurchase = new pizzaPurchase()

        // if($('input#pizza-selected_'+splitId[1]).is(':checked'))
        $("div.form-pizza-row").each(function(){
            var checkId = $(this).find("input.pizza-selected").attr("id")
            var splitId = checkId.split("_")
            if($('input#pizza-selected_'+splitId[1]).is(':checked')){
                var pizzaName = $(this).find('h4#pizza-name_'+splitId[1]).text();
                var quantity = $(this).find('.qty').find(":selected").text();
                var size = $(this).find('.size').find(":selected").text();
                var crust = $(this).find('.crust').find(":selected").text();
                var toppings = $(this).find('.toppings').find(":selected").toArray().map(item => item.text);
               // let toppingsArray = $(this).find('.toppings').find(":selected").val().join(',');

                console.log(toppings)
                var newOrder = new pizzaOrder(quantity,size,crust,toppings)
                newPizzaPurchase.orders.push(newOrder)
                subTotal = newOrder.priceCalculation()
                deliveryFee = newPizzaPurchase.delivery()

                $('tbody#display-order').append(
                        `<tr>`+
                            `<th>${pizzaName}</th>`+
                            `<th>${quantity}</th>`+
                            `<th>${size}</th>`+
                            `<th>${crust}</th>`+
                            `<th>${toppings}</th>`+
                            `<th>${subTotal}</th>`+
                        `</tr>`      
                )

                calcTotal = calcTotal + subTotal + deliveryFee
                document.getElementById("total-amt").innerHTML = calcTotal
            }
        }) 
        $("div.checkout-section").show()
        $("div.order-form-section").hide()
        document.querySelector("form").reset(); //Reset form after submission
    })

    function pizzaOrder(qty, size, crust, toppings){
        this.qty = qty
        this.size = size
        this.crust = crust
        this.toppings = toppings
    }
    
    function pizzaPurchase(){
        this.orders = []
    }    

    pizzaPurchase.prototype.delivery = function(){
        var deliveryFee
        if($('input#to-be-delivered').is(':checked')){
            deliveryFee = 200
            document.getElementById("delivery-charges").innerHTML = deliveryFee
            return deliveryFee
        }else{
            deliveryFee = 0
            return deliveryFee
        } 
    }

    pizzaOrder.prototype.priceCalculation = function(){

        var priceSize
        var priceCrust
        var subTotal
        
        if(this.size === "Small"){
            priceSize = 500
        }else if(this.size === "Medium"){
            priceSize = 800
        }else{
            priceSize = 1100
        }
    
        if(this.crust === "Crispy"){
            priceCrust = 100
        }else if(this.crust === "Stuffed"){
            priceCrust = 150
        }else{
            priceCrust = 200
        }

        this.toppings.forEach(function(topping){
            var price = 50
            var priceToppings = price + price 
        })

        subTotal = (priceSize+priceCrust+priceToppings)*parseInt(this.qty)
        
        return subTotal
    }
})

function deliveryMsg(){
    if($('input#to-be-delivered').is(':checked')){
        var location = prompt("Enter your location:")
        alert(`Your pizza will be delivered at ${location}.`)
    }
}

function completeOrder(){
    alert("Thank you, your order has been received.")
    $("div.checkout-section").hide()
}
