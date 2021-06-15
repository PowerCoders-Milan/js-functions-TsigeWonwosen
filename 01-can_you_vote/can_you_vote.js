// define a function that will check if I can vote or not
const canIVote = age => {
    // define a variable legalAge
const legalAge = 18;
    // create if else statement that console.log() if you can vote or not
    if (age >= legalAge) {
        console.log("You can Vote!")
        
    } else {
        console.log("You are not litigable to Vote")
    }
}

// define a variable for your age

// call the function and see if you can vote

canIVote (20);
console.log("******")
canIVote (17);