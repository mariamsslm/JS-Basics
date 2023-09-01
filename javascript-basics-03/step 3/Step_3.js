let color = document.querySelectorAll('.color');
let text = document.querySelector('#text');

for (let i = 0; i < color.length; i++) {
    color[i].addEventListener("click", function(event) {
        if (event.target.classList.contains("green"))
            text.style.color = "green";
        else if (event.target.classList.contains("red"))
            text.style.color = "red";
        else if (event.target.classList.contains("blue"))
            text.style.color = "blue";
    });
}