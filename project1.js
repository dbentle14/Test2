
class PT1{
    
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }

    print(){
        console.log(this.name+" "+this.cost);
    }
}

class PT2{
    
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }

    print(){
        console.log(this.name+" "+this.cost);
    }
}
class PT3{
    
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }

    print(){
        console.log(this.name+" "+this.cost);
    }
}
class PT4{
    
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }

    print(){
        console.log(this.name+" "+this.cost);
    }
}

const pt1 = new PT1("Shampoo", "5");
const pt2 = new PT2("Conditioner", "6");
const pt3 = new PT2("Toothpaste", "3");
const pt4 = new PT2("Mouthwash", "4");
pt1.print();
pt2.print();
pt3.print();
pt4.print();



function totalOrderPriceCalculator(productQty,price){
    console.log("total selected products are " + productQty + " and price per pc is " + price + " Total order value is " + productQty*price);
}
totalOrderPriceCalculator(15,20);