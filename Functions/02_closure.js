// closure and lexical environment

// function first(){
//     let x = 5;
//     function second(){
//         return x
//     }
//     return second
// }

// let fn = first()
// let value = fn()
// console.log(value)







// context of this in function inside the  Objects 

// let obj = {
//     name : "vinay",
//     age : 21,
//     fn:function(){
//         console.log(this)
//     }
// }


// let obj = {
//     name : "vinay",
//     age : 21,
//     fn:function(){
//         let fns = function(){
//             console.log(this)
//         }
//         fns()
//     }
// }
// obj.fn()

// ES5 function ka directly access hota hai object key sa 
// But Nested ES5 Function Not access the lexical scope  


// let obj = {
//     name : "vinay",
//     age : 21,
//     fn:()=>{
//         console.log(this)
//     }
// }



let obj = {
    name : "vinay",
    age : 21,
    fn:function(){
        let ES6 = () =>{
            console.log(this)
        }
        ES6()
    }
}
obj.fn()
// ES6 Function jo hai lexical environment ka use kar ka object access karta hai 
