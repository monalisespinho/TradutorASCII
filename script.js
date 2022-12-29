const inputs = document.querySelector(".inputs")
const respOne = document.querySelector("#portuguesParaASCII")
const respTwo = document.querySelector("#ASCIIParaPortugues")
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")



inputs.addEventListener("input", (e) => {
    let inputId = e.target.id
    if (inputId === "portuguesParaASCII") {
        let input = e.target.value
        let output = ""
        for (let i = 0; i < input.length; i++) {
            output += input.charCodeAt(i) + " "
        }
        respTwo.value = output
    } else if (inputId === "ASCIIParaPortugues") {
        let input = e.target.value
        let output = ""
        let array = input.split(" ")
        for (let i = 0; i < array.length; i++) {
            output += String.fromCharCode(array[i])
        }
        respOne.value = output
    }
})

function copiarTexto(e) {
  var textoCopiado = e;
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999); /* Para mobile */
  document.execCommand("copy");
}
btn1.addEventListener("click", copiarTexto(respOne));
btn2.addEventListener("click", copiarTexto(respTwo));
