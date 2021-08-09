// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(dogAge, humanYear) {
  dogAge = +prompt(`Enter the age of your dog in years : `);
  alert(`Your dog age is ${dogAge * 7} in human years.`);
  humanYear = +prompt(`Enter your age : `);
  alert(`Your age in dog years is ${humanYear / 7}`);
  return (`${dogAge} years old is your dog.`); 
}
calculateDogAge();

/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

function calculateMoviesToWatch(age, numbersOfMovies) {
    const maxAge = Number(60);
    age = +prompt(`Enter your age`);
    let totalMovies= +prompt(`Enter number of movies you watch in a week : `);
    numbersOfMovies = (maxAge - age) * (totalMovies * 48);
    alert(`You will watch ${numbersOfMovies} till the age of 60 years.`)
    return numbersOfMovies;
}
calculateMoviesToWatch();

/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(celcius) {
  celcius = +prompt(`Enter the temperature in celcius : `);
  alert(`The temperature in Fahrenheit is ${(celcius * 9/5) + 32}`);
  return celcius;
}
celsiusToFahrenheit();

/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(fahrenheit) {
  fahrenheit = +prompt(`Enter the temperature in fahrenheit : `);
  alert(`The temperature in Celcius is ${(fahrenheit -32) *5/9}`);
  return fahrenheit;
}
celsiusToFahrenheit();


/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/
let power = 1;
function pow(n, x) {
  for(let i=1; i <= x; i++){
    if(n<0){
      alert(`The number below 1 is not allowed`);
    } else {
      power = power * n;
    }
  }
  return power;
}
pow(3, 3);

// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/


let add = 0;
let mul = 1;
function sumOrProductOfN(n, str){
  for(let i = 1; i <= n; i++){
    if(str === 'sum'){
      console.log(add += i);
    } else if(str === 'product'){
      console.log(mul = mul * i);
    } else if(str != 'sum' || str != 'product'){
      alert(`Not a valid input`);
    }
  }
  
  
}



sumOrProductOfN(4, 'sum'); // 10
sumOrProductOfN(4, 'product'); // 24
sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/
let sum = 0;
function sumOfN(n) {
  for(let i = 1; i <= n; i++){
    sum += i;
  }
  console.log(sum);
  return sum;
}
sumOfN(4);

/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

// Your code goes here

/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min(numOne, numTwo) {
  if(numOne < numTwo){
    alert(`${numOne} is min`);
  } else {
    alert(`${numTwo} is min`);
  }
}

min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck(m) {
   return typeof m;
  
}
typeCheck(21);