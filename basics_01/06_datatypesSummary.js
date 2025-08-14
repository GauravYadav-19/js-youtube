//Classification 
//Data types are of 2 types , classsified on the basis of how the data is stored in the memory and 
// how it is being accessed from the memory.

/*
************************************************************************************************************
#1 Primitive DataTypes 
-> they are call by value 
(that means when we copy them , their address/original data is not given instead their copy is given
and the changes done by us occur in their copy and and not in the original data)


// 7 Types: String , Number , Null(means empty NOT 0) , Boolean , Undefined(means value not initialised) , 
//  Symbol(mostly used in advanced JS to make a component unique) , BigInt

// const id=Symbol('123')
// const anotherId=Symbol('123') //BOTH LOOK SAME BUT ARE DIFFERENT 
// console.log(id==anotherId);  

************************************************************************************************************
*/

//                           JS is a dynamically typed language
//This means that the data types of variables are determined at runtime based on the value they hold, 
//and these types can change throughout the program as different values are assigned to the same variable.

/*
************************************************************************************************************
#2 Non-Primitive or Refrence DataType
> Array
> Object
> Function

const heros =["SpiderMan" , "Falcon" , "IronMan"];   //defined inside sqr braces

let myObj={                 //defined inside curly braces
    name:"Gaurav",
    age:21,
}

const myFunction=function()
{
    console.log("Hi!")
}

//to check data type , we use 
console.log(typeof myFunction)
************************************************************************************************************
*/