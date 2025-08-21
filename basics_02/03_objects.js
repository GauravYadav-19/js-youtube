//singleton         -> when we declare it like literal singleton is not made 
// when it is made using a cosntructor it will always be singleton 
// like this : Object.create

//object literals
const mySym = Symbol('key1')

const JS_user = {
    name : 'Gaurav',
    'fullname': "Gaurav Yadav",
    [mySym]:'key1',
    age : 21,
    location : 'Noida',
    email : 'gaurav@google.com',
    isLoggedIn : false,
    lastLoginDays : ["Monday","Wednesday","Saturday"]
}

//console.log(JS_user.email)      //one way to access , mostly used but sometimes it doesnt work and hence [] used
//console.log(JS_user['email'])   // this is preferable bcoz 

// if we want to access 'full name' there is no way that we can do that 
//console.log(JS_user['fullname'])  // works 
//console.log(typeof JS_user[mySym] )     // correct way to use symbol with object

JS_user.location = "Bikaner"        //changing value 
//Object.freeze(JS_user)              //freezing so that value cant be changed 
JS_user.age = 19 
//console.log(JS_user)                // age is still 21

JS_user.greeting = function (){
    console.log("Hello JS User")
}

//console.log(JS_user.greeting)           // function doesnt get executed just its refrence is returned 
console.log(JS_user.greeting())         //funtion gets executed

JS_user.greeting2 = function(){
    console.log(`Hello JS User, ${this.fullname}`)
}
console.log(JS_user.greeting2())
