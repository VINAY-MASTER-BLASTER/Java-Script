//! getElement 

// ? id Accese 
// let box = document.getElementById("container")
// console.log(box)

// ? Class Accese 
// let box = document.getElementsByClassName("box")
// console.log(box[1])
//  HTML Collectons Arrays index access 

// ? tag
// let box = document.getElementsByTagName("div")
// console.log(box)
//  HTML Collectons Arrays index access 


// ! quary selector 
//? quary selector  - only one sigle element select
//? quary selector all - select all element in the doucmets 
//? id class tag 

// let box = document.querySelector("#container")
// console.log(box)

// let box1 = document.querySelectorAll(".box")
// console.log(box1[1])


// ? Interview Question
// for(var i = 0; i<=5; i++){
//     setTimeout(() => {
//         console.log(i)
//     },i*1000
// );}



// HTML collection 
// working - for loops, for of 
// Not Working - forEach 


// let box = document.getElementsByClassName('box')
// for(let i = 0; i<box.length; i++){
//     console.log(box[i])
// }


// convert in Array
// let str = "hello"
// let arr = Array.from(str)
// console.log(arr)


// let arr = Array.from(box)
// arr.forEach(element => {
//     console.log(element)
// });

// In NodeList every loops is working 



// Dom tree 




//! Modifications 
let box = document.getElementsByClassName("box")


//? textContext vs innertext 
// textContext - shows hidden text 
// innerText  - not shows the hidden text 
// text context if content exist change else add similar like Objects 

// box.textContent = "vinay"
// console.log(box[0].innerText)
// console.log(box[0].textContent)

//? innerHTML
// Add the element 
// console.log(box[0].innerHTML = "<h1> hello</h1")



// //! Attribute 
// let images = document.querySelectorAll("img")
// let scoure = 'Photo.jpg'

// images[0].src = scoure
// console.log(images)


// let anchor = document.querySelector("a")
// anchor.textContent = "Youtube"
// anchor.href = "https://www.youtube.com/"
// anchor.target = "_blank"


// add css 
// let para = document.querySelector(".para")
// para.style.backgroundColor= "red"

// para.classList.add("active") // sustain the older class
// para.className = "active"    // one and only claas



// createElement

// let box1 = document.createElement("h1")
// box1.textContent = "Hello Developer"
// box1.style.backgroundColor = "red"
// let container = document.querySelector(".containers")
// container.append(box1)

// append - multiple Element 
// appendChild - single Element 

// let box2 = document.createElement("h1")
// box2.textContent = "Hello Front-End Developer"
// container.append(box1,box2)



// Questions by 
// let container = document.querySelector(".contaiers")
// let para = document.querySelector(".para")
// let str = para.textContent
// let arr = Array.from(str)

// for(let i = 0; i<arr.length; i++){
//     let sp = document.createElement("span")
//     sp.textContent = arr[i]
//     container.append(sp)
// }



let style = document.createElement("style")
style.textContent = `.btn{
background-Color : red;
font-size : 50px;
border : 2px solid green;
color : white;
}`

let head = document.querySelector("head")
head.append(style)