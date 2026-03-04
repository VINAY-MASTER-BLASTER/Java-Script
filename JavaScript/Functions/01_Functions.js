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



// function greet(name){
//     return `hello ${name} !`
// }
// greet('hitesh')
// console.log(greet("Vinay"))
// console.log(greet())



// defult parmeters 
// function add(a,b=5){
//     console.log(a+b)
// }
// add(25)



// function Search(array,target){
//     let count = 0
//     for(let i = 0; i<array.length;i++){
//         if(array[i] == target){
//             count++
//             break
//         }
//     }
//     if(count > 0){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }
// let arr = [1,2,3,4,5,6,6,5,4,3,2,1]
// Search(arr,5)






// function Search(array,target){
//     for(let i = 0; i<array.length;i++){
//         if(array[i] == target){
//             return true
//         }
//     }
//     return false

// }
// let arr = [1,2,3,4,5,6,6,5,4,3,2,1]
// let result = Search(arr,10)
// console.log(result)




// function reptative(arr,targetNum){
//     let count = 0
//     for(let i = 0; i<arr.length;i++){
//         if(arr[i] == targetNum){
//             count++
//         }
//     }
//     return count
// }
// let arr = [1,2,3,4,5,4,3,2,7,5,1,2,4]
// let reult = reptative(arr,4)
// console.log(reult)




function Maxnumber(arr,target){
    let max = arr[0]
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    if(max == target){
        return true
    }else{
        return false
    }
}
let arr = [1,2,3,4,5,11,6,7,10,9]
let maxvalue = Maxnumber(arr,11)
console.log(maxvalue)