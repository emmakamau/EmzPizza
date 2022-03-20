$(document).ready(function(){
    //Click on order online to display form
    $("div#order-now-select").click(function(){
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
                var toppings = $(this).find('.toppings').find(":selected").text();
                var newOrder = new pizzaOrder(quantity,size,crust,toppings)
                newPizzaPurchase.orders.push(newOrder)
                subTotal = newOrder.priceCalculation()

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

                if($('input#to-be-delivered').is(':checked')){
                    deliveryFee = 200
                }else{
                    deliveryFee = 0
                }                

                calcTotal = calcTotal + subTotal + deliveryFee
                document.getElementById("total-amt").innerHTML = calcTotal
                console.log("Total:",calcTotal)
            }
        }) 
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

    // pizzaPurchase.prototype.calcTotal = function(){

    // }

    pizzaOrder.prototype.priceCalculation = function(){

        var priceSize
        var priceCrust
        var deliveryFee
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

        

        subTotal = (priceSize+priceCrust)*parseInt(this.qty)
        //console.log(subTotal)
        return subTotal
    }
})






// $("div.form-pizza-row").each(function(){
        //     var checkId = $(this).find("input.pizza-selected").attr("id")
        //     var splitId = checkId.split("_")
        //     console.log('sub-total_'+splitId[1])
        //     document.getElementById('p#sub-total_'+splitId).innerHTML = subTotal
         
        // }) 

        // document.getElementById('p#sub-total_hawaiian').innerHTML = subTotal