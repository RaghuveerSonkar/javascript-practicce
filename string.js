const name="Raghuveer sonkar"
const respo= 56;

// console.log(`my name is ${name} count respo ${respo}`)


const gamename = new String ("Raghuveer")

// console.log(gamename[0]);  //  output =R

// console.log(gamename.length)  // output = 11 only character count but space include not correct output 

//  let babua= gamename.trim(); 

// console.log("gamename : ", babua.length)  


// console.log(gamename.toUpperCase()) 

// console.log(gamename.indexOf('u'))  // output = 4

console.log(gamename.charAt(3).toUpperCase())   // output = h

// console.log(gamename.lastIndexOf('a'))  // output =9

// console.log(gamename.substring(0, 5))  // output = Raghu
// console.log(gamename.substring(2,5))  //  output = ghu

// console.log(gamename.slice(0,4))

//Raghuveer

// console.log(gamename.slice(-8,4))
// console.log(gamename.slice(-9,2))


// white space remove and lenght calculate

const newStringone= " Raghuveer "


// console.log(newStringone)

// console.log(newStringone.trim())


// let name1= newStringone.trim()
// console.log(name1.length)

const url ='https://courses.chaicode.com/learn/home/chai-aur-javascript-in-hindi/section/493398/lesson/3060445?'

let url1= url.replace('javascript', 'Raghuveer')
let raghuver= url.replace('-', '@');
console.log(url1)
console.log(raghuver)

// replace and includes, trim , substring , indexof

const youtubeurl ='https://www.youtube.com/watch?v=l87H5IgObxA&ab_channel=InventorCode';
let raghu = url.replace('.', '#');
console.log(raghu)
console.log(youtubeurl.includes('youtube.com'))
console.log(youtubeurl.split('.'))

let timedate = "10:00";
let nam4e= timedate.split(':')
console.log(nam4e)
console.log(timedate.split(':'))
console.log(timedate.replace(':','2'))
if(timedate==10000){
    console.log('on time ')
}
else{
    console.log('let ')
}
