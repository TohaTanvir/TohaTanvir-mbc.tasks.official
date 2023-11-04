/*
=> Solution of Assignment_js.

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
=> Answer any 5 questions.

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

      JavaScript (JS) is a cross-platform, object-oriented programming language used by developers to make web pages interactive. 
      It allows developers to create dynamically updating content, use animations, pop-up menus, clickable buttons, control multimedia, etc.
      The use of JavaScript can be both on the client-side and server-side.
      While HTML and CSS languages are used to give structure and style to web pages, JavaScript is used to add interactive elements that engage users. 
      Without JavaScript, 90% of Internet webpages would be static.

      Here are some examples of what JavaScript can be used for in web development:
      
      a) Form validation: JavaScript can be used to validate user input in web forms, ensuring that required fields are filled in and that the data entered is in the correct format.
      b) Dynamic content: JavaScript can be used to dynamically update the content of a web page based on user interaction, such as clicking a button or entering text into a form.
      c) Interactive effects: JavaScript can be used to create interactive effects, such as animations, pop-ups, and drag-and-drop functionality.
      d) Data visualization: JavaScript can be used to display data, such as charts and graphs, in a visually appealing way.
      e) Web applications: JavaScript can be used to create full-fledged web applications, such as online shopping carts, social media apps, and project management tools.

3. Explain the difference between var, let, and const when declaring variables in JavaScript.

      var declarations are globally scoped or function scoped while let and const are block scoped.
            var variables can be updated and re-declared within its scope; 
            let variables can be updated but not re-declared;
            const variables can neither be updated nor re-declared.
            
      They are all hoisted to the top of their scope. 
      But while var variables are initialized with undefined,
      let and const variables are not initialized.
      
      While var and let can be declared without being initialized,
      const must be initialized during declaration.

4. Explain the concept of "scope" in JavaScript and the difference between global and local scope.
              
              The scope of a variable or function determines what code has access to it.
          Variables that are created inside a function are local variables, 
          and local variables  can only be referred to by the code within the function.
          Variables created outside of functions are global variables,
          and the code in all functions has access to all global variables.
          If you forget to code the var keyword in a variable declaration, 
          the JavaScript engine assumes that the variable is global. This can cause debugging problems.
          
    “Scope” is just a technical term for the parts of your code that have access to a variable.
    Scope determines the accessibility (visibility) of variables.

          JavaScript has 3 types of scope:
          
          a) Block scope
          b) Function scope
          c) Global scope

          In general, it’s better to pass local variables from one function to another as parameters than it is to use global variables.
          That will make your code easier to understand with less chance of errors.
          
          It may seem easier to use global variables than to pass data to a function and return data from it,
          global variables often create problems. 
          That’s because any function can modify a global variable, 
          and it’s all too easy to misspell a variable name or modify the wrong variable, 
          especially in large applications. 
          
          That, in turn, can create debugging problems.
          In contrast, the use of local variables reduces the likelihood of naming conflicts. 
          For instance, two different functions can use the same names for local variables without causing conflicts. 
          That of course, means fewer errors and debugging problems. 
          With just a few exceptions, then, all of the code in your applications should be in functions so all of the variables are local.
          If you misspell the name of a variable that you’ve already declared, 
          it will be treated as a new global variable. 
          With this in mind, be sure to include the keyword when you declare new variables and always declare a variable before you refer to it in your code.
          Note: Use local variables whenever possible. Always use the var keyword to declare a new variable before the variable is referred to by other statements.


5. What is the difference between "null" and "undefined" in JavaScript?

Undefined:
          The undefined property indicates that a variable has not been assigned a value, or not declared at all.
          Undefined means a variable has been declared but has yet not been assigned a value.
          It is an ECMAScript1 (ES1) feature.
          Its supported browsers are -:
          Chrome , Microsoft Edge , Internet Explorer , Firefox , Safari , Opera Mini
          It is a global property.
Null:
      Null is an assignment value. It can be assigned to a variable as a representation of no value. 
      It is a Primitive value in Javascript.
      Its supported browsers are -:
      Chrome , Microsoft Edge , Internet Explorer , Firefox , Safari , Opera Mini
      Its syntax is -: null
      The null value represents the intentional absence of any object value. 
      It is one of JavaScript's primitive values and is treated as falsy for boolean operations.

*/
