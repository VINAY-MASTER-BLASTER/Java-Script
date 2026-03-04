// what is Object - object is a data strcture
// data strcture means where we store multiple datatype in one sigle element

// How to create a object
// Object work on key and value pairs
// {} - object literals

// const obj1 = {
//     name : "vinay",
//     age : 21,
//     occupation : 'Developer',

//Add the Methods
//     getName : function(){
//         console.log(`Hello`)
//     }
// }
// console.log(obj1)
// console.log(obj1["name"])
// console.log(obj1.occupation)
// obj1.getName()

// console.log(obj1["name"])

// let naam = "age"
// console.log(obj1[naam])

// data strcture allways take a dynamic size show undefined work only data strcture
// console.log(obj1.Class)

// Before ES6 - {} ,Constructio functions
// Ater ES6 Class Keywords Introduced - in other programming language you create a base class to create a object
// while we creating a Object using function it's not consider as a food practice so we use class it's Anti pattern lagta hai
// The term "function constructor is deprecated" typically refers to specific usage patterns in certain programming languages and APIs, rather than a universal deprecation of all constructors.

// base Blur Print
// Normal Function - camelCasing
// getAge(), addNum(), printThin()

// Constructor Functions
// PascalCasing

// function Person(naam,umar,kaam){
//     this.name = naam
//     this.age = umar
//     this.occupation = kaam
//     this.Hello = function(){
//         console.log(`Hello ${this.name}`)
//     }
// }
// let obj1 = new Person("vinay",21,"Developer") //instance's
// let obj2 = new Person("vikas",21,"Graphic Designer") //instance's
// console.log(obj2)
// console.log(obj1.name)
// obj1.Hello()

// Prototype
// Person.prototype.rollnumber = 50
// let obj3 = new Person('Tlick',21,'Developer')
// console.log(obj3)
// console.log(obj3.rollnumber)

// 02_Prototypes & Prototypal Inheritance .js
// In JavaScirpt Every Thing are Objects

// const person = {
//     fname : "vinay",
//     lname : 'toppo',
//     getFullname:function(){
//         return `${this.fname} ${this.lname}`
//     }
// }
// let obj = person.getFullname()
// console.log(obj)

// const person1 = Object.create(person)
// console.log("person is ",person)
// console.log("Person1 is ",person1.getFullname())

// befour
// console.log(person.fname)
// you can change it
// person1.__proto__.fname = "Hacked"
// after
// console.log(person.fname)

// What was the type of fname
// let fname = 'vinay'
// let x = 10
// when we Write fname. then all the methods shows how in string i use dot operator use it
// fname.
// x.

// Wrapper classes
// String
// Number
// Boolean
// Symbol
// BigInt

// when you create
// String
// Number
// Boolean
// Symbol
// BigInt

// behiend the seen javascript use wrapper class to create a object like this
// let fname = new String ('vinay')
// fname string class ka object hai

// how to i verify that fname is a string class object
// console.log(fname.__proto__)

// they to try to find in fname then they go to the __proto__
// console.log(fname.at(2))

// const string class{

// }
// const fname = new String()
// fname.__proto__ = String.prototype

// const p1 = {
//     xp1 : "i am inside P1"
// }
// const p2 = {
//     xp2 : "i am inside P2",
//     __proto__ : p1
// }
// const p3 = {
//     xp3 : "i am inside P3",
//     __proto__: p2
// }
// console.log(p3.xp1)

// Any class or things in JS __proto__ Object
// Object  __proto__ : null

// class student {
//     constructor(fname,age){
//         this.name = fname
//         this.age = age
//     }
//     getName() {
//         return `hello getName   `
//     }
// }
// const s1 = new student('vinay',21)
// const s2 = {__proto__ : student.prototype}

// class student{
//     ...
// }
// student.prototype

//what is do new kwyword
// new student()
// s1.__proto__ = student.prototype

// __proto__ and  prototype
// 1. __proto__  ->. jo object hota ha attach hai __proto__
// 2. prototype  -> jo base class hoti vo prototype hota hai

//! What is Prototype

// console.log(person1.fname)

