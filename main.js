/* first we need to create a function that generates a ramdon number for the ramdom message*/

const ramdomNumber = num => {
    return Math.floor(Math.random() * num);
}

// console.log(ramdomNumber())

/* we put the ramdom message in an array of arrays;*/

let pronouns = "You";
let verbs = "are";
let random = ["the best human in the world", "the worst human in the world", "a drunk and serial killer", "a charity worker with rage drive problems", "akward to look at", "handomse"];
// we start with the function

/*To get a random element we need a random index. A random index is an integer number greater or equal to 0 and less than the number of elements.

By calling getMessage with the number of elements in the array (cards.length), we get a random index.*/

// make a generic utility for retrieving a random element from any kind of array, including the array of cards.
 
const getMessage = arr => {
    const ramdomIndex = ramdomNumber(arr.length);
    return arr[ramdomIndex]; // Index is going to get you one item out of the array. Your random number will make sure that it is a random item from the array that is selected.
};

//console.log(getMessage(pronouns));

// now we store each ramdom message in variables

const result = () => {
    let finalPart = getMessage(random); /*we assing the random array to the function get message, and this one inside a variable. It is inside the fucntion so ti can be called more than 1 time*/
    return `${pronouns} ${verbs} ${finalPart}` // returned like this so ti can be modified with more content in the future. 
};

//console.log(result())
/* we create a function where every time we call it it will make appear the <p> with class .txt and change the inner html content to the result function*/
const printMessage = () => {
  document.querySelector(".text").style.display = "block";
  document.querySelector(".text").innerHTML = result();
};

/*JavaScript code then selects the button using getElementById and adds an event listener to it. The event listener is set to call the printMessage function when the button is clicked*/
const generateButton = document.getElementById("button"); 
  generateButton.addEventListener("click", printMessage);