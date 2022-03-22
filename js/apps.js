/* 
*
*
BUSINESS LOGIC 
*
*
*/

// Data stores for pizza pricing details 

var prices = {

    type:{

        "VeggiePizza": { "large": 950, "medium": 750, "small": 550 }, 
        "PepperoniPizza": { "large": 950, "medium": 750, "small": 550 }, 
        "PizzaCapricciosa": { "large": 950, "medium": 750, "small": 550 }, 
        "MargheritaPizza": { "large": 850, "medium": 650, "small": 400 }, 
        "BBQChickenPizza": { "large": 950, "medium": 750, "small": 550 }, 
        "HawaianPizza": { "large": 1050, "medium": 800, "small": 550 }, 
        "BuffaloPizza": { "large": 1200, "medium": 850, "small": 650 }, 
        "SicilianPizza": { "large": 1050, "medium": 800, "small": 600 }, 
        "CapresePizza": { "large": 1000, "medium": 850, "small": 550 }, 
        "NewYorkPizza": { "large": 950, "medium": 750, "small": 550 },
        "PizzaMarinara": { "large": 1000, "medium": 750, "small": 550 }, 
        "PizzaNapoloetana": { "large": 950, "medium": 750, "small": 550 } 
    },

    
    crust:{

        "thinNCrispy": 150, 
        "thick": 150, 
        "doubleStack": 350,
        "doubleStackSmall": 200    
    }
};

// Toppings details grouped together 

var saucyToppings = [ "BBQSauce","MexicanSauce","Sweet&SourSauce","SweetChilliSauce","TikkaSauce","FriedUpSauce" ];
var greenyToppings = [ "GreenChilli","Olives","Garlic","Tomato","Pineapple","Mushroom","GreenPepper","Onion","SweetBellPepper","FreshAvocado","Jalapeno" ];
var meatyToppings = [ "Macon", "Chicken","Ground-beef","Salami","Ham","SlicedCheese" ];


// Pizza class to instantiate every pizza order made
class Pizza{    

    constructor(type,size,crust,toppings,quantity=1){

        this.type = type;              // initial value is empty: filled when a user chooses
        this.size = size;               //[smallPizza,mediumPizza,largePizza],
        this.crust = crust;   // default crust is thin and crispy   
        this.toppings = toppings;
        this.quantity = quantity;
    }  
       
    
    fetchToppingsPrice(){        

        var toppingsPrice = {

            "saucy":{ "large":100, "medium": 100 , "small":50 }, 
            "greeny":{ "large": 150, "medium": 100, "small": 50 },
            "meaty":{ "large": 150, "medium": 150 , "small": 100 }    
        } 

        
        let currentToppingsPrice;
        
        if(saucyToppings.includes(this.toppings)){
          
            currentToppingsPrice = toppingsPrice.saucy[this.size];
        }

        if(greenyToppings.includes(this.toppings)){            
            
            currentToppingsPrice = toppingsPrice.greeny[this.size];      
        }

        if(meatyToppings.includes(this.toppings) ){
           
            currentToppingsPrice = toppingsPrice.meaty[this.size];
        }

        return currentToppingsPrice; 
    }   

    
    calculatePrice(){
        
        // Function calculate a pizzas price based on various toppings,size and crusts selected by user 

        let pizzaPrice = prices.type[this.type][this.size];
        let crustPrice = prices.crust[this.crust];
        let toppingsPrice = this.fetchToppingsPrice();   
                
         
        console.log(this.quantity)          // careful that toppingsPrice does not clash with the other variable

        return (pizzaPrice + crustPrice + toppingsPrice) * this.quantity;
        
    }

    increasePizzaQty(){

        this.quantity += 1;
    }

    decreasePizzaQty(){

        this.quantity -= 1;
    }

    
};


var Order = {
    orderNo: "", 
    items: [ ],
    address: "",
    deliveryMethod: "",
    paymentMethod:""

};




/* 
*
*
USER INTERFACE LOGIC
*
*
*/




$(document).ready(

   function(){   

    $('#PickupDelivery').click(

        function(){ 

            $('#PickupDeliveryInfo').toggle();             
    
    })


    $('#HomeDelivery').click(

        function(){ 

            $('#orderDeliveryInfo').toggle();
            alert("Your order will be delivered to your location");    
    
    })


    $('#mpesaPayment').click(

        function(){ 

            $('#mpesaInfo').toggle();         
    
    })


    $('#visaPayment').click(

        function(){ 

            $('#visaInfo').toggle();              
    
    })

    $('#visaPayment').hover(

        function(){ 

            $('#mpesaInfo').hide();              
    
    })





   // Order as many pizzas as you like using a counter option 
    // increment pizzas
    
    // $(".pizzaQtyBtn").click(function(){
        
    //     var pizzaType = $(this).attr("id");
    //     console.log(pizzaType);
    //     // newPizzaType = pizzaType.slice[0,-3];
    //     newPizzaType = pizzaType.substr(-3,0)
    //     console.log(newPizzaType);
    //     var pizzaQty = newPizzaType + "Qty";
    //     console.log(pizzaQty);
    //     // var pizzaQty = 


    // })


    $(".addPizza").submit(function(e){

        e.preventDefault();

        let pizza = $(this).attr("id");
        alert(pizza);

        // sizes
        let pizzaSizes = pizza+"Size";
        let pizzaSize = $("#"+pizzaSizes).val();
        
               
        // crusts 
        let pizzaCrusts = pizza+"Crusts";
        let pizzaCrust = $("#"+pizzaCrusts).val();
       
        
        // toppings 
        let pizzaToppings = pizza+"Toppings";
        let pizzaTopping = $("#"+pizzaToppings).val();
        

        // instantiate a pizza 
        let aPizzaOrder = new Pizza(pizza,pizzaSize,pizzaCrust,pizzaTopping);
        Order.items.push(aPizzaOrder);
       
        console.log(Order.items);
        

    })


    // Display orders 

    $("#checkoutBtn").click(

        function(){

            alert("Please confirm that you've ordered these Pizzas");             

            // get all the orders and display them 
        
            for (var i = 0 ; i < Order.items.length; i++){
                           
                $('.ordered-items').append("<button class='delete-item'> <i class='fa-solid fa-trash-can'></i></button><div class='item'><i class='fa-solid fa-pizza-slice'> </i> <span class='pizza-item-title'>" + Order.items[i].type +"</span><small class='yellow-small-text'> x </small><span class='pizza-item-quantity'>"+Order.items[i].quantity+"</span><span class='pizza-item-price'><small class='yellow-small-text'>ksh</small>" + Order.items[i].calculatePrice() +"</span></div>")
                
            }

            
            // add the total and update it 

            var total = 0;

            for (var i = 0 ; i < Order.items.length; i++){

                total += Order.items[i].calculatePrice();        

            }

            $("#totalOrderAmount").text(total);

        })
        
    
            
       
        
    
    })