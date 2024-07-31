// for keyword - indicator that the ff block of code is "for loop"
// first value - starting index
// second value - condition step; ending index; checks if it's still true or false
// third value - increment/decrement step by step
// index ++ = "index = index+1" (index can be any name "i", "dog", etc.)

for (let index=5; index<11; index++) {
    console.log(index);
}

const dogNames = ["Loki", "Willow", "Babooshka"]
for (let pup=0; pup< dogNames.length; pup++) {
    console.log(dogNames[pup]);
}

// for loops with if statement

let pairs = [5, 14, 7, 10]
for (let i=0; i<pairs.length; i++) {
    if(pairs[i]%2==0){
     console.log(`${pairs[i]} please take a seat`);
    } else {
     console.log(`${pairs[i]} get the hell out of my resto`);
    }

}
//pairs[0] //5
//pairs[1] //14
//pairs[2] //7
//pairs[3] //10


//**CODING CHALLENGE 

//for (let bteam = 1; bteam<58; bteam++) {
 //   if(bteam%2==0){
 //    console.log(`${bteam} BLUE TEAM`);
 //   } else {
  //   console.log(`${bteam} RED TEAM`);
//   }

//}

//**CODING CHALLENGE 2 */

const nightClubRegister = [
   {
        name: 'Raoul',
        lastname: 'Fernando',
        age: 8,
        gender: 'male'
    },
    {
        name: 'Petersen',
        lastname: 'Jakub',
        age: 88,
        gender: 'male'
    },
    {
        name: 'Shera',
        lastname: 'Lionstar',
        age: 45,
        gender: 'female'
    },
    {
        name: 'Gracias',
        lastname: 'Juno',
        age: 14,
        gender: 'female'
    },
]

//to get the nightClubRegister data above

for (let i=0; i <nightClubRegister.length; i++) {
    if (nightClubRegister[i].age<18) { //declare age
        if (nightClubRegister[i].gender === 'male'){ //then declare gender
            console.log(`Sorry Mr ${nightClubRegister[i].lastname} you are too young`)
        }
    
        if (nightClubRegister[i].gender === 'female'){
        console.log(`Sorry Ms. ${nightClubRegister[i].lastname} you are too young`)
        }
    }

    if (nightClubRegister[i].age>=18) {
        if (nightClubRegister[i].gender === 'male'){
            console.log(`Sorry Mr ${nightClubRegister[i].lastname}, you are too old. Come in!`)
        }

        if (nightClubRegister[i].gender === 'female'){
            console.log(`Sorry Ms./Mrs. ${nightClubRegister[i].lastname}, you are too old. Come in!`)
        }
    }
}