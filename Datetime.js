// DateTime 

let mydate = new Date()    // object

console.log(mydate)       // 2024-05-24T10:12:47.514Z

console.log(mydate.toString())   // Fri May 24 2024 15:44:05 GMT+0530 (India Standard Time)

console.log(mydate.toDateString())  // Fri May 24 2024

console.log(mydate.toLocaleString())   // 24/5/2024, 3:47:33 pm

// console.log('typeof $(typeof mydate)')
console.log(typeof mydate);

let myCreateDate = new Date(2023 , 2, 23)     //   Thu Mar 23 2023
console.log(myCreateDate.toDateString())



let mydatetime = new Date(2023 , 0, 23 ,4,50)     //   Thu Mar 23 2023
console.log(mydatetime.toLocaleString())          // 23/1/2023, 4:50:00 am

console.log(mydatetime.getDate())








