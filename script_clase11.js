var body = document.body
var contenedor = document.createElement('div')
contenedor.classList.add("container")

for(i=1; i<10; i++) {
    fila = document.createElement('div')
    fila.classList.add("row", "g-3", "align-items-center")
    var label = document.createElement('label')
    label.innerHTML = "Un numero random"
    label.classList.add('form-label')
    var cajaDeTexto = document.createElement('input')
    cajaDeTexto.value = Math.random()
    cajaDeTexto.classList.add('form-control')
    cajaDeTexto.style = "width:200"
    var br = document.createElement('br')
    var boton = document.createElement('button')
    boton.id = i
    boton.innerText = "Hazme click"
    boton.classList.add("btn", "btn-primary")
    boton.onclick = (evt) => hola(evt)
    body.appendChild(label)
    body.appendChild(cajaDeTexto)
    body.appendChild(boton)
    body.appendChild(br)
    body.appendChild(contenedor)
};

hola = (desde) =>{
    alert(`Hola, soy el boton numero ${desde}`)
}