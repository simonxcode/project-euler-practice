// https://projecteuler.net/problem=1

/*
Breakdown:
  a. declare variables to keep track of sum and current number
  b. loop through current number and determine if multiple of 3 or 5 
  c. if true, add current number to sum
  d. decrement current number for next loop
  e. upon exiting loop return sum
*/

const multipleThreeFive = (num) => {
  let sum = 0
  let currNum = num - 1

  while(currNum > 0) {
    if( currNum % 3 === 0 || currNum % 5 === 0) {
      sum += currNum
    }
    currNum--
  }

  return sum
}

console.log(multipleThreeFive(1000)) //233168
