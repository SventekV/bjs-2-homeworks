
function parseCount(value) { 
  let a = Number.parseInt(value);
   if (isNaN(a)) {
    throw e = new Error("Невалидное значение"); 
    }
  else {return a;}
 }
 
function validateCount(value){ 
 try {
  let result = parseCount(value);
  return result;
 }
 catch (e) {
   return e;
 };
}


class Triangle {
 constructor (a, b, c) {
this.a = a;
this.b = b;
this.c = c;
if ((a + b) < c || (a + c) < b || (b + c) < a) {
  const error = new Error("Треугольник с такими сторонами не существует");
  throw error;}
}

getPerimeter() {
  const perimetr = this.a + this.b + this.c;
  return perimetr; 
}

getArea() {
      const p = (1 / 2) * (this.a + this.b + this.c);
      const area = +( Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3); ; return area 
     }  
}



function getTriangle(a, b, c) {
  try {
   const triangle = new Triangle(a,b,c);
   return triangle;
  }
 catch (error) {const object = {
  getPerimeter() {return "Ошибка! Треугольник не существует"},
  getArea() {return "Ошибка! Треугольник не существует" } 
  };
   return object; 
 } 
}
