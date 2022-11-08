var body = document.body
var tipoDato = ['Nombre: ', 'Apellido paterno: ', 'Apellido materno: ', 'Rut:', 'Fono: '];
label = document.createElement('label')
label.innerHTML = '<b>Input de texto</b>'

body.appendChild(label)
br = document.createElement('br')
body.appendChild(br)

for(i = 0 ; i < 5 ; i++) {
    var inputText = document.createElement('input')
    inputText.type = 'text'
    inputText.value = prompt("Ingrese "+ tipoDato[i] )
    body.appendChild(inputText)
    br = document.createElement('br')
    body.appendChild(br)
};
label = document.createElement('label')
label.innerHTML = '<b>Input de Numero</b>'
body.appendChild(label)
br = document.createElement('br')
body.appendChild(br)

for(i = 0 ; i < 10 ; i++) {
    var inputNumber = document.createElement('input')
    inputNumber.type = "number"
    inputNumber.value = Math.ceil(Math.random() * 100000)
    body.appendChild(inputNumber)
    br = document.createElement('br')
    body.appendChild(br)
};




// var inputText = document.createElement("input")
// inputText.type = "password"



// body.appendChild(inputText)
// console.log(body);