let button = document.querySelector("button");
let input1 = document.querySelector("#password");
let input2 = document.querySelector("#confirmation");
button.addEventListener("click" ,function(){
    if(input1.value !== input2.value ){
        input1.style.borderColor = "red";
        input2.style.borderColor = "red";
    }
    else{
        input1.style.borderColor = "black";
        input2.style.borderColor = "black";

    }
})

