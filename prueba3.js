function Alumno(nombre,equipo){
    this.nombre = nombre,
    this.equipo = equipo
}
const crearTabla = (id_tabla) =>{
    var tbl = document.createElement('table')
    tbl.id = id_tabla
    var tr = document.createElement('tr')
    var td = document.createElement('td')
    td.innerHTML = 'ID'
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = 'Nombre'
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = 'Equipo'
    tr.appendChild(td)
    tbl.appendChild(tr)
    body.appendChild(tbl)
    const br = document.createElement('br')
    body.appendChild(br)

}
const enviarAlumno = () =>{
    var nombre = document.getElementById('nombre').value
    var equipo = document.getElementById('equipos').value
    var tabla = ""
    var cant=0;
    if(nombre.value = ""){
        alert('Debe Ingresar Nombre');
        return
    }
    switch (parseInt(equipo)){
        case 1 : arrWan.push(
            new Alumno(nombre,equipo)
        );
        cantWan++;
        tabla = "tbl_wan"
        cant = cantWan;
        break;
        case 2 : arrEve.push(
            new Alumno(nombre,equipo)
        );
        cantEve++;
        cant=cantEve;
        tabla = "tbl_eve"
        break;
        case 3 : arrCol.push(
            new Alumno(nombre,equipo)
        );
        cantCol++;
        cant=cantCol;
        tabla = "tbl_col"
        break;
        default : console.log('No se ha elegido equipo')
        break;
    }
    agregarLinea(tabla,cant,nombre,equipo)
}
const agregarLinea = (tabla,cant,nombre,equipo) => {
    console.log(tabla)
    var tbl = document.getElementById(tabla)
    var tr = document.createElement('tr')
    var td = document.createElement('td')
    td.innerHTML = cant
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = nombre
    tr.appendChild(td)
    td = document.createElement('td')
    var nombreEquipo = ""
    equipo = parseInt(equipo)
    if(equipo ==1 ){
        nombreEquipo = "Wanderers"
    }
    if(equipo ==2 ){
        nombreEquipo = "Everton"
    }
    if(equipo ==3 ){
        nombreEquipo = "Colo-Colo"
    }
    td.innerHTML = nombreEquipo
    tr.appendChild(td)
    tbl.appendChild(tr)
}

arrWan = []
arrEve = []
arrCol = []
cantWan = 0;
cantEve = 0;
cantCol = 0;
var body = document.body
var inNombre = document.createElement('input')
inNombre.placeholder = "Nombre"
inNombre.id = "nombre"
var slEquipo = document.createElement('select')
slEquipo.id = "equipos" 
var opt1 = document.createElement('option')
opt1.value = 1
opt1.innerHTML = "Wanderers"
var opt2 = document.createElement('option')
opt2.value = 2
opt2.innerHTML = "Everton"
var opt3 = document.createElement('option')
opt3.value = 3
opt3.innerHTML = "ColoColo"
slEquipo.appendChild(opt1)
slEquipo.appendChild(opt2)
slEquipo.appendChild(opt3)
btnEnviar = document.createElement('button')
btnEnviar.innerHTML = "Enviar"
btnEnviar.onclick = () => enviarAlumno()
body.appendChild(inNombre)
body.appendChild(slEquipo)
body.appendChild(btnEnviar)
crearTabla("tbl_wan")
crearTabla("tbl_eve")
crearTabla("tbl_col")

