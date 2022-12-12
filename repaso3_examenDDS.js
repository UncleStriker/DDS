function Equipo(nombre, ciudad, ganados, empatados, perdidos){
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.partidosGanados = ganados;
    this.partidosEmpatados = empatados;
    this.partidosPerdidos = perdidos;
    // this.puntaje = (this.partidosGanados*3)+(this.partidosEmpatados)
}

equipos = []
nomEquipo = ''
nomCiudad = ''
var puntaje = 0
const enviarEquipo = (nombre, ciudad, ganados, empatados, perdidos)=>{
    var nombre = document.getElementById('equipos').value
    var ciudad = document.getElementById('ciudades').value
    var ganados = document.getElementById('ganados').value
    var empatados = document.getElementById('empatados').value
    var perdidos = document.getElementById('perdidos').value


    equipos.push(
        new Equipo(nombre, ciudad, ganados, empatados, perdidos)
    )
    
    br = document.createElement('br')
    table.appendChild(br)
    tr = document.createElement('tr')  
    td = document.createElement('td')
    if(nombre == 1){
        nomEquipo = 'Wanderers'
    }
    if(nombre == 2){
        nomEquipo = 'Coquimbo'
    }
    if(nombre == 3){
        nomEquipo = 'Católica'
    }
    if(nombre == 4){
        nomEquipo = 'Colo-Colo'
    }
    if(nombre == 5){
        nomEquipo = 'Barrabases'
    }
    if(nombre == 6){
        nomEquipo = 'Buenas Peras'
    }
    if(nombre == 7){
        nomEquipo = 'Everton'
    }
    if(nombre == 8){
        nomEquipo = 'Ñublense'
    }
    if(nombre == 9){
        nomEquipo = 'Deportes Naval'
    }
    if(nombre == 10){
        nomEquipo = 'Niupi'
    }
    td.innerHTML = nomEquipo
    tr.appendChild(td)
    td = document.createElement('td')
    if(ciudad == 1){
        nomCiudad = 'Valparaiso'
    }
    if(ciudad == 2){
        nomCiudad = 'Coquimbo'
    }
    if(ciudad == 3){
        nomCiudad = 'Santiago'
    }
    if(ciudad == 4){
        nomCiudad = 'Frutillar'
    }
    if(ciudad == 5){
        nomCiudad = 'Viña del mar'
    }
    if(ciudad == 6){
        nomCiudad = 'Ñublense'
    }
    if(ciudad == 7){
        nomCiudad = 'Tokio'
    }
    td.innerHTML = nomCiudad
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerHTML = parseInt(ganados)
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = parseInt(empatados)
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = parseInt(perdidos)
    tr.appendChild(td)
    td = document.createElement('td')
    puntaje = (parseInt(ganados * 3) + parseInt(empatados))
    td.innerHTML = parseInt(puntaje)
    tr.appendChild(td)

    table.appendChild(tr)

    document.getElementById('equipos').value = ''
    document.getElementById('ciudades').value = ''
    document.getElementById('ganados').value = ''
    document.getElementById('empatados').value = ''
    document.getElementById('perdidos').value = ''
}


body = document.body 

table = document.createElement('table')

tr = document.createElement('tr')
br = document.createElement('br')
tr.appendChild(br)

//SELECT EQUIPO
var selec_equipo = document.createElement('select')
selec_equipo.id = 'equipos'
selec_equipo.style.margin = '3px'
tr.appendChild(selec_equipo)

//OPTIONS DE SELECT EQUIPOS
var opt1 = document.createElement('option')
opt1.value = 1
opt1.innerHTML = 'Santiago Wanderers'
selec_equipo.appendChild(opt1)
var opt2 = document.createElement('option')
opt2.value = 2
opt2.innerHTML = 'Coquimbo Unido'
selec_equipo.appendChild(opt2)
var opt3 = document.createElement('option')
opt3.value = 3
opt3.innerHTML = 'Universidad Católica'
selec_equipo.appendChild(opt3)
var opt4 = document.createElement('option')
opt4.value = 4
opt4.innerHTML = 'Colo-Colo'
selec_equipo.appendChild(opt4)
var opt5 = document.createElement('option')
opt5.value = 5
opt5.innerHTML = 'Barrabases'
selec_equipo.appendChild(opt5)
var opt6 = document.createElement('option')
opt6.value = 6
opt6.innerHTML = 'Buenas Peras FC'
selec_equipo.appendChild(opt6)
var opt7 = document.createElement('option')
opt7.value = 7
opt7.innerHTML = 'Everton'
selec_equipo.appendChild(opt7)
var opt8 = document.createElement('option')
opt8.value = 8
opt8.innerHTML = 'Ñublense Unido'
selec_equipo.appendChild(opt8)
var opt9 = document.createElement('option')
opt9.value = 9
opt9.innerHTML = 'Deportes Naval'
selec_equipo.appendChild(opt9)
var opt10 = document.createElement('option')
opt10.value = 10
opt10.innerHTML = 'Niupi FC'
selec_equipo.appendChild(opt10)
tr.appendChild(selec_equipo)
table.appendChild(tr)

//SELECT CIUDADES
var select_ciudad = document.createElement('select')
select_ciudad.id = 'ciudades'
select_ciudad.style.margin = '3px'
tr.appendChild(select_ciudad)

//OPTIONS DE SELECT CIUDADES
var opt1 = document.createElement('option')
opt1.value = 1
opt1.innerHTML = 'Valparaiso'
select_ciudad.appendChild(opt1)
var opt2 = document.createElement('option')
opt2.value = 2
opt2.innerHTML = 'Coquimbo'
select_ciudad.appendChild(opt2)
var opt3 = document.createElement('option')
opt3.value = 3
opt3.innerHTML = 'Santiago'
select_ciudad.appendChild(opt3)
var opt4 = document.createElement('option')
opt4.value = 4
opt4.innerHTML = 'Frutillar'
select_ciudad.appendChild(opt4)
var opt5 = document.createElement('option')
opt5.value = 5
opt5.innerHTML = 'Viña del mar'
select_ciudad.appendChild(opt5)
var opt6 = document.createElement('option')
opt6.value = 6
opt6.innerHTML = 'Ñublense'
select_ciudad.appendChild(opt6)
var opt7 = document.createElement('option')
opt7.value = 7
opt7.innerHTML = 'Tokio'
select_ciudad.appendChild(opt7)

//INPUT DE PARTIDOS GANADOS
input1 = document.createElement('input')
input1.id = 'ganados'
input1.placeholder = 'Partidos ganados'
input1.style.margin = '2px'

//INPUT DE PARTIDOS EMPATADOS
input2 = document.createElement('input')
input2.id = 'empatados'
input2.placeholder = 'Partidos empatados'
input2.style.margin = '2px'

//IMPUTN DE PARTIDOS PERDIDOS
input3 = document.createElement('input')
input3.id = 'perdidos'
input3.placeholder = 'Partidos Perdidos'
input3.style.margin = '2px'

//BOTON PARA GUARDAR DATOS DE EQUIPOS
boton = document.createElement('button')
boton.innerHTML = 'Enviar'
boton.onclick = () => enviarEquipo()



//MOSTRAR POR PANTALLA
tr.appendChild(selec_equipo)
tr.appendChild(select_ciudad)
tr.appendChild(input1)
tr.appendChild(input2)
tr.appendChild(input3)
tr.appendChild(boton)

br = document.createElement('br')
tr.appendChild(br)

verResults = document.createElement('button')
verResults.innerHTML = 'Ver resultados'
tr.appendChild(verResults)

table.appendChild(tr)
body.appendChild(table)