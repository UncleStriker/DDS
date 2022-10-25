var body = document.body
var divGato = document.createElement('divGato')
body.appendChild(divGato)
var inputs = []
dibujar = () =>{
    inputs = []
    divGato.innerHTML = ''
    for( i = 0; i <9; i++){
        var input = document.createElement('input')
        input.id = `input${i}`
        input.style.width = "30"
        selector = Math.ceil(Math.random()*10)
        var equises = 0
        if(selector%2 == 0 && equises<5){
            gato = "X"
            equises++
        }else{
            gato = "O"
        }
        input.value = gato
        if (i%3 == 0){
            br = document.createElement('br')
            divGato.append(br)
        } 
        inputs.push(input)
        divGato.appendChild(input)

    }

}

var br = document.createElement('br') 
body.append(br)
var button = document.createElement('button')
button.onclick = () => dibujar()
button.innerHTML = "Dibujar"
body.appendChild(button)

var button = document.createElement('button')
button.onclick = () => calcular()
button.innerText = "Calcular resultados"
body.appendChild(button)

calcular = () =>{
    divResultados.innerHTML = ''
    console.log("Calculando ...")
    if((input[0].value == input[1].value) && (input[0].value == input[2].value)){
        var label = document.createElement('label')
        label.innerHTML = 'Se produjo un #Gato# en la lista numero 1'
        divResultados.appendChild(label)
        var br = document.createElement('br')
    }
}