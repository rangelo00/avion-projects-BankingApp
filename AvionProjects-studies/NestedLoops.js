

let num = 10; //1+2+3+4+5+6+7+8+9+10=55
let summation = 0;

for (let i = 1; i <= num; i++) {
    summation += i;
}

console.log(`the summation is ${summation}`);

//Case 2: GPA Calculator
//You are asked to develop a grading calculator for the professor in
//a university. This system will compute the average points of the exams of a student.
//Print the exam and the grades of the student.

let studentGrade = [
    {
        examQuarter: "1st Quarter",
        grade: 80,
    },
    {
        examQuarter: "2nd Quarter",
        grade: 70,
    },
    {
        examQuarter: "3rd Quarter",
        grade: 90,
    },
    {
        examQuarter: "4th Quarter",
        grade: 85,
    },
];

let totalGrade = 0;
let average = 0;

for (let i=0; i <studentGrade.length; i++){
    //totalGrade = totalGrade + studentGrade[i].grade;
    totalGrade += studentGrade[i].grade
    console.log(`${studentGrade[i].examQuarter} - ${studentGrade[i].grade}`);

}

average = totalGrade / studentGrade.length;
console.log(`The average grade is ${average}`);

/*
Case 3: Find the maximum number in a dynamic array.
(A dynamic array can change their length)
Input:
const array_sample = [{1,2,3}, {4,5,6}, {7,8,9}]
Output:
*Maximum number is 9*
*/

const array_sample = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

//for loops

//array with an array index
console.log(array_sample[2]); //{7,8,9},
console.log(array_sample[0][0]); // 1 (the number on index[0] which is '1' in {1,2,3},)

let maximum = array_sample[0][0] // temporary maximum to be able to update this to the real maximum

for (let outerIndex=0; outerIndex < array_sample.length; outerIndex++){
    console.log[`Outer Index: ${outerIndex}`];
    for (
        let innerIndex = 0;
        innerIndex < array_sample[outerIndex].length;
        innerIndex++
    ) {
        console.log(`Sample [${outerIndex} ${innerIndex}] = ${array_sample[outerIndex][innerIndex]}`);
        if (maximum < array_sample[outerIndex][innerIndex]){
            maximum = array_sample[outerIndex][innerIndex]
        }
    }

}

console.log(`Maximum number is ${maximum}`);