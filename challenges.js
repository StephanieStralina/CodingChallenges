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

// Challenge 6
// Square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
// Note: The function accepts an integer and returns an integer.

// Answer 6
function squareDigits(num){
  return Number(num.toString().split("").map(n => n*n).join(""));
}

// Challenge 7
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// Answer 7
function XO(str) {
  return (
      str.toLowerCase().split("").filter(c => c === "x").length ===
      str.toLowerCase().split("").filter(c => c === "o").length
    );
}

// Answer 7 regex
function XO(str) {
  let x = str.match(/x/gi); //gi global insensitive
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

// Challenge 8
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle 
// (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// Answer 8
function rowSumOddNumbers(n) {
  let start = n * (n - 1) + 1;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += start + i * 2; 
  }
  return sum;
}

// Fun Mathy Answer 8
function rowSumOddNumbers(n) {
	return n*n*n
}

// Challenge 9
// You might know some pretty large perfect squares. 
// But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral 
// perfect square after the one passed as a parameter. 
// Recall that an integral perfect square is an integer n 
// such that sqrt(n) is also an integer.

// If the argument is itself not a perfect square then return 
// either -1 or an empty value like None or null, depending on your language. 
// You may assume the argument is non-negative.

// Examples ( Input --> Output )
// 121 --> 144
// 625 --> 676
// 114 --> -1  #  because 114 is not a perfect square

// Answer 9
