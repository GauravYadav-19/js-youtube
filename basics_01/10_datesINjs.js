//Date is to be studied from the MDN after 2-3 yrs from now bcoz of the upcoming updates to the JS 
//For now this will do

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toISOString())   //Returns a date as a string value in ISO format.
// console.log(myDate.toJSON())     //Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization.
// console.log(myDate.toLocaleString())    //Converts a date and time to a string by using the current or specified locale.
// console.log(myDate.toDateString())     //returns the date as a string value with (weekday + month + day + year
// console.log(typeof myDate)      //object type 

let CreatedDate = new Date(2004 , 2 , 19)      // month is 0 based index jan->0th dec ->11th 
//console.log(CreatedDate.toDateString())        //to declare our own date 

let CreatedDate2 = new Date(2004 , 2 , 19 , 17 , 8 , 39)  //time also added //24 hr format
//console.log(CreatedDate2.toLocaleString()) 

let CreatedDate3 = new Date("2004-03-19")      //in yyyy-mm-dd format months start from 1 instead of 0
//console.log(CreatedDate3.toLocaleString()) 
 
let CreatedDate4 = new Date("03-19-2004")      //in mm-dd-yyyy format months start from 1 instead of 0
//console.log(CreatedDate4.toLocaleString()) 

//IMP:
//to compare timestamps for quizzes in milliseconds to tell who was the fastest
let Mytimestamp = Date.now()
//console.log(Mytimestamp)              //current time's millisecond value
//console.log(CreatedDate4.getTime())   //bcoz obj so we can use .get ,  and this will give the milliseconds passed since 1st jan 1970 till the given date

//to compare in seconds 
//NOTE: NOT ADVISABLE bcoz many can book a ticket at same second but not at same millisecond
//console.log(Math.floor(Date.now()/1000))    // /1000 milli -> sec , floor to remove decimal value

let date2 = new Date()
//console.log(date2)
//console.log(date2.getMonth()+1)   //+1 so user doesn't get confused in indexing
//console.log(date2.getDay()) //day 0-> sunday 
//console.log(date2.getTime());


// console.log(`today is ${date2.getDay()} and the time is ${date2.getTime()}`)

//***************************************SUPER IMPORTANT AND MOSTLY USED****************************
// date2.toLocaleString('default',{
//     weekday: "long",
//     timeZoneName: "long"
// })