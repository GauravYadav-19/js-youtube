//array

const myArr = [10,20,30,40,50,60]
const heros = ["Spiderman","Superman","Batman"]
const myArr2 = new Array(1,2,3,4.8) //aonther way to define an array

/*in JS arrays are resizable and can contain a mix of differnt datatypes
>console.log(myARR["one"]) -> wrong 
>JS array copy operations create shallow copies 
>shallow copies(is a copy whose properties share the same refrences as those of the source object from which the copy was made)
>deep copy(is a copy whose properties do not share the same refrence as those of the source object from which the copy was made)
*/

//Array Methods
//myArr.push(60)  //adds the new value to the end of the array
//myArr.pop()     //removes the last value of the array
//myArr.unshift(99) // adds the new value in place of the first element and shifts the array by 1 place backward
//myArr.shift()     //removes the first element of the array and shifts the array 1 place forward

//console.log(myArr)
//console.log(myArr.includes(40))
//console.log(myArr.indexOf(400)) //-1 indicates it doesnt exist in the array 

const NewArr = myArr.join()
//console.log(myArr)
//console.log(NewArr) // the array has become string 
 
console.log("1.",myArr)
const myn1 = myArr.slice(1,4)
console.log(myn1)
console.log("2.",myArr)
const myn2 = myArr.splice(1,4)
console.log(myn2)
console.log("3.",myArr)
//#WRONG:often people say that in slice the last valued index doesn't get included and in splice it gets included
//#RIGHT:in splice the portion gets removed from the original array whereas in slice it doesn't