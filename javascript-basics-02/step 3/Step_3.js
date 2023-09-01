let input = document.querySelector("#name")
    const divElement = document.createElement('div');
    const formm= document.querySelector("form")
    formm.appendChild(divElement)
    divElement.textContent="result"
    console.log(formm)
    input.addEventListener('input', () => {
    divElement.innerText=input.value;
    });