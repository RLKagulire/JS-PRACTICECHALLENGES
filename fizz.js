//function name is fizzBuzz
//two parameters both strings ("a","b")
//output= "Fizz" if (a.length + b.length)%3=0
//output= "Buzz" if (a.length + b.length)%5=0
//output= "FizzBuzz" if (a.length + b.length)%3=0 
//&& (a.length + b.length)%5=0
//otherwise it is not FizzBuzz
function fizzBuzz(a,b) {
    const sumOfStrings = a.length + b.length;
    if(sumOfStrings % 3 === 0 && sumOfStrings % 5 === 0) {
        return "FizzBuzz";
    }
    else if (sumOfStrings % 3 === 0) {
        return "Fizz";
    }
    else if(sumOfStrings % 5 === 0) {
        return "Buzz";
    }
    else{
        return "Not FizzBuzz";
    }
}
let a = "Kagulire"
let b = "Ronaldo"
console.log(fizzBuzz(a,b));