// let obj1 = {
//     name : 'vinay',
//     age : 21,
//     occuption : 'Developer'
// }
//  Object.create() is a built-in method in JavaScript that creates a new object using an existing object as its prototype.
// let Obj2 = Object.create(obj1)
// console.log(Obj2.name)

// object.create -> use for prototype set karna ka kaam aata hai

// previous property ko prototype mana aur jub access karaga tub aa gaya ya rahe owns property
// Add a name and property

// Obj2.name = 'vikas'
// Obj2.class = 'first'
// console.log(Obj2)

// the property of its Object its owns or not tells in the forms of ture and false
// console.log(Obj2.hasOwnProperty('class'))

// function Person(name,age,accupation){
//     this.name = name
//     this.age = age
//     this.occuption = accupation
// }
// Person.prototype.greet = function(){
//     console.log(this.name)
//     console.log(this)
// }
// let Obj = new Person('vinay',21,'Devloper')
// Obj.greet()

//? this Refer Object ,
// node.js - Global Object
// Chrome - window Object
// console.log(this)

//? this have a context

// * FS5 Functions can do Binding
// * FS6 Functions can't do binding it take from the Environment

//! ES 5 function
// let obj = {
//     name : 'vinay',
//     age : 21,
//     occupations : 'Developer',
// FS5 Functions hava a power of binding yana ki vo kisi ka sath jud sakta hai mens kisi bhee object ka sath jud sakta hai ya apna sa bahar wala object o refer karta hai
//     fn:function(){
//         console.log(this)
//     }
// }
// obj.fn()

//! ES6 Functions
// let obj = {
//     name : 'vinay',
//     age : 21,
//     occupations : 'Developer',
// FS6 Functions dosen't hava a power of binding ya if refer to the Main Object that means the Window Object
//     fn:() =>{
//         console.log(this)
//     }
// }
// obj.fn()

// //! ES5 Inside ES6 Functions
// let obj = {
//     name : 'vinay',
//     age : 21,
//     occupations : 'Developer',
//     fn:function(){
//         let arrowFn = ()=> {
//             console.log(this)
//         }
//         arrowFn() //call
// Run this function you can also use retune

//     }
// }
// obj.fn()

// //! ES6 Inside ES6 Functions
// let obj = {
//     name : 'vinay',
//     age : 21,
//     occupations : 'Developer',
//     fn:()=>{
//         let arrowFn = ()=> {
//             console.log(this)
//         }
//         arrowFn() //call
//         // Run this function you can also use retune

//     }
// }
// obj.fn()

//! ES6 indise ES5 Functions
// let obj = {
//     name : 'vinay',
//     age : 21,
//     occupations : 'Developer',
//     arrow:()=>{
//         function fn(){
//             console.log(this)
//         }
//         fn()
//     }
// }
// obj.arrow()

//! ES5 inside ES5 functions
// let obj = {
//     name : 'vinay',
//     age : 21,
//     occupations : 'Developer',
//     fn:function(){
//         function fum(){
//             console.log(this)
//         }
//         fum()
//     }
// }
// obj.fn()

// ! call apply and Bind
// methods hai function ko call karna ka liya
// In JavaScript, call(), apply(), and bind() are methods used to control the value of this inside a function.
// They are available on all functions (because functions are objects in JavaScript).
// set the context of this

//? Call methods
// let Person = {
//     name: 'vinay',
//     age : 21,
//     occupation : 'Developer'
// }
// function fn(symbol){ //Parameter
//     console.log(this)
//     console.log(`hello ${this.name} ${symbol}`)

// }
// fn.call(Person,"!") //Argement

// Immediately invokes (calls) the function.
// Sets this to the object you pass.
// Here this refers to person1.

//? apply methods
// let Person = {
//     name: 'vinay',
//     age : 21,
//     occupation : 'Developer'
// }
// function fn(symbol,symbol1){ //Parameter
//     console.log(this)
//     console.log(`hello ${this.name} ${symbol} ${symbol1}`)

// }
// fn.apply(Person,["?","!"])

// same thing but different ways
// let arr = ["?","!"]
// fn.apply(Person,arr)

