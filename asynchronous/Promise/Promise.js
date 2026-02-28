//? What is Promise 
// Promise Is a Object 


//? jo bee data Oprations hai vo hua ya nahi
//  Promise always exists in one of three mutually exclusive states: 
// Pending: The initial state; the operation has started but is not yet finished.
// Fulfilled: The operation completed successfully, and a resulting value is available.
// Rejected: The operation failed, and a reason (error) is provided


// let promise = new Promise((res,rej)=>{
//     let success = true
//     if(success){
//         res(0)
//     }else{
//         rej("error aa gaya")
//     }
// })
// console.log(promise)




// let promise = new Promise((res,rej)=>{
//     let success = false
//     if(success){
//        setTimeout(() => {
//          res("Kaam ho Gaya")
//        },1000);
//     }else{
//         rej(new Error("error aa gaya"))
//     }
// })
// console.log(promise)

// Promise give only this resolve and reject 

// .then - resolve value access
// .catch - rejected value access

// promise.then((data)=>{ 
//     // Data that come performs a oprations and task do what yoou want 
//     console.log(data + " Done")

// }).catch((error)=>{
//     console.log(error)

// })



// promise chaining
let success = true
let promise = new Promise((res,rej)=>{
    res(10)
})
promise.then((data)=>{
    return data * 3
}).then((data)=>{
    let res = data +data
    return res
}).then((data2)=>{
    return data2
}).then((Data)=>{
    if(Data){
        console.log(Data)
    }else{
        throw new Error(`Error a gaya ${Data}`)
    }
}).catch((error)=>{
     throw new Error(`${error}`)
}).catch((err)=>{
    console.log(`${err} 2nd catch`)
})




