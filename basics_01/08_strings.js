const name = "Gaurav"
const age = 21

//another way to declare string 
const userName = new String('Harshit')
//console.log(userName)

// console.log(name + " age is " + age )  this type of string concetanation is not recommended 

//console.log(`Hello My Name is ${name} and My Age is ${age}`)       // string interpolation
// more readable , mostly used because we can use methods with it , on the go 
 
//console.log(userName.length)
//console.log(userName[0])
//console.log(userName.__proto__);        //outputs object which seems empty but is not
//console.log(userName.italics()) //one of the many functions which we can use with string
//console.log(userName.toUpperCase())
//console.log(userName.charAt(5))
//console.log(userName.indexOf("s"))

/* to learn about string methods open inspect->console and type {const userName = new String('Harshit')}
then type console.log(userName) 
then open prototype and all functions will me visible their */

const newStr = userName.substring(0,4)      //NOTE: 4th index is not included
//console.log(newStr)     // we can give -ve values in this also but it wont obey and will start indexing from 0

const anotherStr = userName.slice(-3,7)     //minus lga mtlb piche se start hua h 
//console.log(anotherStr)

const str1 = "   shravan    "
//console.log(str1)
//console.log(str1.trim())    //trims both start and end white spaces 
// and it only works on white spaces + line terminators like \n etc. 

const url = "https://gaurav.com/name%20gaurav%20yadav" 
//console.log(url.replace('%20','-'))     // replaces 'x' with 'y' only works for the first match
//console.log(url.replaceAll('%20','-'))  // replaces all instances 

//console.log(url.includes("table"))      // checks if the string contains the given string in it or not

const str2 = "Hello my name is gaurav"
//console.log(str2.split(" "))    //creates an array seperated using the seperator {" "} white space

//gyan ki baat #1 : strings is the most important part in any language , so mastering it is very important