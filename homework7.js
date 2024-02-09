const calculate = (num1, num2) => 
  num1 % 2 === 0 && num2 % 2 === 0 ? num1 * num2 :
  num1 % 2 !== 0 && num2 % 2 !== 0 ? num1 + num2 :
  num1 % 2 !== 0 ? num1 : num2;


console.log(calculate(6, 8));
console.log(calculate(3, 5));
console.log(calculate(3, 8));