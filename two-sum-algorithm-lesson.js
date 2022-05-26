// TWO SUM ALGORITHM

const res = require("express/lib/response");

// "Given an array of numbers and a stand alone number,
// return all combinations of numbers in the array that
// add up to the stand alone number."

// let array = [2,5,8,3,-2,9,0];
// let targetSum = 3;

// Let’s code with brute force to get our solution.
// What do we know we need to do? We need to take the first number and
// add it against every other number in the array to check if it equals
// our target sum. If it does, we’ll take note and continue down the line.
// For this we’re going to use our good old friend “For loop”!

// const firstTwoSum = (arr, sum) => {
//     let results = [];

//     for(let i = 0; i < arr.length; i++) {

//     }
// }

// This will get us our first number in the array but now we need to loop
// through the other numbers in the array. We’ll have to create ANOTHER loop
// and nest it our first one. We can’t use our variable “i” since we used in
// our first loop. So let’s use “j” for our nested second loop.

// const firstTwoSum = (arr, sum) => {
//     let results = [];

//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length; j++) {

//         }
//     }
// }

// Now that the nested loops are set, we need to add our looped elements together
// and see if it equals our target sum:

// arr[i] + arr[j] === sum

// Lets make this conditional that if this statement is true, we'll add this
// combination of elements to our "results" area we declared earlier.

// let array = [2,5,8,3,-2,9,0];
// let targetSum = 3;

// const firstTwoSum = (arr, sum) => {

//     let results = [];

//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length; j++) {
//             if(arr[i] + arr[j] === sum) {
//                 results.push(arr[i], arr[j])
//             }
//         }
//     }
//     return results
// }

// The .push() method lets us return "results" at the end of our function.
// Although this gives us our solutions, the bigger the array input the slower
// this will run, making O(n²)

// let array = [2,5,8,3,-2,9,0];
// let targetSum = 3;

// const firstTwoSum = (arr, sum) => {

//     let results = [];
//     let map = {};

//     for(let i = 0; i < arr.length; i++) {
//         map[arr[i]] = true;
//         let diffOfElementAndSum = sum - arr[i];
//         }
// }

// Just as before, we start by making a for loop Not Quite.
// If we can create a hashmap and just see if the remainder
// exists in the hash it will take place of what would’ve been
// a nested loop. We’ll set the number in the array as the key,
// and have “true” be the value. To complete the logic, we need
// to store the 2 numbers in a variable. "diffOfElementAndSum" would
// be ideal as it's descriptive in exactly what it is.

// if(map[diffOfElementAndSum]){
//     results.push([arr[i], diffOfElementAndSum])
// }

let array = [2, 5, 8, 3, -2, 9, 0];
let targetSum = 3;

const firstTwoSum = (arr, sum) => {
  let results = [];
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = true;
    let diffOfElementAndSum = sum - arr[i];

    if (map[diffOfElementAndSum]) {
      results.push([arr[i], diffOfElementAndSum]);
    }
  }
  return results;
};

// console.log(firstTwoSum(array, targetSum)) to check results!

