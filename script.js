const calcIMC = () => {

    const result = document.querySelector("#result")
    const height = document.querySelector("#height")
    const weight = document.querySelector("#weight")

    // se o valor do peso e da altura forem diferentes de vazio// 
    if (height.value !== "" && weight.value !== "") {
        // variavel imc recebe ( valor do peso dividido pela altura * altura)//
        //toFixed(2) limita quantidade de casas do numero do resultado//
        const imc = (weight.value / (height.value/100) **2).toFixed(2);

        let classification = ""
        // condição IF para atribuir a relação para cada nivel de imc //
        if (imc < 18.5) {
            classification = " Abaixo do peso"
        } else if (imc < 25) {
            classification = " Peso Normal"
        } else if (imc < 30) {
            classification = " Acima do Peso"
        } else if (imc < 35) {
            classification = " Obesidade Grau I"
        } else if (imc < 41) {
            classification = " Obesidade Grau II"
        } else {
            classification = " Obesidade Grau III"
        }

        result.innerHTML = ("IMC: " + imc + classification)

    } else {
        result.innerHTML = "Preencha os campos!"
    }
}
