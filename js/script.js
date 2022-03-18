$(document).ready(function(){
    //Click on order online to display form
    $("div#order-now-select").click(function(){
        $("div#order-form-section").show()
    })

    //Form submission and user logic
    $("form#pizza-order-form").submit(function(event){
        event.preventDefault()

        var newPizzaPurchase = new pizzaPurchase()

        //if ($('input.checkbox_check').is(':checked'))

        $(".form-pizza-row").each(function(){
            var quantity = $(this).find('.qty').find(":selected").text();
            var size = $(this).find('.size').find(":selected").text();
            var crust = $(this).find('.crust').find(":selected").text();
            var toppings = $(this).find('.toppings').find(":selected").text();
            var newOrder = new pizzaOrder(quantity,size,crust,toppings)
            newPizzaPurchase.orders.push(newOrder)

            newOrder.subTotal()


        }) 
        console.log(newPizzaPurchase)
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

    pizzaOrder.prototype.subTotal = function(){

        var priceSize
        var priceCrust
        var subTotal
        // var total
        if(this.size === "Small"){
            priceSize = 500
        }else if(this.size === "Large"){
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

        subTotal = (priceSize+priceCrust)*parseInt(this.qty)
        console.log(this.qty, this.size, this.crust, this.toppings)
        console.log(priceCrust, priceSize)
        console.log(subTotal)
    }
    
})






