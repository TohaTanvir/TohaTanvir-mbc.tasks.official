### Question 1
- Write a function to calculate the area of a triangle.

### সমাধানঃ

#### প্রথমে কিছু এজামশন করে নিচ্ছি। 
- সকল ভ্যালুগুলো ইউজারের কাছ থেকে ইনপুট নেওয়ার জন্য prompt() ইউজ করছি।
- ত্রিভুজের বাহুর দৈর্ঘ্য ভগ্নাংশ হতে পারে। তাই ইনপুটেড ভ্যালুকে parseFloat() করে নিচ্ছি।
- এই মুহূর্তে const ইউজ করছি। আপনি চাইলে let ইউজ করতে পারেন।
- আউটপুট গুলোকে alert() আকারে শো করছি। আপনারা চাইলে console.log() ইউজ করতে পারেন।
- ত্রিভুজের যেকোনো দুই বাহুর যোগফল তার তৃতীয় বাহু অপেক্ষা বৃহত্তর হবে। এইটা রেখে কোড করার চেষ্টা করছি।
- এই মুহূর্তে ফাংশানের কোন প্যারামিটার ইউজ করছি না। সহজ করার জন্য if else ইউজ করছি।
- মনে করছি, একজন ইউজার ত্রিভুজ সম্পর্কে শুধু এতটুকু জানে যে, ত্রিভুজের তিনটি বাহু থাকে। তাহলে সেই দিক বিবেচনা করে ঐ ইউজারের কাছ থেকে আমরা ত্রিভুজের তিনটি বাহুর দৈর্ঘ্য ইনপুট নিচ্ছি। তারপর ক্ষেত্রফল প্রিন্ট করে দিচ্ছি।


```
function calculateTriangleArea() {
  const sideA = parseFloat(prompt("Enter the length of side A:"));
  const sideB = parseFloat(prompt("Enter the length of side B:"));
  const sideC = parseFloat(prompt("Enter the length of side C:"));

  if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
    const s = (sideA + sideB + sideC) / 2;
    const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
    alert(`The area of the scalene triangle is: ${area}`);
  } else {
    alert("Invalid input. The given sides do not form a valid triangle.");
  }
}

calculateTriangleArea();
```
ব্যাখ্যা: প্রোগ্রামটি প্রথমে ইউজারের কাছ থেকে ত্রিভুজের তিনটি বাহুর দৈর্ঘ্য ইনপুট নিবে। পরে এই বাহু তিনটি দ্বারা ত্রিভুজ গঠন হবে কি হবে না এই জিনিসটা চেক করবে। যদি ত্রিভুজ গঠিত হয় তাহলে সূত্র ইউজ করে ত্রিভুজের ক্ষেত্রফল নির্ণয় করবে। আদারওয়াইজ বলে দিবে যে, এই তিনটি বাহু দ্বারা ত্রিভুজ গঠন করা সম্ভব না। 


#### নিউ এজামশন
- মনে করছি, একজন ইউজার ত্রিভুজ সম্পর্কে বিস্তারিত জানে। ত্রিভুজের টাইপ সম্পর্কে জানে অর্থাৎ সকল প্রকার ত্রিভুজের নাম তার জানা আছে। সমবাহু ত্রিভুজের ক্ষেত্রে একটা বাহুর দৈর্ঘ্য দেওয়া থাকলে তিনি বুঝতে পারেন, এটি সমবাহু ত্রিভুজ। এর সব বাহুগুলো সমান। তাই একটা মান দেওয়া আছে। আরো অনেক ব্যাপার আছে।
- যাইহোক প্রথমে ইউজারের কাছ থেকে ত্রিভুজের টাইপ ইনপুট নিচ্ছি। ইউজার বিভিন্নভাবে ইনপুট করতে পারে। তাই তার দেওয়া ইনপুট কে লাওয়ারকেস এ কনভার্ট করছি। যাতে কন্ডিশন চেকে কোন সমস্যা না হয়। 
- প্রত্যেকটা টাইপের জন্য ভিন্ন ভিন্ন ক্ষেত্রফলের সূত্র ইউজ করছি।

