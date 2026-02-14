// function statement 
// function print(){
//     console.log("Print")
// }
// print() //call invoke 


// function expression - named function
// let second = function first(){
//     console.log('First')
// }
// second()


// function expression - anonymouse function
// let third = function(){
//     console.log('third')
// }
// third()





// function fourth(){
//     console.log('inside functions')
// }
// let five = fourth
// console.log(five)
// five()
// fourth()



// let second = function first(){
//     console.log("inside Second")
// }
// second()
// first()



// Arrow functions Es6 
// let third = () =>{   
//     console.log("Hello World")
// }
// third()




// parmeters 
// function add(a,b){
//     console.log(a+b)
// }
// add(32,32)
// add(2,10)


// retune keywork 
// function add(a,b){
//     return a + b // retume function stop but it take some thing any type of data
// }
// let ans = add(10,22)
// console.log(ans)

// function add(a,b){
//     let c = a+b
//     return c
// }
// let result = add(5,7)
// console.log(result*14)




// function first(){
//     console.log("inside first")
//     function second(){
//         console.log('inside second')
//         return 10
//     }
//     return second
// }
// let result = first()
// let result2 = result()
// console.log(result2)



// callback function and higher order functons
// function hof(cb){
//     console.log('inside hof')
//     cb()
// }
// hof(function(){
//     console.log('inside functions')
// })



// HOF - vo function jo another function ko retune karta hai 
// function hof(){
//     return function(){
//         console.log("Inside cb function")
//     }
// }
// let cb = hof()
// cb()



// IIFE - Immediately Invoked Function Expression
// (function (){
//     console.log('inside IIFE')
// })()