// async annd awit come in ES7 

// async annd awit 
// async function fetching(){
//     let rawData = await fetch('https://randomuser.me/api/')
//     let data =  await rawData.json()
//     console.log(data)
// }
// fetching()


// do the same this with .then
// let data = fetch('https://randomuser.me/api/')
// data.then((data)=>{
//    return  data.json()
// }).then((fdata)=>{
//     console.log(fdata)
// })



// Exmaple Promise need to wating for execution
// let promise = new Promise((res,rej)=>{
//     res(1)
// })
// async function name(){
//     let value = await promise
//     console.log(value)
// }
// name()


// return the function 
// async function fetching(){
//     let rawData = await fetch('https://randomuser.me/api/')
//     let data =  await rawData.json()
//     return data
// }
// let fdata = fetching()
// fdata.then((data)=>{
//     showdata(data)
// })

// function showdata(data){
//     console.log(data)
// }



// try catch
async function fetchData() {
    try {
        let response = await fetch("https://api.example.com/data");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Fetch failed:", error.message);
    }
}
fetchData()

// data now 
// const d = new Date("2024-12-25")
// console.log(d.getMonth())