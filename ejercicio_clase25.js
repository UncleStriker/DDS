function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}
arr=[]
const body = document.body
var input_nombre = document.createElement('input')
input_nombre.placeholder = "Nombre"
input_nombre.id = 'input_nombre'
var input_apellido = document.createElement('input')
input_apellido.placeholder='Apellido'
input_apellido.id = 'input_apellido'
var input_edad = document.createElement('input')
input_edad.placeholder='Edad'
input_edad.id = "input_edad"
var btn_enviar = document.createElement('button')
btn_enviar.innerHTML = "Enviar"
btn_enviar.onclick = () => enviar()

//body.appendChild(input_nombre)
body.appendChild(input_apellido)
body.appendChild(input_edad)
body.appendChild(btn_enviar)

enviar = () => {
    nombre = document.getElementById('input_nombre').value
    apellido = document.getElementById('input_apellido').value
    edad = parseInt(document.getElementById('input_edad').value)
    arr.push(new Persona(nombre,apellido,edad))
    document.getElementById('input_nombre').value = ''
    document.getElementById('input_apellido').value = ''
    document.getElementById('input_edad').value = ''

}