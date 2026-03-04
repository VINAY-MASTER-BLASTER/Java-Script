// let btn = document.querySelectorAll('.btn')
// btn[0].addEventListener("click",function (){
//     btn[0].style.backgroundColor = "red"
// })

// let count = 0
// let btn = document.querySelectorAll('.btn')
// btn[0].addEventListener("click",function (){
//     if(count == 0){
//         btn[0].style.backgroundColor = "red"
//         count++
//     }
//     else{
//         btn[0].style.backgroundColor = "transparent"
//         count = 0
//     }
// })



// let btn = document.querySelectorAll('.btn')
// btn[0].addEventListener("click",function (){
    //  btn[0].style.backgroundColor = btn[0].style.backgroundColor == "red"? "transparent": "red";
    
    // //? Same Things 
    // let color = btn[0].style.backgroundColor == "red"?"transparent":"red";
    // btn[0].style.backgroundColor = color
    // console.log(color)

    // btn[0].style.backgroundColor == "red"? btn[0].style.backgroundColor = "transparent":btn[0].style.backgroundColor = "red"
// })



// task : create a button when you click h1 heading create a display i the browsers 
// let btn = document.querySelectorAll(".add")
// let container = document.querySelector(".conatiner")
// btn[0].addEventListener("dblclick", function(){
//     let box = document.createElement("h1")
//     box.textContent = "Heading"
//     container.append(box)
// })




// ? HTML Collections and Nodelist 
// LiveCollectons 


// button 
// let getbtn = document.getElementsByClassName("btn1")
// let quarybtn = document.querySelectorAll(".btn2")

// let get = document.getElementsByClassName("get")
// let quary = document.querySelector(".quary")

// getbtn[0].addEventListener("click",function(){
//     let div = document.createElement("div")
//     div.className = "get"
//     get[0].append(div)
// })

// quarybtn[0].addEventListener("click",function(){
//     let div = document.createElement("div")
//     div.className = "quary"
//     quary.append(div)
//     console.log(quary)
// })

// HTML Collection Provided Live Collection with the same ClassName 
// NodeList Not Provided the Live Updation 




// let search = document.querySelector(".search")

// function searching(e){
//     console.log("functions start")
//     console.log(e.target.value)
// }
// search.addEventListener("input",searching)


// search.addEventListener("input",(event)=>{
//     searching(event)
// })



// Input Box type kar browser pa text show karna 
// let search = document.querySelector(".search")
// let body = document.querySelector("body")
// let text = document.createElement("span")
// body.append(text)
// search.addEventListener("input",(e)=>{
//     text.textContent = e.target.value
// })


// Character Counting (Word Counting)
// let search = document.querySelector(".search")
// let body = document.querySelector("body")
// let text = document.createElement("span")
// body.append(text)
// search.addEventListener("input",(e)=>{
//     let str = e.target.value
//     text.textContent = str.length
// })



// Word Counting
// let search = document.querySelector(".search")
// let span = document.querySelector("span")
// search.addEventListener("input",(e)=>{
//     let count = 0 
//     let value = e.target.value.trim()
//     let arr = value.split(" ")
//     console.log(arr)
//     arr.forEach(ele => {
//         if(ele != ''){
//             count++
//         }
//     });
//     span.textContent = count
// })



// hidden password 


let search = document.querySelector(".search")
let show = document.querySelector("button");
show.addEventListener("click", (e) => {
    e.preventDefault()
  if (search.type == "text") {
    search.type = "password";
    show.textContent = "Show"
  }else{
    search.type = "text"
    show.textContent = "Hidden"

  }
});
