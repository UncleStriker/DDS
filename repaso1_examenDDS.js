function Equipo(nombre, ciudad, ganados, empatados, perdidos){
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.partidosGanados = ganados;
    this.partidosEmpatados = empatados;
    this.partidosPerdidos = perdidos;
    this.puntaje = (this.partidosGanados*3)+(this.partidosEmpatados)
}

body = document.body 

table = document.createElement('table')
thead = document.createElement('thead')
tr = document.createElement('tr')

th = document.createElement('th')
th.innerHTML = 'Equipo'
th.style.border = '1px solid'
tr.appendChild(th)

th = document.createElement('th')
th.innerHTML = 'Ciudad'
th.style.border = '1px solid'
tr.appendChild(th)

th = document.createElement('th')
th.innerHTML = 'P. Jugados'
th.style.border = '1px solid'
tr.appendChild(th)

th = document.createElement('th')
th.innerHTML = 'P. Ganados'
th.style.border = '1px solid'
tr.appendChild(th)

th = document.createElement('th')
th.innerHTML = 'P. Empatados'
th.style.border = '1px solid'
tr.appendChild(th)

th = document.createElement('th')
th.innerHTML = 'P. Perdidos'
th.style.border = '1px solid'
tr.appendChild(th)

th = document.createElement('th')
th.innerHTML = 'Puntaje'
th.style.border = '1px solid'
tr.appendChild(th)
thead.appendChild(tr)

tr = document.createElement('tr')

var selec_equipo = document.createElement('select')
selec_equipo.id = 'equipos'
var opt1 = document.createElement('option')
opt1.value = 1
opt1.innerHTML = 'Santiago Wanderers'
var opt2 = document.createElement('option')
opt2.value = 2
opt2.innerHTML = 'Coquimbo Unido'
var opt3 = document.createElement('option')
opt3.value = 3
opt3.innerHTML = 'Universidad Católica'
var opt4 = document.createElement('option')
opt4.value = 4
opt4.innerHTML = 'Colo-Colo'
var opt5 = document.createElement('option')
opt5.value = 5
opt5.innerHTML = 'Barrabases'
var opt6 = document.createElement('option')
opt6.value = 6
opt6.innerHTML = 'Buenas Peras FC'
var opt7 = document.createElement('option')
opt7.value = 7
opt7.innerHTML = 'Everton'
var opt8 = document.createElement('option')
opt8.value = 8
opt8.innerHTML = 'Ñublense Unido'
var opt9 = document.createElement('option')
opt9.value = 9
opt9.innerHTML = 'Deportes Naval'
var opt10 = document.createElement('option')
opt10.value = 10
opt10.innerHTML = 'Niupi FC'

selec_equipo.appendChild(opt1)
selec_equipo.appendChild(opt2)
selec_equipo.appendChild(opt3)
selec_equipo.appendChild(opt4)
selec_equipo.appendChild(opt5)
selec_equipo.appendChild(opt6)
selec_equipo.appendChild(opt7)
selec_equipo.appendChild(opt8)
selec_equipo.appendChild(opt8)
selec_equipo.appendChild(opt10)
tr.appendChild(selec_equipo)
thead.appendChild(tr)


tr = document.createElement('tr')
input1 = document.createElement('input')
input1.placeholder = 'Ciudad del equipo'
input1.id = 'ciudad'
tr.appendChild(input1)
input2 = document.createElement('input')
input2.placeholder = 'PJ'
input2.id = 'PJ'
tr.appendChild(input2)
input3 = document.createElement('input')
input3.placeholder = 'PG'
input3.id = 'PG'
tr.appendChild(input3)
input4 = document.createElement('input')
input4.placeholder = 'PE'
input4.id = 'PE'
tr.appendChild(input4)
input5 = document.createElement('input')
input5.placeholder = 'PP'
input5.id = 'PP'
tr.appendChild(input5)
boton = document.createElement('button')
boton.innerHTML = 'Enviar'
boton.onclick = () => enviarEquipo()
tr.appendChild(boton)
thead.appendChild(tr)
table.appendChild(thead)


tbody = document.createElement('tbody')



table.appendChild(tbody)

body.appendChild(table)





