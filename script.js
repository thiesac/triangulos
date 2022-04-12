function enviarDados() {
    let numero1 = document.getElementById("number1").value;
    let numero2 = document.getElementById("number2").value;
    let numero3 = document.getElementById("number3").value;

    if (numero1 == numero2 && numero2 == numero3) {
        window.alert("Esse triângulo é Equilátero.");
    } else if (numero1 == numero2 && numero2 != numero3) {
        window.alert("Esse triângulo é Isóceles.")
    } else if (numero1 == numero3 && numero3 != numero2) {
        window.alert("Esse triângulo é Isóceles.")
    } else if (numero2 == numero3 && numero3 != numero1) {
        window.alert("Esse triângulo é Isóceles.")
    } else {
        window.alert("Esse triângulo é Escaleno.")
    }
    }
