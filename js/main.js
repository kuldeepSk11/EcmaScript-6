


/**** template literals ******/
Before ES6:

var greeting = "Hello " + first + " " + last +"! Welcome back!";
After ES6:

var greeting = "Hello ${first} ${last}! Welcome back!";

/********Default Parameters******/

Before ES6:

function multiply(x, y){
 var a = x || 1;
 var b = y || 1;
 return a*b;
}
After ES6:

function multiply(x=1,y=1){
 return x*y;
}

/*******Multi-line Strings****/
Before ES6:

var multiline = "This string sort of\n"
+ "like a multi-line string,\n"
+ "but it's not really one."
After ES6:

var multiline = `This on the other hand,
actually is a multi-line string,
thanks to JavaScript ES6`

/****Block Scope for Let and Const ****/

Before ES6:

function scopetest{
 var x = 10;
 {
 var x = 100;
 }
 {
 var x = "This is a string even!";
 }
 return x;
}
console.log(scopetest());
It actually returns the string!

After ES6:

function scopetest{
 let x = 10;
 {
 let x = 100;
 }
 {
 let x = "This is a string even!";
 }
 return x;
}
console.log(scopetest());

/******True Classes*****/
class Book {
constructor(title, author, pages) {
 this.title = title;
 this.author = author;
 this.pages = pages;
 }
 function getPageCount() {
 return this.pages;
 }
 function getAuthor() {
 return this.author;
 }
 function getTitle() {
 return this.title;
 }
}
class Novel extends Book {
 constructor(title, author, pages, genre) {
 super(title, author, pages);
 this.genre = genre;
 }
 function getGenre() {
 return this.genre;
 }
}
let book = new Novel('The Hobbit', 'J.R.R. Tolkien', 310, 'Fantasy');
console.log(book.getAuthor());

/******New Array Functions******/
forEach
This one doesn't follow the pattern you probably think, "for x in array," but it can be used in a similar way. It iterates over an array and passes the values from that array into a designated function.

var numbers = [1, 2, 3, 4, 5];
function timesTwo(number){
 console.log(number*2);
}
numbers.forEach(timesTwo);
map
Map functions are reasonably common. They allow you to perform an action to each element in an array, and create a new array containing the results.

var numbers = [1, 2, 3, 4, 5];
function timesTwo(number){
 return number*2;
}
var doubleNumbers = numbers.map(timesTwo);
console.log(doubleNumbers);
filter
The 'filter' function checks each element in an array to see if it meets a certain condition and adds it to a new array if it does. In doing so, it creates a new subset of the original array.

var numbers = [1, 2, 3, 4, 5];
function isOdd(number){
 if(number % 2){
 return number;
 }
}
var oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers);

/***** Arrow Functions *******/
A basic function:

var timesTwo = number => number*2;
timesTwo(8)

var multiply = (x, y) => x*y;

$('.btnSend').click((event) => {
 this.sendMail();
});

/*******Improved Object Literals******/

Before ES6:

function showBookInfo(title, author, genre){
 return {
 title: title,
 author: author,
 genre: genre
 }
}
console.log(showBookInfo("The Hobbit", "J.R.R. Tolkien", "Fantasy"));

After ES6:

function showBookInfo(title, author, genre) {
 return {
 title,
 author,
 genre
 }
}
console.log(showBookInfo("The Hobbit", "J.R.R. Tolkien", "Fantasy"));

/****** Destructuring ********/

Before ES6:

var randomData = {a: 12, b: false, c: 'blue'};
var a = randomData.a;
var c = randomData.c;
With destructuring, you don't need to write it all out.

After ES6:

var randomData = {a: 12, b: false, c: 'blue'};
var {a, c} = randomData;

/*****Promises *******/
Before ES6:

