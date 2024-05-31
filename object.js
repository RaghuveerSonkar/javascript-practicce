// singleton
// object.create
// object literals




// object literals
const mySym= Symbol("key1")

const JsUser ={
    2:"Hitesh",
   " fullName": "Hitesh Choudhary",
    [ mySym] : "mykey1",
          age: 19,
    location: "mumbai",
    email:"jitesh13@gmail.com",
    isLoggedDays : false,
    lastLoginDay:["Monday", "Tueday","sunday"]
}



// JsUser.email= "raghuveersonkar@gmail.com";

// JsUser['email'] ="raghuveersonkar12@gmail.com";



// console.log(JsUser.2);
console.log(JsUser['2']);
// console.log(JsUser["email"])
// console.log(  JsUser["fullName"]);
// console.log(  JsUser[mySym]);
//  Object.freeze(JsUser)

//  JsUser.age= 27;


//  console.log(JsUser);

 JsUser.greeting=function(){
    console.log("Hello  js  user")
 }

 JsUser.greetingTwo= function(){
    console.log(`Hello js user ${this.name} , ${this.age}`)
    return `${this.name, this.age}`
 }

//  console.log( typeof JsUser.greeting());

 console.log(JsUser.greetingTwo())


