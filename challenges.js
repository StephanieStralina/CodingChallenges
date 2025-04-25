// Challenge 1
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

//Answer 1
function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0
}

//Challenge 2
// Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this problem, that the supplied array will not be empty.

//Answer 2
function findSmallestInt(arr) {
    return Math.min(...arr);
  }

//Challenge 3
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty

//Answer 3
function removeEveryOther(arr){
    arr.filter((_, index) => index % 2 === 0);
  }

// Challenge 4
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

// Answer 4
function bmi(weight, height) {
    const bmi_calc = weight / (height * height);
    return bmi_calc > 30 ? 'Obese' :
           bmi_calc > 25 ? 'Overweight' :
           bmi_calc > 18.5 ? 'Normal' : 'Underweight';
}

// Challenge 5
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string

// Answer 5
function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}