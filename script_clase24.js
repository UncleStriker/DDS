const miObj = []

var body = document.body
var primerNombre = document.createElement('input')
primerNombre.id = "primerNombre"
var segundoNombre = document.createElement('input')
segundoNombre.id = "segundoNombre"
var apellidoPaterno = document.createElement('input')
apellidoPaterno.id = "apellidoPaterno"
var apellidoMaterno = document.createElement('input')
apellidoMaterno.id = "apellidoMaterno"
var calle = document.createElement('input')
calle.id = "calle"
var numero = document.createElement('input')
numero.id = "numero"
var profesion = document.createElement('input')
profesion.id = "profesion"
var institucion = document.createElement('input')
institucion.id = "institucion"

var label = document.createElement('label')
label.innerHTML = "Primer Nombre"
body.appendChild(label)
body.appendChild(primerNombre)
var br = document.createElement('br')
body.appendChild(br)
label = document.createElement('label')
label.innerHTML = "Segundo Nombre"
body.appendChild(label)
body.appendChild(segundoNombre)
br = document.createElement('br')
body.appendChild(br)
label = document.createElement('label')
label.innerHTML = "Apellido Paterno"
body.appendChild(label)
body.appendChild(apellidoPaterno)
br = document.createElement('br')
body.appendChild(br)
label = document.createElement('label')
label.innerHTML = "Apellido Materno"
body.appendChild(label)
body.appendChild(apellidoMaterno)
br = document.createElement('br')
body.appendChild(br)
label = document.createElement('label')
label.innerHTML = "Calle"
body.appendChild(label)
body.appendChild(calle)
br = document.createElement('br')
body.appendChild(br)
label = document.createElement('label')
label.innerHTML = "Numero"
body.appendChild(label)
body.appendChild(numero)
br = document.createElement('br')
body.appendChild(br)
label = document.createElement('label')
label.innerHTML = "Profesion"
body.appendChild(label)
body.appendChild(profesion)
br = document.createElement('br')
body.appendChild(br)
label = document.createElement('label')
label.innerHTML = "Institucion"
body.appendChild(label)
body.appendChild(institucion)
br = document.createElement('br')
body.appendChild(br)
tablaDiv = document.createElement('div')
tablaDiv.id = "tabla_div"
body.appendChild(tablaDiv)

button = document.createElement('button')
button.innerHTML = "Agregar Persona"
button.onclick = () => agregarPersona()
body.appendChild(button)
const agregarPersona = () =>{
    if(document.getElementById('primerNombre').value == '' ||
       document.getElementById('segundoNombre').value == '' ||
       document.getElementById('apellidoPaterno').value == '' ||
       document.getElementById('apellidoMaterno').value == '' ||
       document.getElementById('calle').value == '' ||
       document.getElementById('numero').value == '' ||
       document.getElementById('profesion').value == '' ||
       document.getElementById('institucion').value == ''){
           alert('No ha ingresado todos los datos')
           return
       }

    const newObjeto = {
        persona:{
            nombre:{
                primerNombre: document.getElementById('primerNombre').value,
                segundoNombre:document.getElementById('segundoNombre').value,
                apellidoPaterno:document.getElementById('apellidoPaterno').value,
                apellidoMaterno:document.getElementById('apellidoMaterno').value,
            },
            direccion:{
                calle:document.getElementById('calle').value,
                numero: document.getElementById('numero').value,
            },
            datosLaborales:{
                profesion:document.getElementById('profesion').value,
                institucion:document.getElementById('institucion').value,
            }
        }
    }
    miObj.push(newObjeto)

    document.getElementById('primerNombre').value = ''
    document.getElementById('segundoNombre').value = ''
    document.getElementById('apellidoPaterno').value = ''
    document.getElementById('apellidoMaterno').value = ''
    document.getElementById('calle').value = ''
    document.getElementById('numero').value = ''
    document.getElementById('profesion').value = ''
    document.getElementById('institucion').value = ''
    armarTabla()
}

const armarTabla = () =>{
    tablaDiv.innerHTML = ""
    var tabla = document.createElement('table')
    var trr = document.createElement('tr')
    var th = document.createElement('th')
    th.innerHTML = 'ID'
    th.style.border = "1px solid"
    trr.appendChild(th)
    th = document.createElement('th')
    th.innerHTML = 'Primer Nombre' 
    th.style.border = "1px solid"
    trr.appendChild(th)
    th = document.createElement('th')
    th.innerHTML = 'Segundo Nombre' 
    th.style.border = "1px solid"
    trr.appendChild(th)
    th = document.createElement('th')
    th.innerHTML = 'Ap. Paterno' 
    th.style.border = "1px solid"
    trr.appendChild(th)
    th = document.createElement('th')
    th.innerHTML = 'Ap. Materno' 
    th.style.border = "1px solid"
    trr.appendChild(th)
    th = document.createElement('th')
    th.innerHTML = 'Calle' 
    th.style.border = "1px solid"
    trr.appendChild(th)
    th = document.createElement('th')
    th.innerHTML = 'Numero' 
    th.style.border = "1px solid"
    trr.appendChild(th)
    th = document.createElement('th')
    th.innerHTML = 'Profesion' 
    th.style.border = "1px solid"
    trr.appendChild(th)
    th = document.createElement('th')
    th.innerHTML = 'Institucion' 
    th.style.border = "1px solid"
    trr.appendChild(th)
    tabla.appendChild(trr)

    i=1;
    miObj.forEach( elem =>{
        row = document.createElement('tr')
        td = document.createElement('td')
        td.innerHTML = i
        td.style.border = "1px solid"
        row.appendChild(td)
        td = document.createElement('td')
        td.innerHTML = elem.persona.nombre.primerNombre
        td.style.border = "1px solid"
        row.appendChild(td)
        td = document.createElement('td')
        td.innerHTML = elem.persona.nombre.segundoNombre
        td.style.border = "1px solid"
        row.appendChild(td)
        td = document.createElement('td')
        td.innerHTML = elem.persona.nombre.apellidoPaterno
        td.style.border = "1px solid"
        row.appendChild(td)
        td = document.createElement('td')
        td.innerHTML = elem.persona.nombre.apellidoMaterno
        td.style.border = "1px solid"
        row.appendChild(td)
        td = document.createElement('td')
        td.innerHTML = elem.persona.direccion.calle
        td.style.border = "1px solid"
        row.appendChild(td)
        td = document.createElement('td')
        td.innerHTML = elem.persona.direccion.numero
        td.style.border = "1px solid"
        row.appendChild(td)
        td = document.createElement('td')
        td.innerHTML = elem.persona.datosLaborales.profesion
        td.style.border = "1px solid"
        row.appendChild(td)
        td = document.createElement('td')
        td.innerHTML = elem.persona.datosLaborales.institucion
        td.style.border = "1px solid"
        row.appendChild(td)
        tabla.appendChild(row)
        i++
    })
    tablaDiv.appendChild(tabla)

}