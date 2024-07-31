function Cat(name) {
    // the new operator creates an object, 'this'
    this.name = name;
    this.meows = function() {
        return `My name is ${this.name} ...Meow!`
    }
    // return the object 'this'
}

const garfield = new Cat('Garfield');
const kitty =  new Cat('Kitty');
const stubby = new Cat('Stubby');

console.log(garfield.meows()); // 'My name is Garfield ...Meow!'
console.log(kitty.meows()); // 'My name is Kitty ...Meow!'
console.log(stubby.meows());