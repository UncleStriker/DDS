//debe crear 10 inputs de tipo numerico(con id)
//debe crear un boton
//el boton debe gatillar una funcion de rellene todos los inputs con 
//valores random entre 1 y 100
//debe crear un label que indique el mayor numero generado

function generarID(){
    todosLosInputs.forEach(input => {
        input.value = Math.ceil(Math.random() * 100);
    })
}

var todosLosInputs = []

var body =  document.body
var todosLosInputs = document
for(i=0; i<10; i++) {
    input =  document.createElement("input")
    input.id = `myInput${i}`
    br = document.createElement("br")
    body.appendChild(input)
    body.appendChild(br)
}

button = document.createElement('button')
id = document.createElement('id')
button.innerText = 'Generar ID'
button.onclick = () => generarID()
br = document.createElement("br")
body.appendChild(br)
body.appendChild(button)

