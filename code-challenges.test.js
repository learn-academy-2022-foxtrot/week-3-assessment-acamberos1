// ASSESSMENT 3: Coding Practical Questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
// notice the output says give numbers smaller and bigger 
// make a function that uses filter methods to make an array out of a single number and give numbers smaller to bigger 
// make function name self describing
// input the parameters
// put in expect statement so it outputs
// do the same for the other array
// test says failed to run with no specific error message
// error says cant call function before it is initialized
// try function above constant
// same error occured but then I revise syntax.
// originally i put array.filter but it wasnt counted as a function according to error so I tried const name and attached to filter
const fibLength1 = 6
const fibLength2 = 10
describe("returnLarger", () => {
  it("takes in a number then returns an array.", () =>{
  

// Expected output: [1, 1, 2, 3, 5, 8]
let  returnLarger = (arr, num) => {
  let emptyArr = [1, 1 ]
}
//}
  

  

// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
expect(returnLarger(fibLength1)).toEqual[1,1,2,3,5,8]
expect(returnLarger(fibLength2)).toEqual[1,1,2,3,5,8,13,21,32,34,55]
  })
})

 // let  returnLarger2 = (arr, num) => fibLength2.filter(fibLength2 => 10 > num); {
// } this is from past attempt 


// b) Create the function that makes the test pass.
// return larger function that name came from describe
// has empty array to already have  1 ,1 and calculate and accumalate based on incoming number
const returnLarger = (num) => {
      let emptyArr = [1,1]
     for (i = 2; i < num; i++) {
       emptyArr.push(emptyArr[i-2] + emptyArr[i-1])
     }
     return emptyArr
  }



// --------------------2) Create a function that takes in an object and returns an array of the numbers sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
// focus on making function that sorts the objects value from least to greatest
// first make function and name it with self documenting name
// use console log that spits out output as if it was manually entered first
// put expect statements under objects to expect the function and also the expected outcome listed

describe("leastToGreatest", () => {
  it("sorts object values least to greatest.", () => {
  
const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}

// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
expect(leastToGreatest(studyMinutesWeek1)).toEqual[15, 15, 20, 30, 30, 60, 90]
expect(leastToGreatest(studyMinutesWeek2)).toEqual[10,15,20,45,60,65]
})
})


  
// Expected output: [10, 15, 20, 45, 60, 65, 100]


// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// after looking at previous examples repeat stable structure of function writing
// make describe function and its description
// align syntax
// for tidyness have describe above the constants and encase them within the describe function
// write expected statements
// expect statement won't accept an empty square bracket without error
// im gonna try making a cont that equals an empty array then just call that into the expect statement
describe("sumUp", () => {
  it (" sums up the total amount in the array", () => {

    let emptyArr = []

const accountTransactions1 = [100, -17, -23, -9]

// Expected output: [100, 83, 60, 51]
expect(sumUp(accountTransactions1)).toEqual[100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]
expect(sumUp(accountTransactions2)).toEqual[250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []
expect(sumUp(accountTransactions3)).toEqual[emptyArr]
})
})


// b) Create the function that makes the test pass.
// this function makes new array and has var that is 0
// the fopr loop will iterate the array while also pushing the sum which is the accumulation of numbers into a new array then return it
let sumUp = (array) => {
  let sum = 0
  const inputArray = []
  for (i=0; i < array.length; i++) {
    sum = sum + array[i]
    emptyArr.push(sum)
  }
return emptyArr

}