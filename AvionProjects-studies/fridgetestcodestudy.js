const downButton = document.querySelector('#down')
const upButton = document.querySelector('#up')
const buyListDisplay = document.querySelector('#first-list')
const fridgeListDisplay = document.querySelector('#second-list')

var buyList = ['chicharon', 'buko pie', 'mango', 'bacon']
var fridge = []
// var fridge = ['pizza', 'burger'] 

//Challenge: Please fill the fridge array with 5 items of your choice. 
fridge.push('pizza', 'burger', 'chocolate', 'almond', 'egg')

// fridge.push('pizza');
// fridge.push('burger');

//Challenge 2: You have bought some chicharon.
//Please remove it from the buyList and add it to the items in fridge.
buyList.push('almond milk')
moveDown()
//Challenge 3: Write a function that will remove an item from the fridge,
//and put it in the buyList, on the press of the moveUp button.

function moveUp() {
    //your code
    if (buyList.length > 0) {
        // fridge.pop - from fridge list -> remove last element
        // buyList.push - adds element inside the parenthisis to the end of the buyList array
        buyList.push(fridge.pop());
        displayLists()
    }

}

upButton.addEventListener('click', moveUp)

//Challenge 4: Write a function that will remove the last item in the buyList, 
//and put it in the fridge.

function moveDown() {
    //your code
    if (fridge.length > 0) { // if fridge is not empty
        //buyList.pop() = buyList removes the last element
        //fridge.unshift() = fridge adds the element inside the parathesis to the front of the fridge arrate
        fridge.unshift(buyList.pop());
        displayLists()
    }
}

downButton.addEventListener('click', moveDown)

function displayLists() {

    buyListDisplay.innerHTML = buyList
    fridgeListDisplay.innerHTML = fridge

}

displayLists()