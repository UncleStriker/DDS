var body = document.body
var contenedor = document.createElement('div')
contenedor.classList.add("container")
for (i=1;i<=10;++i){
    fila = document.createElement('div')
    fila.classList.add("row", "g-3", "align-items-center")
    col1 = document.createElement("div")
    col1.classList.add("col-auto")
    var label = document.createElement('label')
    label.innerHTML = "Un Numero Random   "
    label.classList.add("form-label")
    col1.appendChild(label)
    fila.appendChild(col1)
    col2 = document.createElement("div")
    col2.classList.add("col-auto")
    var cajaDeTexto = document.createElement('input')
    cajaDeTexto.value = Math.random()
    cajaDeTexto.classList.add("form-control")
    cajaDeTexto.style = "width:200"
    col2.appendChild(cajaDeTexto)
    fila.appendChild(col2)
    col3 = document.createElement("div")
    col3.classList.add("col-auto")
    var br = document.createElement('br')
    var boton = document.createElement('button')
    boton.id = i
    boton.innerText = "Hazme Click"
    boton.classList.add("btn", "btn-primary")
    boton.onclick = (evt) => hola(evt)
    col3.appendChild(boton)
    fila.appendChild(col3)
    // fila.appendChild(label)
    // fila.appendChild(cajaDeTexto)
    // fila.appendChild(boton)
    // fila.appendChild(br)
    contenedor.appendChild(fila)
    body.appendChild(contenedor)
}

hola = (desde) =>{
    alert("hola desde Boton num "+desde.path[0].id)
}