// Immediately invokes the function.
// Sets this value.
// Arguments are passed as an array.
// Same as call(). here send the argument in a array

//? Bind() methods
// let Person = {
//     name: 'vinay',
//     age : 21,
//     occupation : 'Developer'
// }
// function fn(symbol,symbol1){ //Parameter
//     console.log(this)
//     console.log(`hello ${this.name} ${symbol} ${symbol1}`)

// }

// let binding = fn.bind(Person,"?","!")
// binding()

// Does NOT call the function immediately.
// Returns a new function with this permanently set
// same as call but retune a new functions

// prototype Inhertance
// Prototypal inheritance is a feature in JavaScript where objects inherit properties and methods directly from other objects through internal links, rather than from classes. Every object holds a hidden [[Prototype]] property pointing to a prototype object, forming a chain that continues until it reaches null.

// Class Keywords
// / In JavaScript, a class is a blueprint or template for creating objects that share similar properties and methods. Classes were introduced in ECMAScript 2015 (ES6) and are a form of syntactic sugar over JavaScript's existing prototype-based inheritance model, providing a cleaner, more structured syntax for object-oriented programming.

// Class was Introduced ES6

// class Person{
//     constructor(name,age,city){
//         this.name = name
//         this.age = age
//         this.city = city
//     }
//     // Helper Functions ya fir methods bee kahata hai
//     sayHello(){
//         console.log(`Hello ${this.name}`)
//     }
// }
// let obj1 = new Person('vinay',21,'Delhi')
// console.log(obj1.age)
// obj1.sayHello()

// When you create a object Person call a constructor call where vinay 21 delhi passed in (name,age,city)
// In the Person you creating  a three Propertys
//         this.name = name
//         this.age = age
//         this.city = city

// class Human{
//     name = "vinay";
//     age = 21
// }
// let obj = new Human()
// console.log(obj)

// class ka andar in built constructor function hota jiski vaja sa object create hota hai
// when you make your own constructor function then the in built constructor function will stop

// class Human{
//     constructor(name,age,occupation){
//         this.name = name
//         this.age = age
//         this.occupation
//     }
// }
// const obj = new Human("vinay",21,"Devloper")
// console.log(obj)

// Extent Keyword
// Inheritance: The ability of a new class to access and reuse the functionality (properties and methods) of an existing class.

//? Which function Will execute
// class Human1{
//     name = "vinay"
// }
// class Human2 extends Human1{
//     age = 21
// }
// class Human3 extends Human2{
//     occupation = "Developer"
//     fn = function(){
//         console.log("This is Human3")
//     }
// }
// const obj = new Human1
// console.log(obj)

// const obj1 = new Human3
// console.log(obj1)
// obj1.fn()

// super() function
// Mandatory in Derived Classes: If a subclass has its own constructor, it must call super() before it can use the this keyword. This is because the parent class's constructor is responsible for initializing the new object instance, and the derived class builds upon that initialization.

// Example - 1
// class Human1{
//     name = "vinay"
// }
// class Human2 extends Human1{
//     constructor(age){
//         super()
//         this.age = age
//     }
// }
// let obj = new Human2("21")
// console.log(obj)

// Example - 1
// class Human1{
//     constructor(name){
//         this.name = name
//     }
// }
// class Human2 extends Human1{
//     constructor(age,name){
//         super(name)
//         this.age = age
//     }
// }
// let obj = new Human2("21","vinay")
// console.log(obj)

// instanceof
// console.log(obj instanceof Human2)

// seal and freeze

// let obj = {
//     name : "vinay",
//     age : 21
// }

// freeze - Completely locks an object. Existing properties are read-only and cannot be changed or deleted.
// Object.freeze(obj)
// obj.name = "Vikas"
// delete obj.age
// obj.class = 3

// seal -  Allows modification of existing property values but prevents new properties from being added or existing ones from being removed.
// Object.seal(obj)
// obj.name = "Vikas"
// delete obj.age
// obj.class = 3

// console.log(obj)

