// let var and const difference between 

//? let 
// let ka block scope hota hai 
// re-declare is not possiable 
// re-assign ya re-installization is possiable 

// let i = 5
// {
//     let i = 10
//     console.log(i)
// }
// console.log(i)




// const 
// re-declare is not possiable 
// re-assign ya re-installization is not possiable 
// const ka block scope hota hai 
// const c = 100
// {
//     const c = 50
//     console.log(c)
// }
// console.log(c)





// var 
// var ka functional scope and Global scope hota hai 
// re-assign ya re-installization is possiable 

function fn(){
    {
        var a = 3
    }
    console.log(a)
    console.log(x)
    
}
fn()
