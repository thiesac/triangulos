function enviarDados() {
    let numero1 = document.getElementById("number1").value;
    let numero2 = document.getElementById("number2").value;
    let numero3 = document.getElementById("number3").value;

    switch (numero1, numero2, numero3) {
        case (numero1 == numero2 && numero3):
            window.alert("Esse triângulo é Equilátero.")
            break;
        case (numero1 == numero2 != numero3):
            window.alert("Esse triângulo é Isóceles.")
            break;
    }
}