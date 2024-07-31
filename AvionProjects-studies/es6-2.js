class Animal { //class is a template for objects
    constructor(type, legs, sound) {
        this.type = type; //'this' keyword applies to newly created object
        this.legs = legs;
        this.sound = sound;
    }
    makeNoise(){
        console.log(this.sound);
    }

    static giveMe5() {
       return 5;
    }

 }

//'cat' as a new instance
let cat = new Animal('Cat', 4, 'mingming');
console.log(cat.legs);
console.log(cat.type);
cat.makeNoise();
console.log(Animal.giveMe5);

//'dog' as a new instance from class 'Animal'
let dog = new Animal('Woof', 5, 'ROAR')
console.log(dog.legs);

//console.log(Animal.giveme5());