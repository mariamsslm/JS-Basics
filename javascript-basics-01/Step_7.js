
function total() {
    var shoe_size = parseInt(document.getElementById("shoe_size").value);
    var year = parseInt(document.getElementById("year").value);
    
    var result = (((shoe_size * 2) + 5) * 50) - year + 1766;
    document.getElementById("validate").value = result;

    alert(result);

}
