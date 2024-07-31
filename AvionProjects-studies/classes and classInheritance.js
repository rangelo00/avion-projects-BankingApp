class Coolguy {
    // this was overwritten by constructor
    specialTrick = "magic"
    //no let or other variables

    constructor(trick) {
        this.specialTrick = trick;
    }
    //no functions
    showOff() {
        console.log(`Here's my trick: ${this.specialTrick}`);
    }
}

let joe = new Coolguy("skipping");
joe.showOff();

//-------------------------

class Vehicle {
    engines=1
    ignition(){
        console.log("Turning on my engine");
        
    }
    drive(){
        this.ignition();
        console.log("Drift left to dust")
    }
}

class Car extends Vehicle {
    wheels = 4
    drive() {
        console.log(`Rolling on all ${this.wheels} wheels!`)
    }
}

let joesCar = new Car();
joesCar.ignition();
console.log(joesCar.engines);
joesCar.drive();

class SpeedBoat extends Vehicle {
    engines = 2;
    ignition() {
        console.log(`Look at my BOAT`)
    }
}

let joesBoat = new SpeedBoat();
joesBoat.ignition();
console.log(joesBoat.engines);