const book = {
     id:1203,
     title:'nancy drew',
     genre:'adventure',
     author:'carolyn kenne',
     year:1965,
     cost:145,
     getId : function(){
       return this.id;
     },
     setId:function(id){
       this.id=id;
     },
     getTitle: function(){
       return this.title;
     },
     setTitle:function(title){
       this.title=title;
     },
     getGenre: function(){
       return this.genre;
     },
     setGenre:function(genre){
       this.genre=genre;
     },
     getAuthor:function(){
       return this.author;
     },
     setAuthor:function(author){
       this.author=author;
     },
     getYear:function(){
       return this.year;
     },
     setYear:function(year){
       this.year=year;
     },
     getCost:function(){
       return this.cost;
     },
     setCost:function(cost){
       this.cost=cost;
     }
};

let id = book.getId();
console.log('Id:',id);
book.setId('1240');
id=book.getId();
console.log('Id:',id);

let title = book.getTitle();
console.log('Title:',title);
book.setTitle('Hardy Boys');
title=book.getTitle();
console.log('Title:',title);

let genre = book.getGenre();
console.log("Genre:",genre);
book.setGenre('Mystery');
genre=book.getGenre();
console.log('Genre:',genre);

let author = book.getAuthor();
console.log('Author:',author);
book.setAuthor('Franklin dixon');
author=book.getAuthor();
console.log('Author:',author);

let year = book.getYear();
console.log("Year:",year);
book.setYear('1943');
year=book.getYear();
console.log('Year:',year);

let cost = book.getCost();
console.log('Cost:',cost);
book.setCost('160');
cost=book.getCost();
console.log('Cost:',cost);
