/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/

// function sayHello(name){
//   return name;
// }
// sayHello(alert(`Vasant.`))

/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/

// function getFullName(firstName, lastName){
//   return firstName + " " + lastName;
// }
// getFullName("John", "Snow"); // "John Snow"
// getFullName("Nelson", "Mandela"); // "Nelson Mandela"


/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/

// function addTwoNumbers(firstNum, secondNum){
//   if(typeof secondNum != "number" || typeof firstNum != "number"){
//     alert(`Enter a valid input.`);
//   } else {
//     let sum = 0;
//     sum = firstNum + secondNum;
//     return alert(sum);
//   }
// }
addTwoNumbers(10, "100");
// addTwoNumbers(10, 22);
// // addTwoNumbers(20, 32);



/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/

// function calc(numA, numB, operator){
//   if(operator == "add"){
//     alert(`The sum is ${numA + numB}`);
//   } else if(operator == "sub" && numA > numB){
//     alert(`The sum is ${numA - numB}`);
//   } else if(operator == "mul"){
//     alert(`The sum is ${numA * numB}`);
//   } else if(operator == "div" && numA > numB){
//     alert(`The sum is ${numA / numB}`);
//   } else{
//     alert(`Number 2 is greater then number 1.`);
//   }
// }
// calc(10, 20, `add`);

/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/

function isLeapYear(year){
  if( year % 4 == 0){
    alert(true);
  } else {
    alert(false);
    
  }
  return year;
}
isLeapYear(2000);


/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/

function getFactorial(number){
  
  if(number < 0){
    alert(`The value should not be less then 0.`)
  } else {
    let factorial = 1;
    for( i = 1; i <= number; i++){
      factorial *= i;
    }
    alert(`The factorial of the given ${number} is ${factorial}`);
  }
  return number;
}
getFactorial(5);
