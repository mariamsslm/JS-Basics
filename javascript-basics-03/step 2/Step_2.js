let links= document.querySelectorAll("a")
let div= document.querySelector("#texte")

links.forEach(link =>{
    link.addEventListener("click" , (e)=>{
        if (e.target.id === "hide"){
            div.style.display = "none"
        }
        if (e.target.id === "show"){
            div.style.display = "block"}

    })
})