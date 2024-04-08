function convertToDecimal() {
    var binary = document.getElementById("binaryInput").value;
    if (binary.match(/^[0-1]+$/)) {
        var decimal = parseInt(binary, 2);
        document.getElementById("decimalOutput").innerHTML = "Desítkové číslo: " + decimal;
    } else {
        document.getElementById("decimalOutput").innerHTML = "Prosím zadejte platné binární číslo.";
    }
}

function convertToBinary() {
    var decimal = document.getElementById("decimalInput").value;
    if (decimal.match(/^[0-9]+$/)) {
        var binary = Number(decimal).toString(2);
        document.getElementById("binaryOutput").innerHTML = "Binární číslo: " + binary;
    } else {
        document.getElementById("binaryOutput").innerHTML = "Prosím zadejte platné desítkové číslo.";
    }
}