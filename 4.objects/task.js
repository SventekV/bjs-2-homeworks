function Student(name, gender, age) {
  // Ваш код
this.name = name;
this.gender = gender;
this.age = age;
}


Student.prototype.setSubject = function (subjectName ) {
  //ваш код
  if ( this.subject === undefined) {
this.subject = [subjectName]; 
} 
else {
this.subject.push(subjectName); 
}
}

Student.prototype.setSubject = function (subjectName) {
    if ( this.subject === undefined) {
this.subject = subjectName; 
} 

}
//ваш код


Student.prototype.addMark = function(mark) {
if ( this.marks === undefined) {
this.marks = [mark]; 
} 
else {
this.marks.push(mark); 
}
}

Student.prototype.addMarks = function(...mark) {
if ( this.marks === undefined) {
this.marks = [...mark]; // Первая оценка добавляется в массив
} 
else {
this.marks.push(...mark); // Все остальные оценки пушатся
}
}

Student.prototype.addMarks = function(...mark) {
if ( this.marks === undefined) {
this.marks = [...mark]; // Первая оценка добавляется в массив
} 
else {
this.marks.push(...mark); // Все остальные оценки пушатся
}
}
Student.prototype.getAverage = function() {
    const marksA = this.marks;
    let average;
    let sum = 0;
    for (let i = 0; i < marksA.length; i++) {
      sum = sum + marksA[i];  
    }
    average   = sum / marksA.length;
   return average;

                             
                             
                            
                              
}  


Student.prototype.exclude = function(reason) {
 if ( this.excluded === undefined) {
this.excluded = reason;  delete this.subject; delete this.marks;
} 

 

  
} 

// ваш код для остальных методов