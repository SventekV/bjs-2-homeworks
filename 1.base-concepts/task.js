 "use strict";
function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
 
  let x;
  let x1;
  let x2;
  let d = b ** 2 - 4 * a * c;
  if (d > 0) {
 x1 = (-b + Math.sqrt(d) ) / (2 * a); x2 = (-b - Math.sqrt(d) )/(2 * a);
arr = [x1, x2]
  }
   else if (d === 0) { x = -b/(2*a) 
arr = [x];
   }
   else if (d < 0) {
   	arr = [];
   }
  
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  
if (isNaN(percent)) {
  return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
} else if (isNaN(contribution)) {
  return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
} else if (isNaN(amount)) {
  return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
}
const month = new Date().getMonth();
const year = new Date().getFullYear();
const numberOFyears = date.getFullYear() - year;
const n = numberOFyears * 12 - month + date.getMonth();
const P = (percent / 100) / 12;
const S = amount - contribution;
const payment = S * (P + (P / (((1 + P) ** n) - 1)))
const totalAmount = (payment * n).toFixed(2);

return Number(totalAmount);}