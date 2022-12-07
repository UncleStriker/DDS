// Las preferencias futbolísticas de un curso de 30 alumno se han 
// inclinado solamente por tres equipos: 
// Santiago Wanderers,  Everton, y Colo-Colo, por tanto se solicita

// -	Implementar una pantalla que permita ingresar el nombre del alumno y 
//     el equipo de su preferencia (1 = Wanderers, 2 = Everton , 3 = Colo-Colo)
// -	Implementar un botón que llame a una función que almacene al alumno y su 
//     preferencia en un objeto separado por equipo (o sea debe mantener 3 objetos). 
//      Además crear tres tablas y cuando ingrese un alumno, éste se debe agregar a la tabla 
//      correspondiente al equipo de su preferencia.
// -	Cada vez que se aprete el botón, debe limpiar los controles input
//      **Para ingresar el equipo puede (no es obligatorio) utilizar una estructura 
//     “select” como la siguiente:

// <select id = “equipo”>
    // <option value=0>Elegir</option>
    // <option value=1>Wanderers</option>
    // <option value=2>Everton</option>
    // <option value=3>Colo-Colo</option>
// </select>


function Alumno(nombre, equipo){
    this.nombre = nombre;
    this.equipo = equipo
}

//SOLICITUD DE DATOS

var body = document.body 
input1 = document.createElement('input')
input1.id = 'nombre'
input1.placeholder = 'Nombre Alumno'

select = document.createElement('select')
select.id = 'select'
option0 = document.createElement('option')
option0.innerHTML = 'Elegir equipo'
option0.value = '0'
option0.id = '0'
option1 = document.createElement('option')
option1.innerHTML = 'Wanderer'
option1.value = '1'
option1.id = '1'
option2 = document.createElement('option')
option2.innerHTML = 'Everton'
option2.value = '2'
option2.id = '2'
option3 = document.createElement('option')
option3.innerHTML = 'Colo-Colo'
option3.value = '3'
option3.id = '3'
boton = document.createElement('button')
boton.innerHTML = 'Agregar Alumno'
boton.onclick = () => agregarAlumno()

//LLENADO DE DATOS EN PANTALLA

body.appendChild(input1)
body.appendChild(select)
select.appendChild(option0)
select.appendChild(option1)
select.appendChild(option2)
select.appendChild(option3)
body.appendChild(boton)

//CONSTRUCCION DE LA TABLA

tabla = document.createElement('table')
tr = document.createElement('tr')
td = document.createElement('td')
td.innerHTML = 'NOMBRE ALUMNO'
tr.appendChild(td)
td = document.createElement('td')
td.innerHTML = 'EQUIPO'
tr.appendChild(td)


body.appendChild(tabla)
tabla.appendChild(tr)
tr.appendChild(td)

//RECEPCION DE DATOS

var alumnos = []
i=0;

const agregarAlumno = () => {
    if (i == 10){
        alert('!Solo puede agregar 10 alumnos¡')
        return
    }
    nombre = document.getElementById('nombre').value
    equipo = document.getElementById('select').value
    if(select.value = '1'){
        equipo = 'Wanderer'
    }
    if(select.value = '2'){
        equipo = 'Everton'
    }
    if(select.value = '3'){
        equipo = 'Colo-Colo'
    } 

    alumno = new Alumno(nombre, equipo)
    alumnos.push(alumno)

    tr = document.createElement('tr')
    td = document.createElement('td')
    td.innerHTML = alumno.nombre
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = alumno.equipo
    tr.appendChild(td)
    tabla.appendChild(tr)

    document.getElementById('nombre').value = ''
    document.getElementById('select').value = ''
    
    ++i;
}