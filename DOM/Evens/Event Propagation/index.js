// let div = document.querySelectorAll("div")
// console.log(div)
// div[0].addEventListener("click",()=>{
//     console.log("One")
// },true)
// div[1].addEventListener("click",()=>{
//     console.log("Two")
// })
// div[2].addEventListener("click",()=>{
//     console.log("Three")
// })


// div.forEach((ele)=>{
//     ele.addEventListener("click",()=>{
//         console.log("click")
//     })
// })


// Stop Watch 






// let li = document.querySelectorAll("li")
// li.forEach(element => {
//     element.addEventListener("click",(e)=>{
        // console.log(element.textContent)
        // console.log(e.target.textContent)
//     })
// });


// Event Delgations 

// Event delegation is a JavaScript technique that improves performance by attaching a single event listener to a parent element rather than multiple listeners to individual child elements. By leveraging event bubbling, the parent handles events from current and future child elements, reducing memory usage and simplifying code

let ul = document.querySelectorAll("ul")
ul[0].addEventListener("click",(e)=>{
    // condiation for while spaces 
    if(e.target.tagName === 'LI'){
        console.log(e.target.textContent)
    }else{
        console.log("click while spaces")
    }
})


// let container = document.querySelector(".container")
// container.addEventListener("click",(e)=>{
    // i make this jugad condition 
//     if(e.target.tagName === "H1" || e.target.tagName === "H2" || e.target.tagName === "P" || e.target.tagName === "HR" || e.target.tagName === "U" || e.target.tagName === "H6" ){
//         console.log(e.target.tagName)
//     }else{
//         console.log("White space")
//     }
// })


// container.addEventListener("click", (e) => {
//     if (e.target.classList.contains("my-class")) {
//         console.log(e.target.tagName)
//     }
// })