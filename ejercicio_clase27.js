function Alumno(nombre,n1,n2,n3){
    this.nombre = nombre,
    this.nota1 = n1,
    this.nota2 = n2,
    this.nota3 = n3,
    this.promedio = (n1+n2+n3) / 3
}
// Debe llenar un curso con 5 alumnos desde 4 inputs 
// (nombre, nota 1, 2 y 3) y 
// con una funcion asociada a un botón que agregue alumnos 
// al array alumnos[]
// La funcion además debe agregar los registros a una 
// estructura tipo tabla
// cada vez que se agregue un alumno y debe establecer 
// si el alumno aprueba 
//o reprueba (promedio de aprobacion >= 4.0)
body = document.body
input1 = document.createElement('input')
input1.id = "input1"
input1.placeholder="Nombre"
input2 = document.createElement('input')
input2.id = "input2"
input2.placeholder="Nota 1"
input3 = document.createElement('input')
input3.id = "input3"
input3.placeholder="Nota 2"
input4 = document.createElement('input')
input4.id = "input4"
input4.placeholder="Nota 3"
boton = document.createElement('button')
boton.innerHTML = 'Agregar'
boton.onclick = () => agregarAlumno()
body.appendChild(input1)
body.appendChild(input2)
body.appendChild(input3)
body.appendChild(input4)
body.appendChild(boton)
var tabla = document.createElement('table')
var tr = document.createElement('tr')
var td = document.createElement('td')
td.innerHTML = "NOMBRE"
tr.appendChild(td)
td = document.createElement('td')
td.innerHTML = "NOTA 1"
tr.appendChild(td)
td = document.createElement('td')
td.innerHTML = "NOTA 2"
tr.appendChild(td)
td = document.createElement('td')
td.innerHTML = "NOTA3"
tr.appendChild(td)
td = document.createElement('td')
td.innerHTML = "PROMEDIO"
tr.appendChild(td)
td = document.createElement('td')
td.innerHTML = "SITUACION"
tr.appendChild(td)
tabla.appendChild(tr)
body.appendChild(tabla)
var alumnos= []
i=0;
const agregarAlumno = () =>{
    if(i==5){
        alert('Solo 5 alumnos')
        return
    }
    nombre = document.getElementById('input1').value
    nota1 = parseInt(document.getElementById('input2').value)
    nota2 = parseInt(document.getElementById('input3').value)
    nota3 = parseInt(document.getElementById('input4').value)
    alumno = new Alumno(nombre,nota1,nota2,nota3)
    alumnos.push( alumno )
    var tr = document.createElement('tr')
    var td = document.createElement('td')
    td.innerHTML = alumno.nombre
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = alumno.nota1
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = alumno.nota2
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = alumno.nota3
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = alumno.promedio
    tr.appendChild(td)
    td = document.createElement('td')
    var situacion = "REPROBADO"
    if(alumno.promedio >= 4){
        situacion = "APROBADO"
    }
    td.innerHTML = situacion
    tr.appendChild(td)
    tabla.appendChild(tr)
    document.getElementById('input1').value = ''
    document.getElementById('input2').value = ''
    document.getElementById('input3').value = ''
    document.getElementById('input4').value = ''
    ++i;
}

