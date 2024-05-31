let Dates = ['01/6/2024', '28/5/2024', '25/12/2023', '12/11/1999', '29/5/2024'];

let currentDate = new Date();

let current = [];
let past = [];
let future = [];

Dates.forEach(function(dateStr) {
    // Split the date string and convert to numbers
    let [day, month, year] = dateStr.split('/').map(Number);
    
    // Create a Date object from the split components
    let dateObj = new Date(year, month - 1, day); // month - 1 because months are 0-indexed in JavaScript

    // Compare the dateObj with the current date
    if (dateObj < currentDate) {
        past.push(dateStr);
    } else if (dateObj.toDateString() === currentDate.toDateString()) {
        current.push(dateStr);
    } else {
        future.push(dateStr);
    }
});

console.log("Past dates:", past);
console.log("Current dates:", current);
console.log("Future dates:", future);
