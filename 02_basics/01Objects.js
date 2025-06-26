const user={
    email:"shekarmakar@google.com",
    fullname:{
        username:{
            firstname:"Shejuti",
            lastname:"karmakar"

        }
    }
}
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={obj1,obj2}
const obj4=Object.assign({},obj1,obj2)
const obj5={...obj1,...obj2}

// console.log(obj5)
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

const course={
    courseName:"Love school",
    courseInstructor:"karan and anusha",
    episode_no:"2",
    season:8
}
const {courseName:Name}=course
console.log(Name)