function Equipo(nombre, ciudad, ganados, empatados, perdidos){
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.partidosGanados = ganados;
    this.partidosEmpatados = empatados;
    this.partidosPerdidos = perdidos;
    this.puntaje = (this.partidosGanados*3)+(this.partidosEmpatados)
}

equipos = []

const enviarEquipo = (nombre, ciudad, ganados, empatados, perdidos) =>{
    var nombre = document.getElementById('equipos').value
    var ciudad = document.getElementById('ciudades').value
    var ganados = document.getElementById('ganados').value
    var empatados = document.getElementById('empatados').value
    var perdidos = document.getElementById('perdidos').value

    var table = document.createElement('table')

    equipos.push(
        new Equipo(nombre, ciudad, ganados, empatados, perdidos)
    )

    // equipo = new Equipo(nombre, ciudad, ganados, empatados, perdidos)
    // equipos.push(equipo)

    // switch(parseInt(equipo)){

    //     case 1:(
    //         equipo.nombre = 'Wanderers'
            
    //     );
    //     break;
    //     case 1:(
    //         equipo.nombre = 'Coquimbo'
            
    //     );
    //     break;
    //     case 1:(
    //         equipo.nombre = 'Catolica'
            
    //     );
    //     break;
    //     case 1:(
    //         equipo.nombre = 'Colo-Colo'
            
    //     );
    //     break;
    //     case 1:(
    //         equipo.nombre = 'Barrabases'
            
    //     );
    //     break;
    //     case 1:(
    //         equipo.nombre = 'Buenas Peras'
            
    //     );
    //     break;
    //     case 1:(
    //         equipo.nombre = 'Everton'
            
    //     );
    //     break;
    //     case 1:(
    //         equipo.nombre = 'Ñublense'
            
    //     );
    //     break;
    //     case 1:(
    //         equipo.nombre = 'Deportes Naval'
            
    //     );
    //     break;
    //     case 1:(
    //         equipo.nombre = 'Niupi'
            
    //     );
    //     break;
             

    // }


    var tr = document.createElement('tr')
    var td = document.createElement('td')
    td.innerHTML = equipo.nombre
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = equipo.ciudad
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = equipo.ganados
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = equipo.empatados
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = equipo.perdidos
    tr.appendChild(td)

    table.appendChild(tr)
    body.appendChild(table)
    
    // switch(parseInt(equipo)){
    //     case 1: arrWan.push(
    //         new Equipo(nombre, ciudad, ganados, empatados, perdidos)
    //     );
    //     break;
    //     case 2: arrCoq.push(
    //         new Equipo(nombre, ciudad, ganados, empatados, perdidos)
    //     );
    //     break;
    //     case 3: arrCato.push(
    //         new Equipo(nombre, ciudad, ganados, empatados, perdidos)
    //     );
    //     break;
    //     case 4: arrColo.push(
    //         new Equipo(nombre, ciudad, ganados, empatados, perdidos)
    //     );
    //     break;
    //     case 5: arrBarra.push(
    //         new Equipo(nombre, ciudad, ganados, empatados, perdidos)
    //     );
    //     break;
    //     case 6: arrPeras.push(
    //         new Equipo(nombre, ciudad, ganados, empatados, perdidos)
    //     );
    //     break;
    //     case 7: arrEve.push(
    //         new Equipo(nombre, ciudad, ganados, empatados, perdidos)
    //     );
    //     break;
    //     case 8: arrÑuble.push(
    //         new Equipo(nombre, ciudad, ganados, empatados, perdidos)
    //     );
    //     break;
    //     case 9: arrNav.push(
    //         new Equipo(nombre, ciudad, ganados, empatados, perdidos)
    //     );
    //     break;
    //     case 10: arrNiu.push(
    //         new Equipo(nombre, ciudad, ganados, empatados, perdidos)
    //     );
    //     break;
    // }
    // agregarLinea(tabla)
}



body = document.body 

table = document.createElement('table')

tr = document.createElement('tr')
tr.style.border = '1px solid'
br = document.createElement('br')
tr.appendChild(br)
var selec_equipo = document.createElement('select')
selec_equipo.id = 'equipos'
selec_equipo.style.margin = '3px'
tr.appendChild(selec_equipo)
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

var select_ciudad = document.createElement('select')
select_ciudad.id = 'ciudades'
select_ciudad.style.margin = '3px'
tr.appendChild(select_ciudad)

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

input1 = document.createElement('input')
input1.id = 'ganados'
input1.placeholder = 'Partidos ganados'
input1.style.margin = '2px'

input2 = document.createElement('input')
input2.id = 'empatados'
input2.placeholder = 'Partidos empatados'
input2.style.margin = '2px'

input3 = document.createElement('input')
input3.id = 'perdidos'
input3.placeholder = 'Partidos Perdidos'
input3.style.margin = '2px'

boton = document.createElement('button')
boton.innerHTML = 'Enviar'
boton.onclick = () => enviarEquipo()

tr.appendChild(select_ciudad)
tr.appendChild(input1)
tr.appendChild(input2)
tr.appendChild(input3)
tr.appendChild(boton)

table.appendChild(tr)

body.appendChild(table)