// object descriptors in javascript
// descriptors seal ya freez method lagana specific key par
// let Obj = {
//     name : "vinay",
//     age : 21
// }
// let ans = Object.getOwnPropertyDescriptor(Obj,"name")
// // console.log(ans)
// Object.defineProperty(Obj,"name",{
//     writable : false,
//     configurable : false
// })
// Object.defineProperty(Obj,"name",{
//     configurable : true,
//     writable : true,
// })
// Obj.name = "vikas"
// console.log(Obj)

// value  - what was the value
// writable - re-assign updata change - true/false
// enumerable - could you run the loops - true/false
// configurable - all the prevision property can change - true/flase

// now to make enumerable false

// let obj = {
//     name : "vinay",
//     age : 21,
//     class : 2,
//     occupaton : 'student'
// }
// Object.defineProperty(obj,"name",{
//     enumerable : false
// })
// obj.hello it'll cheak the exact hello inside object
// for(let hello in obj){
//     console.log(`${hello} ${obj[hello]}`)
// }

// class with functions
// class Human{
//     constructor(age){
//         this.age = age
//     }
//     fn(){
//         console.log(2*3)
//     }
// }
// class Human1 extends Human{
//     constructor(name,age){
//         super(age)
//         this.name = name
//     }
//     fn(){
//         super.fn()
//         console.log(2+3)
//     }
// }
// let Humans = new Human1()
// Humans.fn()

// static and privat

// ? static
// class Parent {
//     static num = 10
// }
// let obj = new Parent()
// obj.num++

// let obj1 = new Parent()

// console.log(obj1.num)
// console.log(obj.num)

// access
// console.log(Parent.num)

// When Ever Constructor call num will increment

// class Parent {
//     static num = 0
//     constructor(){
//         Parent.num++
//     }
//     fn(){
//            console.log(Parent.num)
//     }
// }
// let obj = new Parent()
// let obj1 = new Parent()
// obj1.fn()

//? Private field
// class Parent {
//      #num = 0
//     hello(){
//            console.log(this.#num)
//     }

// }
// let obj = new Parent()
// let obj1 = new Parent()
// obj1.hello()

// class User{
//     #password
//     constructor(name,password){
//         this.name = name
//         this.#password = password
//     }
//     cheakpassword(inputpassword){
//         return this.#password == inputpassword
//     }
// }

// let User1 = new User("vinay","Secrt")
// let pass = User1.cheakpassword('Secrt')
// console.log(pass)

// Geter and seter

//? Geter
// In JavaScript, a getter method is a special function defined using the get keyword that allows you to access an object property as if it were a regular data property, without using parentheses

// Example - 1
// class Parent{
//     constructor(lengeth,breath){
//         this.lengeth = lengeth
//         this.breath = breath
//     }

//     get area(){
//         console.log(this.lengeth*this.breath)
//     }
// }
// let obj = new Parent(10,10)
// obj.area

// Example - 2
// class Parent{
//     constructor(user){
//         this.username = user
//     }
//     get uppercase(){
//        return this.username.toUpperCase()
//     }
// }
// let obj = new Parent("Vinay")
// console.log(obj.uppercase)

//? seter
// A setter is a special method in an object that allows you to set (update) a property value while controlling how it is changed.
// class Parent{
//     constructor(name){
//         this._name = ""
//         this.name = name
//     }
//     set name(value){
//         if(typeof value != "string"){
//             throw new Error("not a string")
//         }else{
//             this._name = value
//         }
//     }
//     get name(){
//         return this._name
//     }
// }
// let obj = new Parent("vinay")
// console.log(obj.name)

// Assign the object to another object using for in loops
// let obj = {
//     name : "vinay",
//     age : 21 ,
//     id : 23232323
// }
// let obj2 = {};

// for(key in obj){
//     obj2[key] = obj[key]
// }
// console.log(obj2)

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let arr1 = []
// for(let i = 0; i<arr.length;i++){
//     arr1[i] = arr[i]
// }
// console.log(arr1)

let obj = {
  name: "vinay",
  age: 21,
  occupation: "Developer",
};
let obj2 = {};
let index = 1;
for (key in obj) {
  if (index == 1) {
    obj2[key] = "manvi";
    index++;
  } else {
    obj2[key] = obj[key];
    // index++
  }
}
console.log(obj2)