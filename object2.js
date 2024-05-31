// const tinderUser= new  Object();   // singlton object hai

 const tinderUser ={}   // non sington object
 tinderUser.id=1
 tinderUser.email="raghuveer@gmail.com",
 tinderUser.name= "Raghuveer sonkar"
 tinderUser.isLogin=false
// console.log(tinderUser);


const regularUser={
    Email:"anshu@gmil.com",
    fullName:{
     usenameUser :{

        firstname:"Anshu",
        lastname:"Sonkar"

     }

    }

}

// console.log(regularUser.fullName.usenameUser);

// console.log(regularUser.fullName.usenameUser.firstname);


const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"h"}

// const obj3={...obj1, ...obj2}
// const obj3 = Object.assign({}, obj1,obj2)

// const obj3 ={obj1, obj2}

// console.log(obj3);

const  user =[
    {
        id:0,
        name:"Anshu"
    },
    {
        id:8,
        name:"Anshu"
    },
    {
        id:5,
        name:"Rakesh"
    },
    {
        id:6,
        name:"Anshu"
    }
]

user[1].name
// console.log(user[1].name)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))


// Json 


const course ={
    CourseName: "js in hindi",
    price:14500,
    InstructorCourseName :"Hitesh"

}


//  course.InstructorCourseName

const{InstructorCourseName}= course

const{InstructorCourseName:Instructor}=course

// console.log(InstructorCourseName);
console.log(Instructor);





