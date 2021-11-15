//The constructor method is a special method that helps create and initialize an object created from a class. It works in tandem with the new keyword.

//we name the class
class User{
    constructor(first, last, e){ 
        //we call the constructor func and create parameters
        //these will be values that we want to be passed in and stored in the object constructor(first, last, e)
        this.f = first;
        this.l = last;
        this.email = e;
    } //on the right side we have the values that are getting passed in, on the left, the actual keys of the object being created.The left side stores the incoming arguments from the newly created object as the value for "this" specific object being created.
}

let userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first); //prints undefined. While 'first' is the parameter name in the constructor, it's not a property on the object.
console.log(userOne.f); //prints Paul
console.log(userOne.l); //prints O'Connor
console.log(userOne);  //prints User { f: 'Paul', l: "O'Connor", email: 'poconnor@elevenfifty.org' }



class Car{
    constructor(make, model, year){
        this.ma = make;
        this.mo = model;
        this.y = year;
    }
}

let carOne = new Car("Ford", "Edge", 2008);
console.log(carOne.ma)
console.log(carOne.mo)
console.log(carOne.y)