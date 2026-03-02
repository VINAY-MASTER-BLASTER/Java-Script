let api =   'https://randomuser.me/api/'
let images = document.querySelector("img")
let heading = document.querySelector("h1")
let para = document.querySelector("p")

async function getuser(API){
    try{
        let data = await fetch(API)
        let fdata = await data.json()
        console.log(fdata)
        return {
            name : `${fdata.results[0].name.title} ${fdata.results[0].name.first} ${fdata.results[0].name.last}`,
            email : `${fdata.results[0].email}`,
            img : `${fdata.results[0].picture.medium}`
        }
    }catch(error){
        throw new Error("error faceing feaching data")
    }
}
getuser(api).then((data)=>{
    heading.textContent =`${data.name}`
    para.textContent = `${data.email}`
    images.src = data.img
}).catch((err)=>{
    console.log(err)
})