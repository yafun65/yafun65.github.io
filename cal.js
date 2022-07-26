const num1 = parseInt(prompt("Enter first number: "));
const num2 = parseInt(prompt("Enter second number: "));
const operator = prompt("Enter operator (+, -, /, *)");
let result;
if(isNaN(num1)|| isNaN(num2)){
alert('wrong input! please Refresh the page again');
} else{
    if(operator == "+") {
  result = num1 + num2;
}
 else if (operator == "-") {
  result = num1 - num2;
}
 else if (operator == "*") {
  result = num1 * num2;
} 
else if (operator == "/") {
  result = num1 / num2;
}
alert(num1 + operator + num2 +'='+ result);
}