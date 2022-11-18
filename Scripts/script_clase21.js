body = document.body

tabla = document.createElement('table')
thead = document.createElement('thead')
th1 = document.createElement('th')
th1.innerHTML = "Col1"
th1.style.border = "1px solid"
th2 = document.createElement('th')
th2.innerHTML = "Col3"
th2.style.border = "1px solid"
th3 = document.createElement('th')
th3.style.border = "1px solid"
th3.innerHTML = "Col3"
thead.appendChild(th1)
thead.appendChild(th2)
thead.appendChild(th3)
tabla.appendChild(thead)
body.appendChild(tabla)

tbody = document.createElement('tbody')
tr = document.createElement('tr')
td1 = document.createElement('td')
td1.innerHTML = "Valor 1"
td1.style.border = "1px solid"
td2 = document.createElement('td')
td2.innerHTML = "Valor 2"
td2.style.border = "1px solid"
td3 = document.createElement('td')
td3.style.border = "1px solid"
td3.innerHTML = "valor 3"

tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(td3)
tbody.appendChild(tr)
tabla.appendChild(tbody)


const agregarFila = () =>{
    tr = document.createElement('tr')
    td1 = document.createElement('td')
    td1.innerHTML = "Valor 1"
    td1.style.border = "1px solid"
    td2 = document.createElement('td')
    td2.innerHTML = "Valor 2"
    td2.style.border = "1px solid"
    td3 = document.createElement('td')
    td3.style.border = "1px solid"
    td3.innerHTML = "valor 3"

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tbody.appendChild(tr)
}
br = document.createElement('br')
body.appendChild(br)
boton = document.createElement('button')
boton.innerHTML = "Agregar Fila"
boton.onclick = () => agregarFila()
body.appendChild(boton)

