const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor   //hectic task , always object.whatever

const {courseInstructor: instructor} = course   //like this , can even change name from x to y say and call it laterwards

// console.log(courseInstructor);
console.log(instructor);      //like this    //hence , known as destucturing

