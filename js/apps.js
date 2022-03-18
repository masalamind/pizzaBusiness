
var prices = {

     type:{

        "VeggiePizza": { "large": 950, "medium": 750, "small": 550 }, 
        "PepperoniPizza": { "large": 950, "medium": 750, "small": 550 }, 
        "PizzaCapricciosa": { "large": 950, "medium": 750, "small": 550 }, 
        "MargheritaPizza": { "large": 850, "medium": 650, "small": 400 }, 
        "BBQChickenPizza": { "large": 950, "medium": 750, "small": 550 }, 
        "HawaiianPizza": { "large": 1050, "medium": 800, "small": 550 }, 
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



var saucyToppings = [ "BBQSauce","MexicanSauce","Sweet&SourSauce","SweetChilliSauce","TikkaSauce","FriedUpSauce" ];
var greenyToppings = [ "GreenChilli","Olives","Garlic","Tomato","Pineapple","Mushroom","GreenPepper","Onion","SweetBellPepper","FreshAvocado","Jalapeno" ];
var meatyToppings = [ "Macon", "Chicken","Ground-beef","Salami","Ham","SlicedCheese" ];


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
          
            currentToppingsPrice = toppingsPrice.saucy[this.size]
        }

        if(greenyToppings.includes(this.toppings) ){            
            
            currentToppingsPrice = toppingsPrice.greeny[this.size]      
        }

        if(meatyToppings.includes(this.toppings) ){
           
            currentToppingsPrice = toppingsPrice.meaty[this.size]
        }

        return currentToppingsPrice; 
    }   

    
    calculatePrice(){
        
        let pizzaPrice = prices.type[this.type][this.size];
        let crustPrice = prices.crust[this.crust];
        let toppingsPrice = this.fetchToppingsPrice();       
        
        
        
        // careful that toppingsPrice does not clash with the other variable 
        console.log(this.quantity)
        return (pizzaPrice + crustPrice + toppingsPrice) * this.quantity;
        
    }

    increasePizzasQty(){

        this.quantity += 1;
    }

    decreasePizzasQty(){

        this.quantity -= 1;

    }

    
};


var Order = {
    orderNo: "", 
    items: [],
    address: '',
};