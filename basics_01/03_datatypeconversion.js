let score = 49

//console.log(typeof score)
//console.log(typeof(score))

let valueInNumber = String(score)
//console.log(typeof score)
//console.log(typeof valueInNumber)

let num = "undefined"
let valueInNum = Number(num)
//console.log(valueInNum) //gives NaN as output , which means not a number 

// for boolean value it gives 1/0 when converted to number , 
// when it is a string which can not be converted then we would get NaN 

/*
"33" -> 33
"33ABC" -> NaN
true -> 1 , false -> 0 
*/

// let isloggedIn = 1
// let isloggedIn = " "
// let isloggedIn = "gaurav"         //try all 3 and understand
//let booleanIsLoggedIn = Boolean(isloggedIn)
//console.log(booleanIsLoggedIn) // gets converted to true 

/*
1-> true , 0-> false
"" -> false
" " -> true
"gaurav" -> true
*/

let someNumber = 69

let strNum = String(someNumber)
console.log(strNum)
console.log(typeof strNum)