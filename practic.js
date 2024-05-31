const Dates= ['01/6/2024', '28/5/2024', '25/12/2023','12/11/1999','03/12/2000']

let dates=new Date()
let date=dates.getDate();
let months= dates.getMonth()+1;
let year =dates.getFullYear();
let Currentsdate= (  date+'/'+ months+'/'+ year);
console.log('Formate date :', Currentsdate);

let current =[];
let pass=[];
let future=[];


Dates.forEach(function(date1){
    if(date1<Currentsdate){
        pass.push(date);
        
    }
}) ;

console.log("Past dates:", pass);






// const datess = [
//     new Date('2023-05-29T00:00:00'),
//     new Date('2024-05-29T00:00:00'),
//     new Date('2025-05-29T00:00:00')
//   ];
  
//   const currentDate = new Date();
  
//   const result = {
//     past: [],
//     current: [],
//     future: []
//   };
  
//   datess.forEach(date => {
//     if (date < currentDate) {
//       result.past.push(date);
//     } else if (date.toDateString() === currentDate.toDateString()) {
//       result.current.push(date);
//     } else {
//       result.future.push(date);
//     }
//   });
  
//   console.log("Past dates:", result.past);
//   console.log("Current dates:", result.current);
//   console.log("Future dates:", result.future);
  