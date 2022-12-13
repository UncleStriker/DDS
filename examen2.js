// o	La institución “Polla Chilena de Beneficencia” busca modernizar sus sistemas de realizar juegos online, 
//       y por tanto ha solicitado al CFT Región de Valparaíso que realice un prototipo funcional para que se pueda simular
//      jugadas y luego obtener los resultados de los intentos jugados, para lo que se debe considerar
// o	1.- Un formulario con un input que permita almacenar un nombre autogenerado 
// (Ej. Jugador 1)
// o	Considerar 6 inputs más, para almacenar los 6 números que jugará cada usuario. 
//     Éstos deben generarse de forma aleatoria, entre 1 y 42, considerando que no puede haber 
//     repeticiones.
// o	Cada jugada debe ser almacenada en un objeto como el que se muestra a continuación:

// {
//     jugador: "jugador_1",
//     n1: 6
//     n2: 12
//     n3:18
//     n4:21
//     n5:27
//     n6:36
// }

// o	Deberá entregar la opción de terminar la ronda de jugadores con un botón 
// “terminar” y que además realice el sorteo. Debe considerar, al igual que en cada jugada, 
// que los números deben generarse de forma aleatoria.
// o	Como resolución de la ronda de juegos, debe informar :
//     Cantidad de jugadores con terna
// o	Cantidad de jugadores con cuaterna
// o	Cantidad de jugadores con quina
// o	Cantidad de jugadores con 6 números categoría Loto.

function Jugador(jugador, n1, n2, n3, n4, n5, n6){
    this.jugador =jugador;
    this.n1 = n1;
    this.n2 = n2;
    this.n3 = n3;
    this.n4 = n4;
    this.n5 = n5;
    this.n6 = n6;
}


body = document.body;

table = document.createElement('table');

var jugadores = []
i=1
const agregarJugador = () => {
    // var jugador = document.getElementById('jugador').value
    // var n1 = document.getElementById('n1').value
    // var n2 = document.getElementById('n2').value
    // var n3 = document.getElementById('n3').value
    // var n4 = document.getElementById('n4').value
    // var n5 = document.getElementById('n5').value
    // var n6 = document.getElementById('n6').value
    
    // jugadores.push(
    //     new Jugador(jugador, n1, n2, n3, n4, n5, n6)
    // )
    tr = document.createElement('tr')

    td = document.createElement('td')
    td.innerHTML = document.getElementById('nombre').value = 'Jugador '+i
    td.id = 'jugador'
    td.style.border = '2px solid'
    td.style.padding = '8px'
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerHTML = Math.ceil(Math.random()*42)
    td.id = 'n1'
    td.style.border = '1px solid'
    td.style.padding = '8px'
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = Math.ceil(Math.random()*42)
    td.id = 'n2'
    td.style.border = '1px solid'
    td.style.padding = '8px'
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = Math.ceil(Math.random()*42)
    td.id = 'n3'
    td.style.border = '1px solid'
    td.style.padding = '8px'
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = Math.ceil(Math.random()*42)
    td.id = 'n4'
    td.style.border = '1px solid'
    td.style.padding = '8px'
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = Math.ceil(Math.random()*42)
    td.id = 'n5'
    td.style.border = '1px solid'
    td.style.padding = '8px'
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = Math.ceil(Math.random()*42)
    td.id = 'n6'
    td.style.border = '1px solid'
    td.style.padding = '8px'
    tr.appendChild(td)

    i++

    table.appendChild(tr)

    // document.getElementById('jugador').value = ''
    document.getElementById('n1').value = ''
    document.getElementById('n2').value = ''
    document.getElementById('n3').value = ''
    document.getElementById('n4').value = ''
    document.getElementById('n5').value = ''
    document.getElementById('n6').value = ''


   
    body.appendChild(table)
    
}

const generarJugador = () => {

}

tr = document.createElement('tr')
var inNombre = document.createElement('input')
inNombre.placeholder = 'Nombre del jugador'
inNombre.id = 'nombre'
tr.appendChild(inNombre)

// document.getElementById('nombre').value = ''
// document.getElementById('n1').value = ''
// document.getElementById('n2').value = ''
// document.getElementById('n3').value = ''
// document.getElementById('n4').value = ''
// document.getElementById('n5').value = ''
// document.getElementById('n6').value = ''


// td = document.createElement('td')
// td.innerHTML = Math.ceil(Math.random()*42)
// td.id = 'n1'
// td.style.border = '1px solid'
// td.style.padding = '8px'
// tr.appendChild(td)
// td = document.createElement('td')
// td.innerHTML = Math.ceil(Math.random()*42)
// td.id = 'n2'
// td.style.border = '1px solid'
// td.style.padding = '8px'
// tr.appendChild(td)
// td = document.createElement('td')
// td.innerHTML = Math.ceil(Math.random()*42)
// td.id = 'n3'
// td.style.border = '1px solid'
// td.style.padding = '8px'
// tr.appendChild(td)
// td = document.createElement('td')
// td.innerHTML = Math.ceil(Math.random()*42)
// td.id = 'n4'
// td.style.border = '1px solid'
// td.style.padding = '8px'
// tr.appendChild(td)
// td = document.createElement('td')
// td.innerHTML = Math.ceil(Math.random()*42)
// td.id = 'n5'
// td.style.border = '1px solid'
// td.style.padding = '8px'
// tr.appendChild(td)
// td = document.createElement('td')
// td.innerHTML = Math.ceil(Math.random()*42)
// td.id = 'n6'
// td.style.border = '1px solid'
// td.style.padding = '8px'
// tr.appendChild(td)
boton = document.createElement('button')
boton.innerHTML = 'Agregar'
boton.style.border = '1px solid'
boton.style.padding = '8px'
boton.onclick = () => agregarJugador()
tr.appendChild(boton)
boton = document.createElement('button')
boton.innerHTML = 'Generar'
boton.style.border = '1px solid'
boton.style.padding = '8px'
boton.onclick = () => generarJugador()
tr.appendChild(boton)
body.appendChild(tr)



table.appendChild(tr)

body.appendChild(table)




