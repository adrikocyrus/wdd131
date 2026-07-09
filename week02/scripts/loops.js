// JavaScript Loops Practice

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];


// 1. For loop - print values below 30
console.log("For Loop:");

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}


// 2. While loop - print values below 30
console.log("While Loop:");

let i = 0;

while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}


// 3. forEach loop - print values below 30
console.log("forEach Loop:");

studentReport.forEach(function(value) {
    if (value < LIMIT) {
        console.log(value);
    }
});


// 4. for...in loop - print values below 30
console.log("for...in Loop:");

for (let index in studentReport) {
    if (studentReport[index] < LIMIT) {
        console.log(studentReport[index]);
    }
}


// 5. Display the next DAYS day names starting today
console.log("Future Days:");

const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let today = new Date();

for (let day = 0; day < DAYS; day++) {
    let futureDate = new Date(today);
    futureDate.setDate(today.getDate() + day);

    console.log(dayNames[futureDate.getDay()]);
}