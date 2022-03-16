function setValuesDisplay(id) {
    let expression = document.getElementById(id).innerText;
    let valueDisplay = document.getElementById("inputCalc").value;
    if (id == "btnEq") {
        document.getElementById("inputCalc").value;
        document.getElementById("inputCalc").value = eval(valueDisplay);
    } else {
        document.getElementById(id).innerText;
        document.getElementById("inputCalc").value;
        document.getElementById("inputCalc").value = valueDisplay + expression;
    }
}

function clearInput() {
    document.getElementById("inputCalc").value = "";
}