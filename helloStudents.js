'use strict'

// 1. Read the JSON file into a variable called students

const say = function (message) {

    console.log(message);
}
const students = require('./students.json');

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

students.forEach(function (student) {

    say(`HELLO ${student.firstName} ${student.lastName}`);
})

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1

students.forEach(function (student) {
    
    let str = student.lastName;
    let ch  = str.charAt(0)
    if(ch == 'D'){
    say(`Last names starting with D is  ${student.lastName}`);
    }
 
})