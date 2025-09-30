function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiplication(number1, number2){
  return number1 * number2;
}

function division(number1, number2){
  return number1 / number2;
}

//Add Button Event Listener
document.getElementById("add").addEventListener("click", function() {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0;
  const result = add(number1, number2);

  document.getElementById('calculation-result').textContent = result;

})

//Subtract Button Event Listener
document.getElementById("subtract").addEventListener("click", function() {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = subtract(number1, number2);

  document.getElementById("calculation-result").textContent = result;
})

//Multiplicaton Button Event Listener
document.getElementById("multiply").addEventListener("click", function() {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = multiplication(number1, number2);

  document.getElementById("calculation-result").textContent = result;
})

//Division Button Event Listener
document.getElementById("divide").addEventListener("click", function() {
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = division(number1, number2);

  document.getElementById("calculation-result").textContent = result;
})