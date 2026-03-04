let input = document.querySelector("input")
let button = document.querySelector("button")
let img = document.querySelector("img")


function qr(name){
    let api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${name}`
    return api
}
button.addEventListener("click", () => {
     let name = input.value.trim().replace(/\s+/g, ' ')
     console.log(name)
    //  img.src = qr(name)

});