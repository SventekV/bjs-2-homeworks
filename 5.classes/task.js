



class PrintEditionItem {
   

 
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.type = null;
    this.state = 100;
    }

 
    

          fix() {
    this.state = this.state * 1.5;
}

set state(number) {
  if (number > 100) {this._state = 100;
  return }
  if (number < 0) {this._state = 0; return}
  this._state = number;
}

get state() {return this._state}

}

class Magazine extends PrintEditionItem  {

  constructor (name, releaseDate, pagesCount) {
  super(name, releaseDate, pagesCount);
  
  this.type = "magazine";
  }

  
  
}

class Book extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount) {
  super(name, releaseDate, pagesCount);
  this.author = author;
  this.type = "book";
  }
}

class NovelBook extends Book {
constructor (author, name, releaseDate, pagesCount){
 super(author, name, releaseDate, pagesCount);
 this.type = "novel"; 
}
} 

class FantasticBook extends Book {
constructor (author, name, releaseDate, pagesCount){
 super(author, name, releaseDate, pagesCount);
 this.type = "fantastic"; 
}
} 

class DetectiveBook extends Book {
constructor (author, name, releaseDate, pagesCount){
 super(author, name, releaseDate, pagesCount);
 this.type = "detective"; 
}
} 
class Library {
  constructor (name, books) { 
  this.name = name,
  this.books = []
  }

    addBook(book) {if (book.state > 30)
    {this.books.push(book);}
  }

  findBookBy(type, value) { if (this.books.every((elem) =>(elem[type] !== value))) return null;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
      return this.books[i]
      }
    }
  }

  
giveBookByName(bookName) {
    if (this.books.every((elem) =>(elem.name !== bookName))) {
      return null
    }
    let result;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        result = this.books[i];
         /*delete this.books[i];*/ this.books.splice(i,1)
      }
      
    }
return result;
  }

  }

  class Student {
  constructor (name) {
    this.name = name;
     this.subjects = {};
  }
  addMark(mark, subject) {
       if ((this.subjects[subject] !== undefined) && (mark > 0) && (mark < 6)) {
       this.subjects[subject].push(mark);   
       }
       if ((this.subjects[subject] !== undefined) && ((mark <= 0) || (mark >= 6))) {
       console.log ("Ошибка, оценка должна быть числом от 1 до 5")   
       }
       if ((this.subjects[subject] === undefined) && (mark > 0) && (mark < 6)) {
       this.subjects[subject] = [mark];   
       }
    }

    getAverageBySubject(subject) {
 if ((this.subjects[subject] === undefined)){ let result;
  result = "Несуществующий предмет"; return result
}
if ((this.subjects[subject] !== undefined) && (this.subjects[subject].length !== 0)){ let result;
  let arr = this.subjects[subject]; let avg = arr.reduce((a, b) => (a + b)) / arr.length; result = +avg.toFixed(2); return result;
}
return result;
}

getAverage() {
 let marksSum = Object.values(this.subjects);
 let avgOne = marksSum.map((item) => {return item.reduce((a, b) => (a + b)) / item.length;} );
 let avg = avgOne.reduce((a, b) => (a + b)) / avgOne.length;
 let result = +avg.toFixed(2);
 return result;
 //let avg = marksSum.reduce((a, b) => (a + b)) / marksSum.length;
}
}