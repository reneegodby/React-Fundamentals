//E6 JS Classes

class User {
    constructor(name) {
        this.name = name;
        this.type = 'Trial User'
    };

    //Method 1
    greet() {
        console.log(`Welcome back, ${this.name}`);
    };

    //Method 2
    status() {
        console.log(`Current status: ${this.type}`);
    };
};

//Instance of the class/new object
let anonDude = new User('Anonymous dude');

//We can now use the new instance and the . operator to access the 2 methods
anonDude.greet();
anonDude.status();

//Another instance of the class
let anonLady = new User('Anonymous lady');
anonLady.greet();
anonLady.status();

//Another instance of the class
let jeff = new User('Jeff');
jeff.greet();
jeff.status();

//We have three different instances of the User class. 
// The . operator allows each instance of the class to 'access' the methods(functions) in the class.
// Each instance has a different result in the console based on the string that is passed in to the constructor.