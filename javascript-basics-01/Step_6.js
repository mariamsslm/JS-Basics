function div() {
   var number1 = parseFloat(document.getElementById("first_number").value);
   var number2 = parseFloat(document.getElementById("second_number").value);
   var result = number1 /number2 ;

   document.getElementById("validate").value = result;
   
   alert(result);



}