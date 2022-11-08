//debe crear 10 inputs de tipo numerico (con id)
//debe crear un botón
//el boton debe gatillar una funcion que rellene todos los input con 
//valores random entre 1 y 100
//debe crear un label que indique el mayor número generado.

var body = document.body
var todosInputs = []
var mayor = 0

for(i = 0 ; i <= 9; i++){
    input = document.createElement('input')
    input.id = `myInput${i}`
    todosInputs.push(input)
    br = document.createElement('br')
    body.appendChild(input)
    body.appendChild(br)
    
}

boton = document.createElement('button')
boton.innerText = "Rellenar Inputs"
boton.onclick = () => rellenar()
br = document.createElement('br')
body.appendChild(br)
body.appendChild(boton)
br = document.createElement('br')
body.appendChild(br)
label = document.createElement('label')
label.innerText = "El numero mayor es: "
body.appendChild(label)
rellenar = () => {
    if(mayor != 0){
        mayor = 0
    }
    label.innerText = "El numero mayor es: "
    todosInputs.forEach(input => {
        valor =Math.ceil(Math.random()*100)
        if (valor > mayor){
            mayor = valor
        }
        input.value =  valor     
    });
    label.innerText += mayor;

}