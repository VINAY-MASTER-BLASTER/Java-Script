// console.log("Programm start")

// ES5 
// setTimeout(function(){
//     console.log("Settime put")
// },1000)

// ES6 
// setTimeout(()=>{
//     console.log("inside SetTimeout")
// },1000)

// console.log("Programm End") 




// console.log("Programm start")
// setTimeout(() => {
//     console.log("Inside 1st setimeout")
// },1000);

// console.log("after first timeout")

// setTimeout(() => {
//     console.log("inside 2nd settimeout")
// },500);

// console.log("after second timeout")


// ? Practice 
// console.log("first")

// setTimeout(()=>{
//     console.log("1st setimeout")
// },1100)

// console.log("Second")

// setTimeout(()=>{
//     console.log("2st setimeout")
// },100)

// setTimeout(()=>{
//     console.log("3st setimeout")
// },500)
// console.log("Hello")
// console.log("End Programm")



// syntax
// let fun = () =>{
//     console.log("hello ES5 Function This")
// }
// setTimeout(fun,1000)



// syntax
// function get(name,name1){
//     console.log(`Hello ${name} ${name1}`)
// }
// setTimeout(get,2000,"Vinay","toppo")



// clearInterval - stop karta hai settimeout ko 
// let a = setTimeout(()=>{
//     console.log("First")
// },100)
// setTimeout(()=>{
//     console.log("Second time out")
// },1000)
// clearTimeout(a)



// syntax
// function toruntimeout(num){
//     setTimeout(()=>{
//         console.log("inside timeout")
//     },num)
// }
// toruntimeout(5000)



//? setInterval
// The JavaScript setInterval() method repeatedly calls a function or executes a code snippet at a specified time delay (in milliseconds) between each call


// let count = 1
// let stop = setInterval(()=>{
//     console.log(count)
//     count++
//     if(count == 10){
//         clearInterval(stop)
//     }
// },1000)



// let count = 1
// let stop = setInterval(()=>{
//     console.log(count)
//     count++
// },500)
// setTimeout(()=>{
//     clearInterval(stop)
// },5000)



// for(let i = 0 ; i<=10; i++){
//     setTimeout(()=>{
//         console.log("Hello")
//     },1000*i)
// }
// console.log("End")

for(var i = 0 ; i<=10; i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}
console.log("End")