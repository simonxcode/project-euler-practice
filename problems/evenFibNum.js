// https://projecteuler.net/problem=2

/*
Breakdown:
  a. declare variables for:
    prevTwo(two terms prior to current)
    prevOne(one term prior to current)
    currTerm(prevTwo + prevOne)
    result(sum of all terms with even values)
  b. while currTerm is less than or equal to num, do a few things 
  c. if currTerm is even add it to result 
  d. upon exiting while loop return result 
*/

const fibEvenSum = (num) => {
  let prevTwo = 0
  let prevOne = 1
  let currTerm = prevOne + prevTwo
  let result = 0

  while(currTerm <= num) {
    prevTwo = prevOne
    prevOne = currTerm
    currTerm = prevTwo + prevOne

    if(currTerm % 2 === 0) {
      result += currTerm
    }
  }
  
  return result 
}

console.log(fibEvenSum(4000000)) //4613732
