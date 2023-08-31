document.addEventListener("DOMContentLoaded",()=>{ 
    let shoe_size = prompt("entre your shoe size");
    let year = prompt("entre your age");
    let result = (((shoe_size * 2) + 5) * 50) - year + 1766;
    

    alert(result);

})
