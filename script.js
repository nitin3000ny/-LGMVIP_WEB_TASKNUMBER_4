let resultElement = document.getElementById("result");
let result = "";

function appendCharacter(character) {
    result += character;
    resultElement.value = result;
}

function calculateResult() {
    try {
        result = eval(result);
        resultElement.value = result;
      resultElement.style.color="green";
    } catch (error) {
        resultElement.value = "Error";
      resultElement.style.color="red";
    }
}

function clearResult() {
    result = "";
    resultElement.value = result;
  
}

function deleteLastCharacter() {
    result = result.slice(0, -1);
    resultElement.value = result;
}
