const array_sample = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Print the third sub-array
console.log(array_sample[2]);

// Print the first element of the first sub-array
console.log(array_sample[0][0]);

// Initialize the maximum value to the first element of the array
let maximum = array_sample[0][0];

// Iterate through each sub-array
for (let i = 0; i < array_sample.length; i++) {
    // Iterate through each element in the current sub-array
    for (let j = 0; j < array_sample[i].length; j++) {
        // Update the maximum value if the current element is greater
        if (array_sample[i][j] > maximum) {
            maximum = array_sample[i][j];
        }
    }
}

// Print the maximum value found
console.log("The maximum value is:", maximum);
