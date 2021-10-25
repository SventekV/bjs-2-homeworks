// Задание 1
function getArrayParams(arr) {
 let min, max, sum, avg;
 sum = 0;
 min = arr[0];
 max = arr[0];
  for (let i = 0; i < arr.length; i++) {
   sum += arr[i];
     if (min > arr[i]) {
       min = arr[i];
     }
     if (max < arr[i]) {
       max = arr[i];
     }
  }
  avg = +(sum / arr.length).toFixed(2); 

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
 let sum = 0;
 // Ваш код
  for (let j = 0; j < arr.length; j++) {
   sum += arr[j];  
  }

 return sum;
}

function makeWork(arrOfArr, func) {
 let max;
  for (let i = 0; i < arrOfArr.length; i++) { 
   func(arrOfArr[i]); 
   max = func(arrOfArr[0]);
    if (max < func(arrOfArr[i])) {
     max = func(arrOfArr[i])
    }
  }
  // Ваш кода
  // for ...
  
 return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
 let min;
 let max;
 let difference;
 max = arr[0];
 min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
     max = arr[i];  
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  difference = max - min;
  return difference;
}

