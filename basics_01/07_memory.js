//Stack (stores Primitive Datatypes) , Heap (stores Non Primitive Datatypes)
/*
stack me jab apan kisi variable ki value change krte h to uski copy me change hota h ,
original data waise he pda rehta h , but jab apan heap me value change krte h tbb original refrence  
ki wajah se change jo h wo original data me hota h 
*/

// let userName = "Gaurav"
// let anotherUserName = userName
// console.log(anotherUserName)

// anotherUserName = "Harshit"
// console.log(userName)
// console.log(anotherUserName)         //dono me alag alag values aa rhi h kyunki change copy me hua

let user1={
    email:"user@google.com",
    upiId:"user@ybl"
}

let user2=user1;
console.log(user1.email)

user2.email = "abc@google.com"          
console.log(user1.email)
console.log(user2.email)                //dono me same value aayi kyunki change original me hua h jisse 
                                        //user 2 bhi linked tha