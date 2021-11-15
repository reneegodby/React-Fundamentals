class User {
    constructor(name) {
        this.name = name;
        this.type = 'Trial User'
    };

    //Method 1
    greet(){
        console.log(`Welcome back, ${this.name}`);
    };

    //Method 2
    status(){
        console.log(`Current status: ${this.type}`);
    };
};
// So let's say we wanted to make a bunch of different types of users: Trial, Bronze, Admin. Each one of these will have different functions available, but we all want them to have some properties that are similar. We can do this by making a new class that inherits certain properties from another class. We call this parent and child class. It's referred to as inheritance. Another way you might hear it referenced is 'subclass'.

//Let's create a subclass that extends the parent class. 
class TrialUser extends User {
    trialEnding(){  //a child class can have its own separate methods but inherits the parent methods as well. 
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`);
    };
};

//Instance of User class

let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

//Instance of TrialUser class

let trialUser = new TrialUser('Paul');
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

//Instance of BannedUser class
class BannedUser extends User {
    trialEnded(){
        console.log(`Your trial has ended, ${this.name}. Please subscribe to our service to use again.`)
    }
}

let bannedUser = new BannedUser('Anthony');
bannedUser.greet();
bannedUser.trialEnded();
bannedUser.status();