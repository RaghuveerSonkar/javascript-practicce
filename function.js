


function addTwonumber(number1, number2){
    console.log( number1+number2);
   

}

// addTwonumber(23 ,4)


function addTwonumber(number1, number2){
    console.log( number1+number2);
   

}

// let results= addTwonumber(3,9)
// console.log(results)


function addTwonumber(number1, number2){

    // let sum=( number1+number2);
    // return sum;
    return number1+number2;
    
}

  const sum =addTwonumber(34,67)

//   console.log("sum:",sum);


function loginUserMessage(username="Anshu"){
    if(!username){
        console.log('Please enter your name')
        return
    }
    return `${username} just login `
}

// console.log(loginUserMessage("Raghuveer"))

// console.log(loginUserMessage("Rakesh bhai"))


function calulateCarPrice(val1, val2  , ...num1){
     return {num1 , val1, val2}

}

// console.log(calulateCarPrice(200,5689,822))



const user={
    name:"Vikash ",
    color: "Black",
    price:29201
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.name} and price 
    ${anyobject.price} with
     color ${anyobject.color}`)
}


handleobject(user)





