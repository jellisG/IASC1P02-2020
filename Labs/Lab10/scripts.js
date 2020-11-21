function add() {
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    document.getElementById('output').innerHTML = n1 + n2;
}

function subtract() {
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    document.getElementById('output').innerHTML = n1 - n2;
}

function multiply() {
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    document.getElementById('output').innerHTML = n1 * n2;
}

function divide() {
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    document.getElementById('output').innerHTML = n1 / n2;
}