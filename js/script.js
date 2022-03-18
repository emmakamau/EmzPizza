//Constructor for a pizza order
function pizzaOrder(qty, size, crust, toppings){
    this.qty = qty
    this.size = size
    this.crust = crust
    this.toppings = toppings
}

function pizzaPurchase(){
    this.orders = []
}


$(document).ready(function(){
    //Click on order online to display form
    $("div#order-now-select").click(function(){
        $("div#order-form-section").show()
    })

   
    //Form submission and user logic
    $("form#pizza-order-form").submit(function(event){
        event.preventDefault()

        var newPizzaPurchase = new pizzaPurchase()

        $(".form-pizza-row").each(function(){

            var quantity = $(this).find('.qty').find(":selected").text();
            var size = $(this).find('.size').find(":selected").text();
            var crust = $(this).find('.crust').find(":selected").text();
            var toppings = $(this).find('.toppings').find(":selected").text();

            var newOrder = new pizzaOrder(quantity,size,crust,toppings)
            newPizzaPurchase.orders.push(newOrder)
        }) 
        console.log(newPizzaPurchase)
    })
})


var quantity = document.getElementsByClassName("qty")
var size = document.getElementsByClassName("size")
var crust = document.getElementsByClassName("crust")
var toppings = document.getElementsByClassName("toppings")
var priceSize
var priceCrust
var subTotal
var total

function findSize(){
    if(size === "small"){
        priceSize = 500
        return price
    }else if(size === "large"){
        priceSize = 800
        return price
    }else{
        priceSize = 1,100
        return price
    }
}

function findCrust(){
    if(crust === "crispy"){
        priceCrust = 100
    }else if(crust === "stuffed"){
        priceCrust = 150
    }else{
        priceCrust = 200
    }
}