//getting all elements
let formInput = document.getElementById('calculator_form');
let operators= document.getElementsByClassName('operator');
let result = document.getElementById('display');
let submit = document.getElementById('calculate');
let clear = document.getElementById('clear');
let number1= document.getElementById('first_number');
let number2 = document.getElementById('second_number');
let operator;
console.log(operators);
const add = (a,b)=>a+b;
const sub =(a,b)=>a-b;
const mul = (a,b)=>a*b;
const div = (a,b) => {
    if(b === 0){
       return 'Operation not possible'
    }else{
        return a/b;
    }
}
function checkOperator(operator){
    switch(operator){
        case '/' : return div;
        case '*' : return mul;
        case '+' : return add;
        case '-' : return sub;
        default : return 'Invalid operator';
    }
}
operators[0].addEventListener('click',(e)=>{
  operator = e.target.value;
})
operators[1].addEventListener('click',(e)=>{
    operator = e.target.value;
})
operators[2].addEventListener('click',(e)=>{
    operator = e.target.value;
})
operators[3].addEventListener('click',(e)=>{
    operator = e.target.value;
})
clear.addEventListener('click',(e)=>{
    number1.value = '';
    number2.value = '';
    result.innerHTML = '';
})

submit.addEventListener('click',(e)=>{
    let num1 = Number(number1.value);
    let num2 = Number(number2.value);
    result.innerText = number1.value === '' || number2.value === '' ? 
    'Please fill all fields' : isNaN(num1) || isNaN(num2) ? 
    'Please enter a valid number' : !operator ? 'Please select an operator' :
    checkOperator(operator)(num1,num2);
   
})