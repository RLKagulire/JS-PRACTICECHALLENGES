//user should have an input field for year of birth
//prints a string in the console
//Below 18 is a minor
// Between 18 and 36 is a youth
//Rest are elders
let birthYear = prompt("ENTER YEAR OF BIRTH")
let age = 2023 - birthYear;

function yearOfBirth () {
   
    if (age < 18){
        console.log("Minor");
    }
    else if (age >= 18 && age <= 36){
            console.log("Youth");
        }
    else{
            return "Elder";
        }
    }
    console.log(yearOfBirth());
