//getting all html elements
let formInput = document.getElementById("calculator_form");
let operators = document.getElementById("operator");
let result = document.getElementById("display");
let submit = document.getElementById("calculate");
let clear = document.getElementById("clear");
let number1 = document.getElementById("first_number");
let number2 = document.getElementById("second_number");

let operator;
// separate functions for operations
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => {
  let temp = a / b;
  try {
    //checking for division by zero
    if (temp === Infinity || temp === -Infinity || isNaN(temp)) {
      throw new Error("Cannot divide by zero");
    }
    return temp;
  } catch (e) {
    return e.message;
  }
};
//getting value of operator from drop-down
operators.addEventListener("change", (e) => {
  operator = e.target.value;
});
//function to return specific operator for usage

function checkOperator(operator) {
  switch (operator) {
    case "/":
      return div;
    case "*":
      return mul;
    case "+":
      return add;
    case "-":
      return sub;
    default:
      return "Invalid operator";
  }
}
//clear screen
clear.addEventListener("click", (e) => {
  number1.value = "";
  number2.value = "";
  result.innerHTML = "";
});
// calculate the result
submit.addEventListener("click", (e) => {
  e.preventDefault();

  
  let num1 = parseFloat(number1.value); // converting string to number
  let num2 = parseFloat(number2.value);
  console.log(typeof num1, typeof num2);
console.log(num1,num2);
console.log(number1.value,number2.value);
  try {
    if (isNaN(num1) || isNaN(num2)) {
      //checking for invalid number
      throw new Error("Please enter a valid numbers");
    } else if ( number1.value === "" || number2.value === "") {
      //checking for empty fields
      throw new Error("Please fill all fields");
    } else if (!operator) {
      //checking for operator
      throw new Error("Please select an operator");
    } else if (typeof checkOperator(operator)(num1, num2) === "number") {
      //displaying result
      result.innerText = `${num1.toString()} ${operator} ${num2.toString()} = ${checkOperator(
        operator
      )(num1, num2)}`;
    } else {
      result.innerText = checkOperator(operator)(num1, num2);
    }
  } catch (e) {
    // error handling
    result.innerHTML = `<span style="color:red">${e.message}</span>`;
  }
  formInput.reset();
});
