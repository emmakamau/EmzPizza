$(document).ready(function(){
    //Click on order online to display form
    $("div#order-now-select").click(function(){
        $("div#order-form-section").show()
    })

    //Form submission and user logic
    $("form#pizza-order-form").submit(function(event){
        event.preventDefault()

        var newPizzaPurchase = new pizzaPurchase()

        

        // if($('input#pizza-selected_'+splitId[1]).is(':checked'))
        $("div.form-pizza-row").each(function(){
            var checkId = $(this).find("input.pizza-selected").attr("id")
            var splitId = checkId.split("_")
            console.log(checkId)
            if($('input#pizza-selected_'+splitId[1]).is(':checked')){
                var quantity = $(this).find('.qty').find(":selected").text();
                var size = $(this).find('.size').find(":selected").text();
                var crust = $(this).find('.crust').find(":selected").text();
                var toppings = $(this).find('.toppings').find(":selected").text();
                var newOrder = new pizzaOrder(quantity,size,crust,toppings)
                newPizzaPurchase.orders.push(newOrder)
                newOrder.priceCalculation()

                console.log(newOrder)
            }
        }) 
       

        // console.log(newPizzaPurchase)
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

    pizzaOrder.prototype.priceCalculation = function(){

        var priceSize
        var priceCrust
        var deliveryFee
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

        // if($('input#to-be-delivered').is(':checked')){
        //     deliveryFee = 200
        // }else{
        //     deliveryFee = 0
        // }

        subTotal = (priceSize+priceCrust)*parseInt(this.qty)
        document.getElementById('total-amt').innerHTML = subTotal
        
    }
    
})






