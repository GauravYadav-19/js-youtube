//const tinderUser = new Object()       //singleton object 
const tinderUser = {}                 //not a singleton object , thats the only differen ce 

tinderUser.id="123abc"
tinderUser.name="MrBeast"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    mail : "abcdef@gmail.com",
    fullname: {
        username: {
            firstname:"Gaurav",
            lastname:"Yadav"
        }
    }
} 

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.username)
// console.log(regularUser.fullname.username.firstname)

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}
const obj5 = {5:'e',6:"f"}

//const obj3 = {obj1,obj2}        // same problem that occurs in arrays

//const obj4 = Object.assign({},obj1,obj2,obj5)        //that {} is preferable to use
// bcoz ye jo saari values h wo {} me jaa rhi h agar apan usse ni lgate h to values obj1 me jaati h 
// here {} -> acts as the target and the others act as the source
// console.log(obj3)
// console.log(obj4)

//most preferable and used
const obj7 = {...obj1,...obj2,...obj5}          // using the spread operator
//console.log(obj7)

const users = [
    {
        id : 1,
        email:"abcabc@gmail.com"
    },
    {
        id : 1,
        email:"abcabc@gmail.com"
    },
    {
        id : 1,
        email:"abcabc@gmail.com"
    }
]
users[1].email //to access the first value bcoz it is an array so 

//console.log(tinderUser)

//console.log(Object.keys(tinderUser))    
// all keys will be returned in an arary ,  now we can do whatever operations we want on the these keys 

//console.log(Object.values(tinderUser))   
// similarly all values will also be returned in an array format and similar operations can be done on them

// console.log(Object.entries(tinderUser))   
// new array created with first property as its key and 2nd value as its value  

//console.log(tinderUser.hasOwnProperty('isLoggedIn'))   
//Determines whether an object has a property with the specified name.