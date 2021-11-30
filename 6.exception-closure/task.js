function parseCount(value) { 
  value = Number.parseInt(value);
   if (Number.isNaN(value) == true) {
    const error = new Error("Невалидное значение");
    throw error;}
  else {return value}
  }

 function validateCount(value){ 
 try {
parseCount(value); const result = parseCount(value);
return result
 }

 
  
 catch (er) {
  return er
};

 }

 class Triangle {

  constructor (a, b, c) {
this.a = a;
this.b = b;
this.c = c;
if ((a + b) < c) {const error = new Error("Невалидное значение");throw error;}
  }
 getPerimeter() {const perimetr = this.a + this.b + this.c;
    return perimetr; }

    getArea() {const p = (1 / 2) * (triangle.getPerimeter()); const area = Number( Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3); ; return area }  
}
