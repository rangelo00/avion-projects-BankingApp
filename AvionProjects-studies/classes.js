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

