function Equipo(nombre,puntaje){
    this.nombre = nombre,
    this.puntaje= puntaje
}
 
// con la ayuda de un constructor 
//debe generar los nombres 10 equipos (equipo1, equipo2, etc)
// y los puntajes (random (50))
// y generar la tabla de posiciones en una estructura tipo table
var equipos = []
for(i = 0 ; i< 10 ;++i){
    equipos.push(
        new Equipo("Equipo"+i,Math.ceil(Math.random()*50))
    ) 
}

for(i = 0 ; i< 10 ;i++){
    for(j =0 ; j < 10 ;j++){
        if(equipos[j].puntaje > equipos[i].puntaje){
            respaldo = equipos[i]
            equipos[i] = equipos[j]
            equipos[j] = respaldo
        }
        console.log(j)
    }
    console.log(j)
}
console.log(equipos)
var body = document.body
var tabla = document.createElement('table')
var tr = document.createElement('tr')
var td = document.createElement('td')
td.innerHTML = 'Lugar'
tr.appendChild(td)
td = document.createElement('td')
td.innerHTML = 'Equipo'
tr.appendChild(td)
td = document.createElement('td')
td.innerHTML = 'Puntaje'
tr.appendChild(td)
tabla.appendChild(tr)
i =1
equipos.forEach(equipo =>{
    var tr = document.createElement('tr')
    var td = document.createElement('td')
    td.innerHTML = i
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = equipo.nombre
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = equipo.puntaje
    tr.appendChild(td)
    tabla.appendChild(tr)
    i++
})
body.appendChild(tabla)