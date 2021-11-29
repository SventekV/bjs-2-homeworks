



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

   
/*findBookBy(type, value) {
    for (let i = 0; i < library.books.length; i++){ let arr1;
      if(Object.keys(library.books[i]).includes(type) == true) { 

  }*/
  

  


    }