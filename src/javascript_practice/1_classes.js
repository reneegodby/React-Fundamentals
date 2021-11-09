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

//Let's start with a higher level view of classes. We like to explain a class as a sort of blueprint for making objects. We'll also talk about it as a sort of cookie cutter. Think about this: If you had to make 1000 cookies for a 1000 kids, you are going to need a cutter. You're not going to use a kitchen knife, right? A class is the cutter that cuts cookies or objects, the actual tool, a blueprint for what kind of properties the cookie will have.

// We use that class to make new objects or instances of the class. Each of these objects can have different values for properties. Icing would be a property of a cookie class. Each cookie will have its own value for that property: white, red, blue, or no icing on that particular instance of cookie. Make sense?

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

//We have three different instances of the User class. Three different cookies.
// The . operator allows each instance of the class to 'access' the methods(functions) in the class.
// Each instance has a different result in the console based on the string that is passed in to the constructor.