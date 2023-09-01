const colorOptions = document.querySelectorAll('.color-option');
const textElement = document.getElementById('text');

// Add click event listeners to each color option
colorOptions.forEach(option => {
    option.addEventListener('click', function () {
        // Get the color from the data-color attribute
        const color = this.getAttribute('data-color');
        
        // Change the text color to the selected color
        textElement.style.color = color;
    });
});