  import findLongestWord from "./longestWrod.js"
  import calculatePrice from "./calculatePrace.js";
  import {average, importArray, sum} from "./import.js";


  
//   const fnA = function (){

// }
// fnB()


// function  fnB(){
//   console.log("fnB");
// }





// const numbers = [1,3,4,65,23,87,34,12,43];
// const numbers2 = [23,43,65,312];
 
// const numbersSum = sum(numbers);
// console.log(numbersSum);
// console.log(sum(numbers2));

// const numbersAver = average(numbers);
// console.log(numbersAver);
// console.log(average(numbers2));

// console.log (importArray);

const message = "Слава Україні, Героям Слава";
const price1 = calculatePrice(message,40);
console.log(price1);

const longestWord = findLongestWord(message);
console.log(longestWord);
