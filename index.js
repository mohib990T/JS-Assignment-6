// Q1. Find the Product. 
// Write a program that takes an array as input from the user and 
// find out the product of the elements.

// const arr = [1, 2, 3, 4, 5];
// let product = arr.reduce((accum, curr) => {
//     return accum * curr;
// });
// console.log(product);
// -----------------------------------------------------------------

// Q2. Find the Sum. 
// Write a program which takes an array as input from the user and 
// find out the sum of the array elements.

// const arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((accum, curr) => {
//     return accum + curr;
// });
// console.log(sum);
// -------------------------------------------------------------------

// Q3. Count Occurrences 
// You are given an array A containing N integer elements and an integer K, 
// and your task is to return the count of occurrences of K in array A.

// let k = 3;
// const arr = [3, 3, 1, 2];
// let count = arr.filter((x) => x == k);
// console.log(count.length);
// ------------------------------------------------------------------------

// Q4. Even Odd 
// You are given an array A containing N integer elements, and 
// your task is to return an array B (having a size equal to 2), 
// where B[0] contains the sum of all even elements of array A and 
// B[1] has the sum of all odd elements of the array A.

// const arr = [1, 2, 3, 4, 5, 6, 7];
// let B = [];
// let even = arr.filter((x) => x % 2 == 0).reduce((accum, curr) => {
//     return accum + curr;
// });
// B[0] = even;
// let odd = arr.filter((x) => x % 2 != 0).reduce((accum, curr) => {
//     return accum + curr;
// });
// B[1] = odd;
// console.log(B);
// ---------------------------------------------------------------------------

// Q5. Find whether the number is present or not 
// Write a program which takes an array as input from the user and a number. 
// Check whether the number is present or not.

// let m = 2;
// const arr = [1, 2, 3, 4, 5];
// let present = (arr.includes(m) ? "YES" : "NO");
// console.log(present);
// -----------------------------------------------------------------------------

// Q6. Higher Age 
// You are given an array A containing the age of persons in your locality, 
// and your task is to find and return an array containing the age of persons 
// that are over 18 (18 included). 

// const arr = [11, 23, 3, 45, 72, 68];
// let age = arr.filter((x) => x >= 18);
// console.log(age);
// ------------------------------------------------------------------------------

// Q7. Increment the Array Elements 
// You are provided an array of integers and you have to increment all array 
// elements by 1 and then print whole array.

// const arr = [1, 2, 3, 4, 5];
// let increment = arr.map((x) => x + 1);
// console.log(increment);
// -------------------------------------------------------------------------------

// Q8. Pass or Fail 
// You are given an array A containing the maths marks of students in your class, 
// and your task is to determine if all the students pass in your class or not. 
// A student is declared pass if his maths marks are greater than or equal to 32. 
// If all the students pass in your class, return "YES" (without quotes); 
// otherwise, return "NO" (without quotes).

// const arr = [13, 89, 45, 98, 67, 45, 54];
// let result = (arr.every((x) => x >= 32) ? "YES" : "NO");
// console.log(result);
// ---------------------------------------------------------------------------------

// Q9. Unique Color Shirt 
// Prepbuddy is very tasteful of clothes. He has N numbers of shirts hanging in the 
// hanger in his wardrobe. Prepbuddy likes to wear different colored clothes. 
// So, whenever he see there are two or more shirts with the same color, 
// he removes all the shirt of that color from his wardrobe. 
// Now, he wants to know how many M unique color shirts are left in the wardrobe. 
// Prepbuddy wants you to find M.

// const arr = [3, 2, 4, 1, 2, 3];
// let uniqueNumbers = [];
// let nonRepeatingNumbers = [];
// const ocuurence = {};

// arr.forEach((num) => {
//     if (ocuurence[num] === undefined) {
//         ocuurence[num] = 1;
//         uniqueNumbers.push(num)
//     } else {
//         ocuurence[num]++;
//         const index = uniqueNumbers.indexOf(num);
//         if (index !== -1)
//         {
//             uniqueNumbers.splice(index, 1);
//         }
//     }
// });
// uniqueNumbers.forEach((num) => {
//     if (ocuurence[num] === 1) {
//         nonRepeatingNumbers.push(num)
//     }
// });
// console.log(nonRepeatingNumbers.length);
// ----------------------------------------------------------------------------------


// Q10. Min and Max 
// Congratulations on making up to this question. Let us give you a fairly simple 
// array problem to solve. If you know how to iterate through the array, 
// you will easily be able to solve this. The problem statement is simple- given N elements, 
// find the minimum and maximum numbers among those elements.

// const arr = [66, 33, 11, 44, 66, 22, 77];
// let newArr = arr.sort();
// console.log(newArr[0], newArr[newArr.length - 1]);
