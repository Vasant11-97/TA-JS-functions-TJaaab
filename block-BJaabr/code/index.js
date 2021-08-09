// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string
(hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}
convertToString();

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration

function addOne(number){
  return number+1;
}

// - Write a Function Expression

let addOne = function(number){
  return number+1;
}


// - Write an Arrow Function without curly brackets(if possible)

let addOne = (number) => number+1;

// - Write an Arrow Function with curly brackets

let addOne = (number) => {
  return number+1;
}

// - Execute the function
let addOne = function addOne(number){
  return number+1;
}

// - Execute the function and store the return value in a variable.

let addingNumber = addOne();

// - What is the typeof returnValue

//"number"

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration

function minusOne(number){
  return number-1;
}

// - Write a Function Expression

let minusOne = function(number){
  return number-1;
}

// - Write an Arrow Function without curly brackets(if possible)

let minusOne = (number) => number-1;

// - Write an Arrow Function with curly brackets

let minusOne = (number) => {
  return number-1;
}

// - Execute the function

let minusOne = function minusOne(number){
  return number-1;
}

// - Execute the function and store the return value in a variable.

let subtractionNumber = minusOne();

// - What is the typeof returnValue

// "number"



/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration

function sum(numOne, numTwo){
  return numOne + numTwo;
}
sum(20, 40);

// - Write a Function Expression

let sum = function sum(numOne, numTwo){
  return numOne + numTwo;
}
sum(20, 40);

// - Write an Arrow Function without curly brackets(if possible)

const sum = (numOne, numTwo) => numOne + numTwo;
sum(40, 80);

// - Write an Arrow Function with curly brackets

const sum = (numOne, numTwo) => {
  return numOne + numTwo;
}
sum(40, 80);

// - Execute the function

const sum = (numOne, numTwo) => {
  return numOne + numTwo;
}
sum(40, 80);

// - Execute the function and store the return value in a variable

let addingTwoNumber = sum(30,50);

// - What is the typeof returnValue

"undefined"


/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration

function square(num){
  return num * num;
}
square(12);

// - Write a Function Expression

let convertToSquare = function square(num){
  return num * num;
}
square(12);


// - Write an Arrow Function without curly brackets(if possible)

square = num => num * num;
square(15);

// - Write an Arrow Function with curly brackets

square = num => {
  return num * num;
}
square(15);

// - Execute the function

square(25);

// - Execute the function and store the return value in a variable

let squareValue = square(13);

// - What is the typeof returnValue

"undefined"

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration

function isGreater(num_1, num_2){
  if(num_1 > num_2){
    return(`${num_1} is greater then ${num_2}`);
  } else{
    return(`${num_2} is greater then ${num_1}`);
  }
}
isGreater(12, 33);

// - Write a Function Expression

let greaterNumber = function isGreater(num_1, num_2){
  if(num_1 > num_2){
    return(`${num_1} is greater then ${num_2}`);
  } else{
    return(`${num_2} is greater then ${num_1}`);
  }
  return isGreater;
}
isGreater(12, 33);


// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets

let greaterNumber = (num_1, num_2) => {
  if(num_1 > num_2){
    return(`${num_1} is greater then ${num_2}`);
  } else{
    return(`${num_2} is greater then ${num_1}`);
  }
  return isGreater;
}
isGreater(12, 33);

// - Execute the function

isGreater(23, 55);

// - Execute the function and store the return value in a variable

let storingValue = isGreater(32,44);

// - What is the typeof returnValue

"undefined"

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration

function oddOrEven(number){
  if(number % 2 === 0){
    return(`${number} is an even number`);
  } else{
    return(`${number} is an odd number`);
  }
}

// - Write an anonymous Function Expression

let oddOrEven = function(number){
  if(number % 2 == 0){
    return(`${number} is an even number`);
  } else{
    return(`${number} is an odd number`);
  }
}

// - Write an named Function Expression

let oddOrEven = function oddOrEven(number){
  if(number % 2 == 0){
    return(`${number} is an even number`);
  } else{
    return(`${number} is an odd number`);
  }
}


// - Write an Arrow Function without curly brackets (hint: use ternary operator)

let oddOrEven = (number) => number % 2 === 0 ? `${number} is an even number` : `${number} is an odd number`;

// - Write an Arrow Function with curly brackets

let oddOrEven = (number) => {
  if(number % 2 == 0){
    return(`${number} is an even number`);
  } else{
    return(`${number} is an odd number`);
  }
}

// - Execute the function

oddOrEven();

// - Execute the function and store the return value in a variable

let oddNum = oddOrEven();

// - What is the typeof returnValue

// "number"