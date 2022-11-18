const miObj = [{
    persona:{
        nombre:{
            primerNombre:"Antonio",
            segundoNombre:"Javier",
            apellidoPaterno:"Salinas",
            apellidoMaterno:"Rodríguez",
        },
        direccion:{
            calle:"Las Rosas",
            numero: 123,
        },
        datosLaborales:{
            profesion:"Estudiante",
            institucion:"CFT Region de Valparaiso",
        }
    }
}]
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

button = document.createElement('button')
button.innerHTML = "Agregar Persona"
button.onclick = () => agregarPersona()
body.appendChild(button)
const agregarPersona = () =>{
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
}