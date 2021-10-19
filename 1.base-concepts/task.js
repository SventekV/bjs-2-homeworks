function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  "use strict";
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
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
