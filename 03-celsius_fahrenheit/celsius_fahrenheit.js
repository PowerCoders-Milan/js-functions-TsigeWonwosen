// define a function multiplyByNineFifths(number)

    //return number*(9/5)

const multiplyByNineFifths = (number) => {
    return number * (9/5); 
}



// define a function getFahrenheit(celsius)

    // return multiplyByNineFifths(celsius) + 32;


const getFahrenheit = (celsius) =>  {

    return multiplyByNineFifths (celsius) + 32;
}


console.log(getFahrenheit(36)) // call getFahrenheit();


// do the same thing starting from Fahrenheit to Celsius

const toCelsius = (number) => {
    return (number - 32 ) * (5/9)
}

console.log(`Fahrenheit to Celsius ${getFahrenheit(36)} :  ${toCelsius(getFahrenheit(36))}`)