```
function calculateTriangleArea() {
    const triangleType = prompt(
      "Enter the type of triangle (equilateral, isosceles, or scalene):"
    ).toLowerCase();
  
    if (
      triangleType === "equilateral" ||
      triangleType === "isosceles" ||
      triangleType === "scalene"
    ) {
      if (triangleType === "equilateral") {
        const side = parseFloat(prompt("Enter the length of one side:"));
        const area = (Math.sqrt(3) / 4) * Math.pow(side, 2);
        alert(`The area of the equilateral triangle is: ${area}`);
      } else if (triangleType === "isosceles") {
        const base = parseFloat(prompt("Enter the length of the base:"));
        const height = parseFloat(prompt("Enter the height:"));
        const area = (1 / 2) * base * height;
        alert(`The area of the isosceles triangle is: ${area}`);
      } else {
        const sideA = parseFloat(prompt("Enter the length of side A:"));
        const sideB = parseFloat(prompt("Enter the length of side B:"));
        const sideC = parseFloat(prompt("Enter the length of side C:"));
  
        // Check if the sides form a valid triangle
        if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
          const s = (sideA + sideB + sideC) / 2;
          const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
          alert(`The area of the scalene triangle is: ${area}`);
        } else {
          alert("Invalid input. The given sides do not form a valid triangle.");
        }
      }
    } else {
      alert("Invalid triangle type. Please enter 'equilateral', 'isosceles', or 'scalene'.");
    }
  }
  
  calculateTriangleArea();
```

### Question 2
- Write a function to convert degrees to radians.

### সমাধানঃ


#### প্রথমে কিছু এজামশন করে নিচ্ছি
- ইউজারের কাছ থেকে ইনপুট নেওয়ার জন্য prompt() ইউজ করছি।
- ডিগ্রি যেহেতু ভগ্নাংশও হয়। সেই জন্য কেউ যদি ভগ্নাংশ ইনপুট করে সেটিকে সাপোর্ট দেওয়ার জন্য parseFloat() ইউজ করছি।
- যদি ইউজার কিছু না দেয়। সেক্ষেত্রে প্রোগ্রাম যেন ক্যান্সেল হয়ে যায় সেই দিকটা খেয়াল রাখছি।
- ডিগ্রি যেহেতু একটা নাম্বার তাই কোন ইউজার যদি অ্যালফাবেট অথবা সিম্বল ইনপুট করে তাহলে সেটিকে invalid দেখানোর চেষ্টা করছি।
- এই প্রোগ্রামে আমাদের π ইউস করতে হবে। তাই জাভাস্ক্রিপ্টের Math.PI ইউজ করছি। 

```
function degreesToRadians() {
   let degrees = prompt("Enter the number of degrees:");
	  
   if (degrees === null) {
      alert("Operation canceled.");
      return;
   }

   degrees = parseFloat(degrees);

   if (isNaN(degrees)) {
      alert("Invalid input. Please enter a valid number.");
      return;
	  }
   let radians = degrees * (Math.PI / 180);
      alert(degrees + " degrees is equal to " + radians + " radians.");
   }

   degreesToRadians();
```

### Question 3
- Create a function calculateFactorial that takes a number and returns its factorial.

### সমাধানঃ



#### কিছু এজামশন করে নেওয়া যাক
- ইউজারের কাছ থেকে কোন একটি সংখ্যা ইনপুট নিয়ে তার ফ্যাক্টোরিয়াল বের করতে চাই।
- কোন ভগ্নাংশ সংখ্যার ফ্যাক্টোরিয়াল গ্রহণযোগ্য নয়। তাই কোন ইউজার ভগ্নাংশ ইনপুট করলে সেটিকে পূর্ণ সংখ্যায় কনভার্ট করে তারপর ফ্যাক্টোরিয়াল করতে চাই।
- কোন ইউজার নাম্বার ব্যতীত অন্য কোন সিম্বল ইনপুট করলে সেটি গ্রহণযোগ্য হবে না।
- নেগেটিভ সংখ্যার ফ্যাক্টোরিয়াল সংজ্ঞায়িত নয়। এজন্য নেগেটিভ সংখ্যা ইনপুট হিসেবে গ্রহণ করা হবে না।
- এই মুহূর্তে আউটপুট গুলোকে অ্যালার্ট হিসেবে শো করছি।
```
function calculateFactorial() {
  let userInput = prompt("Enter a number to calculate its factorial:");
  let number = parseInt(userInput);

  if (isNaN(number)) {
    alert("Invalid input. Please enter a valid number.");
    return;
  }

  if (number < 0) {
    alert("Factorial is not defined for negative numbers.");
    return;
  }

  let factorial = 1;

  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }

  alert(`The factorial of ${number} is ${factorial}`);
}

calculateFactorial();
```

### Question 4
- Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.

### সমাধানঃ