setTimeout(functon(){
 console.log('Timeout's up!');
}, 1000);
After ES6:

var asyncPromise = new Promise((resolve, reject) => {
 console.log('Doing the first thing async...');
 resolve();
}).then(() => {
 console.log('Doing something else...');
})

/*** rest feture ****/
var showPro = function(id, ...categies){
    console.log(id,categies);
    console.log(id,length);
    console.log(arguments,length); 
}
showPro(12345, 'rahul','sunil');

/*** Spread feture ****/
var name = [12,34,56,78];
var maxname = Math.max(...'12345');
var maxname1 = [...name];
console.log(maxname);
console.log(maxname1);

/******** Object Literals********/
function getLaptop(make, model, year) {
    return {
        make,
        model,
        year
    }
}

getLaptop("Apple", "MacBook", "2015"); // {make: "Apple", model: "MacBook", year: "2015"}

/*******Binary and Octal*******/
console.log(0b11111)
console.log(0o2342)

console.log(0xff); // also in es5

/****** Promises and Quick Promise*******/
var p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("1"), 101)
})
var p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("2"), 100)
})

Promise.race([p1, p2]).then((res) => {
   console.log(res)
})

Promise.all([p1, p2]).then((res) => {
   console.log(res)
})
//
var p1 = Promise.resolve("1")
var p2 = Promise.reject("2")

Promise.race([p1, p2]).then((res) => {
   console.log(res)
})

/***** For..of *****/
let list = [4, 5, 6];

console.log(list)

for (let i in list) {
   console.log(i);
}

/********Set *******/

var set = new Set();
set.add("Potato").add("Tomato").add("Tomato");
console.log(set.size)
console.log(set.has("Tomato"))

for(var item of set) {
   console.log(item)
}

/********Map *******/

var map = new Map();
map.set("Potato", 12);
map.set("Tomato", 34);

console.log(map.get("Potato"))

for(let item of map) {
   console.log(item)
}

for(let item in map) {
   console.log(item)
}

/*===================================================*/

//console.log(test);
//var test = "helloworld";
/*** let ****/
let test = 'helloworld';
console.log(test);

/*** const****/
const A = 100;

if(A>0){
    const A = 10;
}
console.log(A);

/*** arow function****/
var getPrice = count => 2.99;
console.log(getPrice());

var getPrice2 = count => count * 2.99;
console.log(getPrice2(2));

var getPrice2 = (count, tax) => {
     var price = count *4 ;
    price *=(1+tax);
    return price;   
} 
console.log(getPrice2(2,8.0));

/*******/
var getPro = function(proid=22){
    console.log(proid);
}
getPro();



/*******/
var prices =134,quailty =34;
var proview = {
    prices,quailty
     
}
var proview1 = {
    prices:8,
    quailty:9,
    totoal(){
        return this.prices * this.quailty
    }  
}

console.log(proview);
console.log(proview1.totoal());

/*** loop****/
var cat = ['rahul','sunil','kuldeep'];
for(var itam of cat){
    console.log(itam);
}

/*** octal and binary and template****/

var testing = 0o23;
console.log(testing);

//var testing1 = 0b22;
//console.log(testing1);

var nameset = "kuldeep";

console.log(`my name is ${nameset} 
this is only for testing` );

/**** distructuring***/

var salary = ['15000','25000','50000']
var [low,average,high] = salary;
console.log(high);

var salary1 = ['15000','25000']
var [low,average,high = '80000'] = salary1;
console.log(high);

/**** class ****/

class persondata{
    constructor(){
         console.log('constructor task');
    }
    showdata(){
        console.log('99');
    }
}
let tasknew = new persondata();

class persondata1{
    constructor(name,wight,age){
        this.name = name;
        this.wight= wight;
        this.age = age;
    }
    showdata(){
        console.log(this.name);
        console.log(this.wight);
        console.log(this.age);
    }
}
let tasknew1 = new persondata1('kuldeep','64','28');
tasknew1.showdata();

/**** inheritence ****/

class inheritence{
    constructor(name){
        console.log("constructor project" + name);
    }
}
class Project extends inheritence{    
}

class inheritence1{
    constructor(name){
        console.log("constructor project" + name);
    }
    getTask(){
        return 50;
    }  
}

class NewProject extends inheritence1{
    constructor(name){
        super();
        console.log("constructor project" + name);
    }  
    
    getTask(){
        return super.getTask() * 50;
    }
}

let showp = new Project("kuldeep");
let showNEW = new NewProject("kuldeep");
console.log(showNEW.getTask());

/**** generators ****/

function *processs(){
    yield 8000;
    yield 8001;
}

let pTag = processs();
console.log(pTag.next());
pTag.next();
pTag.next();

