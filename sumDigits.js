//a function that repeatedly adds all its digits
//the result has only one digit, and return it.
//use a while loop
// If the number is already a single digit, return it
// Split the number into its individual digits and sum them
// Recursively call the function with the sum
function addDigits(num) {
    if (num < 10) {
      return num;
    }
    let sum = 0; 
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return addDigits(sum);
  }
  
  const num = 12345;
  const result = addDigits(num);
  console.log(addDigits(num)); // should display 6
  