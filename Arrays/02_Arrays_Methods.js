// let arr = [1,2,3,4,5,6,7,8,9,10]

//! Push methods 
// change in the origin Array
// arr.push(11) //add the Element in the last index 
// console.log(arr)


//! Pop methods 
// change in the origin Array\
// arr.pop()//when ever you run the pop command it remove element automatically in the last index 
// arr.pop()
// console.log(arr)


// Question : Even num from the array and push the even nember in another array
// let arr1 = [2,3,4,5,6,7,8,9,10]
// let newarr = []

// for(let i = 0; i<arr.length; i++){
//     if(arr1[i]%2==0){
//         newarr.push(arr1[i])
//     }
// }
// console.log(newarr)


// ! Shift 
// change in the origin Array
// remove the element from the first index 
// arr.shift()
// console.log(arr)


// ! unshift
// change in the origin Array
// add the element from the first index 
// arr.unshift(1)
// console.log(arr)


// All these methods are inbuilt located ya fir store 
// Array ka class ya fir constructor function 
// /all the details of arrays in wiriten in the capital Array
// let arr1 = new Array()
// console.log(arr1)


//! Slice
// want a small part(ranget) of it arr
// let ans = arr.slice(2,5) //the slice last index -1 hota hai
// console.log(ans) it create a copy not change the original Array 
// console.log(arr)


//! splice 
// change in the origin Array
// it remove the element 
// let ans = arr.splice(2,5) //first index second count  
// console.log(ans)
// console.log(arr)


// Negitive index Value 
// let ans = arr.splice(-2,2) 
// console.log(ans)
// console.log(arr)


// Add the Element 
// let ans = arr.splice(2,3,30,40,50)
// console.log(ans)
// console.log(arr)



//? importent methods 
// ! Map 
// map method do - go to every Element and performs a task
// it take a another function that means it is also a highter order functions 
// map dose not change the origin Array
// let arr1 = [1,2,3,4,5,6,7,8,9,10]
// let ans = arr1.map((ele)=>{ // call back function  
//     return ele * 2
// })
// console.log(arr1)
// console.log(ans)


// Queation : Multiplay those element greater then 5 
// let arr = [1,2,3,4,5,6,7,8,9,10]
// let ans = arr.map((ele)=>{
//     if(ele > 5){
//         return ele * 2
//     }else{
//         return ele
//     }
// })
// console.log(ans)


// ! filter
// what was the work of filter it is do it filtration
// filter cheak a conditions only if it's ture then it passed or fails 
// filter dose not change the origin Array
// it take a another function that means it is also a highter order functions 

// let arr = [1,2,3,4,5,6,7,8,9,10]

// let ans = arr.filter((ele)=>{ // callback function
//     return ele%5==0
// })
// console.log(ans)
// console.log(arr)

// let ans1 = arr.filter((ele)=>{ // callback function
//     return ele%2==0 && ele%3==0
// })
// console.log(ans1)
// console.log(arr)


// Question : map of filter the who divisible 5 assign in a new arrays 
    let arr = [1,2,3,4,5,6,7,8,9,10]
    let newarr = []
    let ans = arr.map((ele)=>{
        if(ele%5==0){
            return newarr.push(ele)
        }else{
            return 0
        }
    })
    console.log(newarr)
    console.log(ans)