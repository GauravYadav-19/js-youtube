// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

// console.log("2">1)          // here js has automatically converted string to number
// console.log("02">1)         // but the problem is that when such conversion happens , the result always may not be predictable
//                             // so ensure that data type of the values being compared is same 

// console.log(null==0)
// console.log(null>0)
// console.log(null>=0)

/*
the reason is that , an equality check {==} and comparison {>,<,>=,<=} work differently
-> comparisons convert null to a number , treating it as 0
thats why line 13 is true and line 11 is false
-> similar things happen when we compare undefined with 0 
*/

//Strict Check {===}        checks the value as well as the data type , if both satisfy then true is returned
// console.log("2"===2)
// console.log(2===2)