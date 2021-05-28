const empty = "";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*";
const zero = "0000";


const pLength = document.getElementById("p-length");
const upperCase = document.getElementById("p-uppercase");
const lowerCase = document.getElementById("p-lowercase ");
const pNumber = document.getElementById("p-number");
const pSymbol = document.getElementById("p-symbol");
const pZero = document.getElementById("p-zero");
const submit = document.getElementById("submit");
const password = document.getElementById("password");

submit.addEventListener("click", ()=>{
  let initialPassword = empty;
  (upperCase.checked) ? initialPassword += uCase : ""; 
  (lowerCase.checked) ? initialPassword += lCase : ""; 
  (pNumber.checked) ? initialPassword += number: ""; 
  (pSymbol.checked) ? initialPassword += symbol : ""; 
  (pZero.checked) ? initialPassword += zero: "";
  
  password.value = generatePassword(pLength.value, initialPassword)
});

function generatePassword(l, initialPassword){
    let pass = "";
    for (let i = 0; i < l; i++){
         pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
    }

    return pass;
}





function addition (arg1, arg2){
    sum =(arg1 + arg2);
    return sum;
}

function subtraction (subtract1, subtract2){
    minus = (subtract1 - subtract2)
    return minus;
}

function divided (divi, divii){
     dive = (divi / divii);
     return dive;
}

function times (mul1, mul2){
    multiplication = (mul1 * mul2);
    return multiplication;
}

class Calculator {
    constructor(add, sub, divide, multiply, genpass){
        this.sum = add;
        this.minus = sub;
        this.dive = divide ; 
        this.multiplication = multiply;
        this.pass = genpass;
    }
} 

const addOne = new Calculator(1 + 2, 1 - 2, 4 / 2, 2 * 2, "");

console.log(addOne);
