// define an arrow function that return the maximum between 3 random numbers
const greatestNumber = (num1, num2,num3) => {

    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3 ) {
        return num2;
    } else {
        return num3;
    }


}
    // use a conditional statement inside the function to understand wich number is the greatest one


// declare 3 variables and assign random numbers to them

// call the function passing the numbers as arguments

let number1 = Math.ceil(Math.random()*10)
let number2 = Math.ceil(Math.random()*10)
let number3 = Math.ceil(Math.random()*10)
console.log(`number1 = ${number1} , number2 = ${number2} ,  number3 = ${number3}`)

console.log(`${greatestNumber(number1,number2,number3)} is the greatest number`) //call the function inside the ${...}