#### এজামশন
- ইউজারের কাছ থেকে ইনপুট নেয়ার জন্য prompt() ইউজ করছি।
- মৌলিক সংখ্যা একটি পূর্ণ সংখ্যা। ইউজার ইনপুটেড ভ্যালুটি ভগ্নাংশ হলেও সেটিকে পূর্ণ সংখ্যায় কনভার্ট করার জন্য parseInt() ইউজ করছি।
- ইনপুটেড ভ্যালুটি সংখ্যা হতে হবে। তাই যেকোনো ধরনের আলফাবেট বা সিম্বল ইনপুট ভ্যালু হিসেবে না নেওয়ার জন্য !isNaN() ফাংশনটি ইউজ করছি।
```
// Get a number from the user
let number = parseInt(prompt("Enter a number to check if it's prime:"));

// Check if the input is a number and not NaN
if (!isNaN(number)) {
  if (number <= 1) {
    alert(number + " is not a prime number.");
  } else {
    let isPrime = true;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
    isPrime
      ? alert(number + " is a prime number.")
      : alert(number + " is not a prime number.");
  }
} else {
  alert("Please enter a valid number.");
}
```


### Question 5
- Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.

### সমাধানঃ

```
const array1 = [1, 2];
const array2 = [3, 4];
const mergedArray = array1.concat(array2);
// mergedArray হলো [1, 2, 3, 4], array1 এবং array2 পরিবর্তন হয়নি।
```


### Question 6
- Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.

### সমাধানঃ

```
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 !== 0) {
      return "This is a leap year";
    } else {
      if (year % 400 === 0) {
        return "This is a leap year";
      } else {
        return "Not a leap year";
      }
    }
  } else {
    return "Not a leap year";
  }
}

// Example usage:
console.log(isLeapYear(2000)); // Output: This is a leap year
console.log(isLeapYear(2022)); // Output: Not a leap year

```

### Question 7
- Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.

### সমাধানঃ


```
// Define a function named removeDuplicates that takes an array as input
function removeDuplicates(arr) {
  // Create an empty array to store unique elements
  const uniqueArray = [];
  
  // Iterate through the input array using a for loop
  for (let i = 0; i < arr.length; i++) {
    // Get the current element from the input array
    const item = arr[i];
    
    // Check if the item is not already in the uniqueArray
    if (uniqueArray.indexOf(item) === -1) {
      // If the item is not in uniqueArray, add it to uniqueArray
      uniqueArray.push(item);
    }
  }
  
  // Return the array with duplicates removed
  return uniqueArray;
}

// Example usage:
// Create an example array with duplicates
const originalArray = [1, 2, 2, 3, 4, 4, 5];
// Call the removeDuplicates function with the example array

const uniqueArray = removeDuplicates(originalArray);

// Log the result to the console
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

```

### Question 8
- Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.

### সমাধানঃ


```
function convertToCelsius() {
  // Prompt the user for the temperature in Fahrenheit
  let fahrenheit = parseFloat(prompt("Enter the temperature in Fahrenheit:"));

  // Convert Fahrenheit to Celsius
  let celsius = (fahrenheit - 32) * 5/9;

  // Display the result
  alert("The temperature in Celsius is: " + celsius.toFixed(2));
}

// Call the function to convert and display the result
convertToCelsius();
```

### Question 9
- Write a function to find the maximum of five numbers.

### সমাধানঃ



```
function findMaximumOfFiveNumbers() {
  let numbers = [];

  for (let i = 1; i <= 5; i++) {
    let input = parseFloat(prompt("Enter number " + i + ":"));

    if (!isNaN(input)) {
      numbers.push(input);
    }
  }

  if (numbers.length === 0) {
    return "No valid numbers entered.";
  }

  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return "The maximum number is: " + max;
}

let result = findMaximumOfFiveNumbers();
alert(result);

```

### Question 10
- Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]

### সমাধানঃ


```
function evenOdd(inputString) {
  const length = inputString.length;
  if (length % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

// Example usage:
const input1 = 'JavaScript';
const input2 = 'Hello';

console.log(evenOdd(input1)); // Output: 'even'
console.log(evenOdd(input2)); // Output: 'odd'

```


#### JavaScript Assignments Solution

This repository contains a set of JavaScript assignment solutions that I've solved for you. Below, you can find a list of the solutions:

See all solutions from [Here](https://github.com/nayemspecial/wordpress-support-engineer/blob/main/parts/js-assignment-solution.md)


Feel free to reach out if you have any questions or need further assistance with these assignments!

```  Thank you so much!  ```
