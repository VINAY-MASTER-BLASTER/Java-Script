let red 

let circle = document.querySelectorAll(".circle")
let box = document.querySelectorAll(".box")

box[0].addEventListener("click",()=>{
    if(circle[0].style.backgroundColor == "red"){
        circle[0].style.backgroundColor = "#ee6b6e"
    }else{
        circle[0].style.backgroundColor = "red"
    }
})


box[1].addEventListener("click",()=>{
    if(circle[1].style.backgroundColor == "green"){
        circle[1].style.backgroundColor = "#cbffd7"
    }else{
        circle[1].style.backgroundColor = "green"
    }
})

box[2].addEventListener("click",()=>{
    if(circle[2].style.backgroundColor == "blue"){
        circle[2].style.backgroundColor = "#c2d0ff"
    }else{
        circle[2].style.backgroundColor = "blue"
    }
})


