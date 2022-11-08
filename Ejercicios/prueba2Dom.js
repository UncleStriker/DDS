var body = document.body


label = document.createElement('label')
label.innerHTML = '<h2>Jugador 1</h2>'
body.appendChild(label)
var j1 = []
var j2 = []
for(i = 0; i < 5; i++){
    
    inputNumber = document.createElement('input')
    j1.push(parseInt(inputNumber.value = Math.ceil(Math.random()*13)))
    inputNumber.style.backgroundPosition = 'right'
    inputNumber.style.fontSize = '22px'
    inputNumber.style.width = "50"
    inputNumber.style.height = "80"
    inputNumber.style.margin = "6 6 6 6"
    body.appendChild(inputNumber)   
    j1.sort()
}

//mano del jugador 1 || COMPROBACION
//j1[0], j1[1], j1[2], j1[3], j1[4]


if(j1[0]==j1[1] || j1[3]==j1[4]){
    br = document.createElement('br')
    body.appendChild(br)
    label = document.createElement("label")
    if(j1[0]==j1[1]){
        label.innerHTML = 'Mano del jugador 1: PAR DE '+ (j1[0])
        body.appendChild(label)
    }else if(j1[3]==j1[4]){
        label.innerHTML = 'Mano del jugador 1: PAR DE '+ (j1[4])
        body.appendChild(label)
    }
}else if(j1[0]==j1[1] || j1[2]==j1[3] && j1[1]==j1[2] || j1[3]==j1[4]){
    br = document.createElement('br')
    body.appendChild(br)
    label = document.createElement("label")
    label.innerHTML = 'Mano del jugador 1: DOBLE PAR'
    body.appendChild(label)
}else if(j1[0]==j1[1]==j1[2] || j1[2]==j1[3]==j1[4]){
    br = document.createElement('br')
    body.appendChild(br)
    label = document.createElement("label")
    label.innerHTML = 'Mano del jugador 1: TRIO'
    body.appendChild(label)
}else if(j1[0]==j1[1] && j1[2]==j1[3]==j1[4] || j1[0]==j1[1]==j1[2] && j1[3]==j1[4] ){
    br = document.createElement('br')
    body.appendChild(br)
    label = document.createElement("label")
    label.innerHTML = 'Mano del jugador 1: FULL'
    body.appendChild(label)
}


label = document.createElement('label')
label.innerHTML = '<h2>Jugador 2</h2>'
body.appendChild(label)
for(i = 0; i < 5; i++){
    inputNumber = document.createElement('input')
    j2.push(parseInt(inputNumber.value = Math.ceil(Math.random()*13)))
    inputNumber.style.backgroundPosition = 'right'
    inputNumber.style.fontSize = '22px'
    inputNumber.style.width = "50"
    inputNumber.style.height = "80"
    inputNumber.style.margin = "6 6 6 6"
    body.appendChild(inputNumber)
    j2.sort()
}
if(j2[0]==j2[1] || j2[3]==j2[4]){
    br = document.createElement('br')
    body.appendChild(br)
    label = document.createElement("label")
    if(j2[0]==j2[1]){
        label.innerHTML = 'Mano del jugador 2: PAR DE '+ (j2[0])
        body.appendChild(label)
    }else if(j2[3]==j2[4]){
        label.innerHTML = 'Mano del jugador 2: PAR DE '+ (j2[4])
        body.appendChild(label)
    }
}else if(j2[0]==j2[1] || j2[2]==j2[3] && j2[1]==j2[2] || j2[3]==j2[4]){
    br = document.createElement('br')
    body.appendChild(br)
    label.innerHTML = 'Mano del jugador 2: DOBLE PAR'
    body.appendChild(label)
}else if(j2[0]==j2[1]==j2[2] || j2[2]==j2[3]==j2[4]){
    br = document.createElement('br')
    body.appendChild(br)
    label = document.createElement("label")
    label.innerHTML = 'Mano del jugador 2: TRIO'
    body.appendChild(label)
}else if(j2[0]==j2[1] && j2[2]==j2[3]==j2[4] || j2[0]==j2[1]==j2[2] && j2[3]==j2[4] ){
    br = document.createElement('br')
    body.appendChild(br)
    label = document.createElement("label")
    label.innerHTML = 'Mano del jugador 2: FULL'
    body.appendChild(label)
}

/**
 * -	Debe generar un botón que sea capaz de distinguir cuál jugador ha ganado 
 *      según la siguiente jerarquía(desde la más baja hasta la más alta):
            o	Todas las cartas distintas
            o	Un par
            o	Dos pares
            o	Un trío
            o	Un full (un trío mas un par)
            o	Póker (4 cartas iguales)
            o	Escala real ( 5 cartas consecutivas)

 */
br = document.createElement('br')
body.appendChild(br)
br = document.createElement('br')
body.appendChild(br)
button = document.createElement('button')
button.innerHTML = 'Repartir cartas'
body.appendChild(button)
button = document.createElement("button")
button.onclick = () => ganador()
button.innerHTML = 'Ver ganador'
body.appendChild(button)



