var Pizza = {

    type: [],
    size: [smallPizza,mediumPizza,largePizza],
    toppings: [],
    crust: ["thick", "thin"],   
    

    function calculatePrice(){

    };
};

// Default crust is thin and crispy

var prices = {

    type:{
       
        VeggiePizza: {large: 950, medium: 750, small: 550}, 
        PepperoniPizza: {large: 950, medium: 750, small: 550}, 
        PizzaCapricciosa: {large: 950, medium: 750, small: 550}, 
        MargheritaPizza: {large: 850, medium: 650, small: 400}, 
        BBQChickenPizza: {large: 950, medium: 750, small: 550}, 
        HawaiianPizza: {large: 1050, medium: 800, small: 550}, 
        BuffaloPizza: {large: 1200, medium: 850, small: 650}, 
        SicilianPizza: {large: 1050, medium: 800, small: 600}, 
        CapresePizza: {large: 1000, medium: 850, small: 550}, 
        NewYorkPizza: {large: 950, medium: 750, small: 550},
        PizzaMarinara: {large: 1000, medium: 750, small: 550}, 
        PizzaNapoloetana: {large: 950, medium: 750, small: 550} 
    },

    size:{
        smallPizza: 600,
        mediumPizza: 850,
        largePizza: 1100

    },


    crust:{
        thinNCrispy: null, 
        thick: 150, 
        doubleStack: 350,
        doubleStackSmall: 200,

    }

};



var Order = {
    orderNo: "", 
    items: [],
    address: '',
};