// pass by reference 
// let ans = [2,4,6,7,8,9,10,12,21,2]
// let arr = ans


// arr[0] = 10
// console.log(arr)
// console.log(ans)


// Objects 
// let Obj = {
//     name : "Vinay",
//     age : 21
// }
// let Obj1 = Obj
// Obj1.name = "vikas"
// console.log(Obj)


// let obj = {
//     name : "vinay",
//     details:{
//         occupation : "Developer"
//     }
// }

// let obj2 = Object.assign({},obj)
// obj2.name = "deepak" // top level property not change prmative but not-primative change it becouse it's pass by reference  

// obj2.name = "Deepak"
// obj2.details.occupation  = "vikas"
// console.log(obj)



// spread operator 
// let arr = [1,2,3,4,53,55,54]

// ? combine 
// let arr2 = [10,23,23,43,...arr] //spread it just like opern bracket 


//? copy 
// let arr3 = [...arr]
// console.log(arr3)

//? now cheak deepcopy ya for shallcopy 
// Cheak in nested in top level
// let arr = [2,4,6,[75,80],8,10,12,14]
// let arr2 = [...arr]
// arr2[3][0] = 105
// console.log(arr)
// this is shally copy 


// let obj = {
//     name : "vinay",
//     age : 21,
//     details : [1,2,3,4,5]
// }
// let obj2 = {...obj}
// obj2.details[0] = "s"
// console.log(obj)
// shall copy 


//  rest operaltor
// function ka ander jo three dot ka use karuga parameters ma tu vo rest operator hota hai data go in the form of array

// function fn(...args){
//     console.log(args)
// }
// fn(12,3,32,32,32)




// pass by value 
// let a = 6
// let b = a
// console.log(b)


// deepcopy - structuredClone
let obj = {
    name : "vinay",
    age : 21,
    detils : [1,2,3,4,5]
}
let obj2 = structuredClone(obj)
obj2.detils[0] = "Hello"
console.log(obj)