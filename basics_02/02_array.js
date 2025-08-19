const marvel_heros = ["thor", "hulk","ironman"]
const dc_heros = ["batman","superman","aquaman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros)       // it didnt add the values instead pushes the other as a complete array
//console.log(marvel_heros[3])

//const arr1 = marvel_heros.concat(dc_heros)
//console.log(arr1)       //works but not used much bcoz it works with only 2 at a time 

//const arr2 = [...marvel_heros,...dc_heros]     //spread all the array elements seperately
//console.log(arr2)        // works same as concat 

const arr4 = [1,2,3,[4,5,6],[7,[8,9]]]
//const arr5 = arr4.flat(1)  
const arr5 = arr4.flat(Infinity)   //returns a new array with all the subarray elements concatenated into recursively upto the specfic depth.
//infinity here is the depth we want it to go into the array , 2 would have worked bcoz it has a 2D array in it
//console.log(arr5)

// console.log(Array.isArray("Gaurav"))
// console.log(Array.from("Gaurav"))       //creates an array from an iterable object
// console.log(Array.from({name:'Gaurav'})) //#interesting case , it is not able to convert this object to an array

let score1 = 100
let score2 = 200
let score3 = 300

//console.log(Array.of(score1,score2,score3))     //Returns a new array from a set of elements