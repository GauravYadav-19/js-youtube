const course = {
    courseName : "JS in Hindi",
    price : "999999",
    courseInstructor : "Hitesh"
}

//course.courseInstructor     // instead of doing this again and again to access value 

const {courseInstructor} = course
//console.log(courseInstructor);  //now we dont have to use (course.courseInstructor) this again and again 
// we can get the value direct 

//we can make it even shorter
const{courseInstructor : CI} = course
console.log(CI);

// these { } , are used for destructuring to avoid writing extra line of code again and again 
//it is also used in react etc

//{                                 //1 way of getting an API
// "name" : "Gaurav"
// "id" : "abcdefg"
// "year" : 2024                    //JSON
//}

//[
//  {},
//  {},
//  {}
//]

// api me object milna jruri nhi h array bhi mil skta h 