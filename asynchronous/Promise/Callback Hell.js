// function Perprations(cb){
//     console.log("Start")
//     // cb()
// }
// function water(cb){
//     console.log("Water is add")
//     // cb()
// }
// function sugar(cb){
//     console.log("Sugar is added")
//     // cb()
// }
// function tea(cb){
//     console.log("Tea Leavse added")
//     // cb()
// }
// function Milk(cb){
//     console.log("Milk Added")
//     // cb()
// }
// function served(){
//     console.log("Tea is Served")
// }

// callback hell 
// primade of doume 

// Perprations(()=>{
//     water(()=>{
//         sugar(()=>{
//             tea(()=>{
//                 Milk(()=>{
//                     served()
//                 })
//             })
//         })
//     })
// })


// Perprations(water(sugar(tea(Milk(served())))))




// function stared(){
//     return new Promise((res,rej)=>{
//         res("Started")
//     })
// }
// // you can store the function in variables 
// // let promise = stared()

// stared().then((data)=>{
//     console.log(data)
//     if(data == "Started"){
//         return "water is added "
//     }else{
//         throw new Error("Started Error")
//     }
// }).then((data)=>{
//     console.log(data)
//    return "Sugar is added"
// }).then((data)=>{
//     console.log(data)
//     return "Tea Leavse added"
// }).then((data)=>{
//     console.log(data)
//     return "Milk Added"
// }).then((data)=>{
//     console.log(data)
//     return "Tea is Served"
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err.massage)
// })






// data fetch API 
// server ka database sa ui tak render karna

// let data = fetch('https://randomuser.me/api/')
// data.then((data)=>{
//     // data come from of blob data to understand to javascript we convert to json
//     let rawdata =  data.json()
//     return rawdata
// }).then((fdata)=>{
//     console.log(fdata)
//     console.log(fdata.results[0].name.first)
// }).catch((error)=>{
//     throw new Error(`${error}`)
// })




