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
    if (temp === Infinity) {
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

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let num1 = Number(number1.value);
  let num2 = Number(number2.value);
  console.log(typeof num1, typeof num2);
  result.innerText =
    number1.value === "" || number2.value === ""
      ? "Please fill all fields"
      : isNaN(num1) || isNaN(num2)
      ? "Please enter a valid number"
      : !operator
      ? "Please select an operator"
      : typeof checkOperator(operator)(num1, num2) === "number"
      ? `${num1.toString()} ${operator} ${num2.toString()} = ${checkOperator(
          operator
        )(num1, num2)}`
      : checkOperator(operator)(num1, num2);
  formInput.reset();
});
