const score1 = 400 //js automatically gives it number datatype
const score2 = new Number(350) //specifically giving it number data type

//console.log(score1,"\n",score2)

//console.log(score2.toString.length) // converts it to string and checks its length 
//console.log(score2.toFixed(2)) //precision value 2 means we need 2 digits after the decimal , it can be any number

const score3 = 178.937
// console.log(score3.toPrecision(4))   // does the round of the next term from the left to the given number 
// console.log(score3.toPrecision(3))   // gives precise value till the given digit 
// console.log(score3.toPrecision(2))   // gives the answer in terms of exponential 

const number = 10000000
//console.log(number.toLocaleString())        //inserts commas according to US standards by default
//console.log(number.toLocaleString('en-IN')) // inserts commmas accordig to Indian standards


/*
Number.MAX_VALUE  -> maximum value JS can process
Number.MIN_VALUE  -> minimum value JS can process
Number.MAX_SAFE_INTEGER  -> biggest integer value available to use 
Number.MIN_SAFE_INTEGER  -> smallest integer value available to use
*/

//*************************************************   MATHS   *************************************************
// console.log(Math)
// console.log(Math.abs(-19))      //absolute value
// console.log(Math.round(14.78))  //roundoff value
// console.log(Math.ceil(4.01))    //ceiling value
// console.log(Math.floor(3.999))  //floor value
// console.log(Math.pow(2,5))      //2 to the power 5
// console.log(Math.sqrt(5))       //square root of 5
// console.log(Math.min(2,18,-7,4,22))  //minimum value out of these
// console.log(Math.max(2,18,-7,4,22))  //maximum value out of these

//IMPORTANT
// console.log(Math.random()) // gives random value between 0 to 1
// console.log(Math.random()*10) // gives random value between 0 to 10
// console.log((Math.random()*10) + 1) // gives random value which will be atleast greater than 1 and less than 11
// console.log(Math.floor(Math.random()*10)+1) //floors the value 

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min) 
console.log(Math.floor(Math.random()*(max-min))+min) 
// {+1}to remove 0 from coming && {+min} to ensure atleast min value comes 
// ({min}value 10 not included bcoz of +1) and ({max}value 20 not included if we remove + 1)
// (Math.random()*(max-min+1))+min) formula that gives random values between max and min value give by the user 
// can be used in creating dice games , etc