/*
=> Solve these questions.

Problem 1: Write a function to calculate the area of a triangle.
Solution: 1 Calculating the area of a triangle
*/

                var base = ("give a number");
                var height = ("give a number");
                var area = (0.5 * base * height);
                
/* console.log(area);

Problem 2: Write a function to convert degrees to radians.
Solution: 2 Converting degrees to radians
*/
              function degreeToRadians(degree) {
              return degree * (Math.PI / 180.0);
              }
              
/* console.log( degreeToRadians(   give a degree ) );

Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.
Solution: 3 Creating a function calculateFactorial that takes a number and returns its factorial. 
*/
              let n = giveANumber; 
              function factorial(n) {  
                  if (n === 0) {  
                      return 1;  
                  }  
                  else {  
                      return n * factorial( n - 1 );  
                  }  
              }    
/*  
console.log(factorial(n));

Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.
Solution: 4 Creating a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.
*/
              function test_prime(num) {
                  if (num <= 1) {
                    return false;
                  }
                  for (let i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i === 0) {
                      return false;
                    }
                  }
                  return true;
                }
/*
console.log(test_prime(giveANumber));

Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.
Solution: Creating a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.
*/

              var arr1 = ["Tanvir", "Abdullay"];
              var arr2 = ["Toha", "Parameters"];
              
              arr1 = arr1.concat(arr2);
/*              
console.log(arr1);

Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.
Solution: 6 Creating a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.
*/
              function find(year)
              {
              if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
                {
                return ("It is a leap year");
                }
                else
                {
                    return ("It is not a leap year");
                }

            }
/*              
console.log(find(giveAYear));

Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.
Solution: 1 Calculating the area of a triangle
*/
            let arr = ["tanvir", "abdullah", "toha", 
                          "tanvir", "abdullah", "toha"]; 
                  
                  function removeDuplicates(arr) { 
                      return arr.filter((item, index) => arr.indexOf(item) === index); 
                  } 
/*
console.log(removeDuplicates(arr));

Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
Solution: 8 Creating a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius
*/
                function celsiusToF(celsius) 
                      {
                        var cTemp = celsius;
                        var celsiusToF = cTemp * 9 / 5 + 32;
                        var message = cTemp+'\xB0C is ' + celsiusToF + ' \xB0F.';
                          console.log(message);
                      }
                      
                      function farenheitToC(fahrenheit) 
                      {
                        var fTemp = fahrenheit;
                        var farenheitToC = (fTemp - 32) * 5 / 9;
                        var message = fTemp+'\xB0F is ' + farenheitToC + '\xB0C.';
                          console.log(message);
                      } 
/*                      
celsiusToF(60);
farenheitToC(45);

Problem 9: Write a function to find the maximum of five numbers.
Solution: 9 Writing a function to find the maximum of five numbers.
*/

      const maxOfFiveNumber = [1, 30, 2, 5, 6];
/*
console.log(Math.max(...maxOfFiveNumber))

Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]
Solution: 10 Creating a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]
*/
    const number = giveANumber;

    if(number % 2 == 0) {
 /*       console.log("The number is even.");
*/
     }
    
    else {
 /*       console.log("The number is odd.");
*/
    }


/*
=> Answer any 4 questions.

1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.
    
      Key Differences Between if-else and switch:

      The expression inside if statement decides whether to execute the statements inside if block or under else block. 
      On the other hand, the expression inside a switch statement decides which case to execute.
      
      You can have multiple if statement for multiple choice of statements. 
      In switch, you only have one expression for the multiple choices.
      
      If-else statement checks for equality as well as for logical expression. 
      On the other hand, switch checks only for equality.
      
      The if statement evaluates integer, character, pointer or floating-point type or boolean type. 
      On the other hand, switch statement evaluates only character or an integer datatype.
      
      Sequence of execution is like either statement under if block will execute or statements under else block statement will execute.       On the other hand, the expression in switch statement decide which case to execute and if you do not apply a break statement after each case it will execute till the end of the switch statement.
      
      If expression inside if turn outs to be false, statement inside else block will be executed. 
      If expression inside switch statement turns out to be false then default statements is executed.
      
      It is difficult to edit if-else statements as it is tedious to trace where the correction is required. 
      On the other hand, it is easy to edit switch statements as they are easy to trace.

2. What is JavaScript, and what is its primary purpose in web development?

3. Explain the difference between var, let, and const when declaring variables in JavaScript.

4. Explain the concept of "scope" in JavaScript and the difference between global and local scope.

5. What is the difference between "null" and "undefined" in JavaScript?




*/
