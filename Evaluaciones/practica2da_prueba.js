var body = document.body
var input = document.createElement('input')
var button = document.createElement('button')


// for(i=0;i==7;i++) {
//     br = document.createElement('br')
//     body.appendChild(br);
// }

//Repartiendo las manos a los Jugadores

label = document.createElement('label')
label.innerHTML = '<h2>Jugador 1</h>'
body.appendChild(label)
let j1 = []
for(i = 0; i < 2; i++){
    inputNumber = document.createElement('input')
    inputNumber.value = Math.ceil(Math.random()*13)
    j1 = j1.concat(inputNumber.value)
    inputNumber.style.backgroundPosition = 'right'
    inputNumber.style.fontSize = '22px'
    inputNumber.style.width = "50"
    inputNumber.style.height = "80"
    inputNumber.style.margin = "6 6 6 6"
    body.appendChild(inputNumber)
}

label = document.createElement('label')
label.innerHTML = '<h2>Jugador 2</h2>'
body.appendChild(label)
for(i = 0; i < 2; i++){
    inputNumber = document.createElement('input')
    inputNumber.value = Math.ceil(Math.random()*13)
    inputNumber.style.backgroundPosition = 'right'
    inputNumber.style.fontSize = '22px'
    inputNumber.style.width = "50"
    inputNumber.style.height = "80"
    inputNumber.style.margin = "6 6 6 6"
    body.appendChild(inputNumber)
}

br = document.createElement('br')
body.appendChild(br)
button.innerText = "Repartir Jugadores"
body.appendChild(button)

//Juego de la mesa

label = document.createElement('label')
label.innerHTML = '<h2>M E S A</h2>'
body.appendChild(label)

for(i = 0; i < 5; i++){
    inputNumber = document.createElement('input')
    inputNumber.value = Math.ceil(Math.random()*13)
    inputNumber.style.backgroundPosition = 'right'
    inputNumber.style.fontSize = '22px'
    inputNumber.style.width = "50"
    inputNumber.style.height = "80"
    inputNumber.style.margin = "6 6 6 6"
    body.appendChild(inputNumber)
    if(i==2){
        button = document.createElement('button')
        button.innerText = 'Flop'
        body.appendChild(button)
    }else if(i==3){
        button = document.createElement('button')
        button.innerText = 'Turn'
        body.appendChild(button)
    }else if(i==4){
        button = document.createElement('button')
        button.innerText = 'River'
        body.appendChild(button)
    }
    
}

