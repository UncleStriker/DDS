// traspasar = (value) =>{
//     console.log(value);
//     document.getElementById("mi_label").innerText = value
// }


// body = document.body
// var input1 = document.createElement("input")
// var input2 = document.createElement("input")
// var button = document.createElement("boton")

// button.innerText = "Calcular suma"
// button.onclick = () => calcularSuma()

// body.appendChild(input1)   
// body.appendChild(input2)   
// body.appendChild(button)

// function calcularSuma() {
//     var a = parseInt(input1.value)
//     var b = parseInt(input2.value)
//     alert(a+b)

// }

traspasar =  (value) => {
    console.log(value)
    document.getElementById("mi_label").innerText = value
}
body = document.body
var input1 = document.createElement('input')
var input2 = document.createElement('input')
var button = document.createElement('button')
button.innerText= "Calcular Suma"
button.onclick = () => calcularSuma()
body.appendChild(input1)
body.appendChild(input2)
body.appendChild(button)

function calcularSuma(){
    var a = parseInt(input1.value)
    var b = parseInt(input2.value)
    alert (a+b)
}