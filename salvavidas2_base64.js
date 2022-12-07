function Valor_b64(){
    this.valor = Math.ceil(Math.random()*1000)
    this.valor_b64 = btoa(this.valor)
}


function B64_valor(valor){
    this.valor = atob(valor)
}

var valor = 0
var valor_b64 = ''

var body = document.body

tabla = document.createElement('table')
tabla.style.border = '2px solid'
body.appendChild(tabla)

tr = document.createElement('tr')
tr.style.border = '1px solid'

td = document.createElement('td')
td.innerHTML = 'ID'
td.style.border = '1px solid'
tr.appendChild(td)

td = document.createElement('td')
td.innerHTML = 'Numero'
td.style.border = '1px solid'
tr.appendChild(td)

td = document.createElement('td')
td.innerHTML = 'Base64'
td.style.border = '1px solid'
tr.appendChild(td)

const cantNumeros = Number(prompt('Ingrese cuantos numeros desea convertir a base64(aleatorios)'))

tabla.appendChild(tr)

const encodeNum = []

for (var i = 0; i<=cantNumeros-1; i++){
    tr = document.createElement('tr')
    tr.style.border = '1px solid'

    td = document.createElement('td')
    numero = new Valor_b64(valor, valor_b64)
    encodeNum.push(numero.valor_b64)

    td.innerHTML = i+1
    td.style.border = '1px solid'
    tr.appendChild(td)
 
    td = document.createElement('td')
    td.innerHTML = numero.valor
    td.style.border = '1px solid'
    tr.appendChild(td)
    
    td = document.createElement('td')
    td.innerHTML = numero.valor_b64
    td.style.border = '1px solid'
    tr.appendChild(td)

    body.appendChild(tabla)
    tabla.appendChild(tr)
} 

boton = document.createElement('button')
boton.innerHTML = 'Descodificar base64'
boton.onclick = () => decodBase64()
br = document.createElement('br')
body.appendChild(br)
body.appendChild(boton)
br = document.createElement('br')
body.appendChild(br)
br = document.createElement('br')
body.appendChild(br)



const decodBase64 = () => {
    var tabla = document.createElement('table')
    tabla.style.border = '2px solid'
    tr = document.createElement('tr')

    td = document.createElement('td')
    td.innerHTML = 'ID'
    td.style.border = '1px solid'
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerHTML = 'Base64'
    td.style.border = '1px solid'
    tr.appendChild(td)
    
    td = document.createElement('td')
    td.innerHTML = 'Numero'
    td.style.border = '1px solid'
    tr.appendChild(td)
    body.appendChild(tabla)
    tabla.appendChild(tr)

    valor = ''
    for(i=0; i<=cantNumeros-1; i++){
        tr = document.createElement('tr')

        td = document.createElement('td')
        td.innerHTML = i+1
        td.style.border = '1px solid'
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = encodeNum[i]
        td.style.border = '1px solid'
        tr.appendChild(td)

        var valor = encodeNum[i]
        b64 = new B64_valor(valor)

        td = document.createElement('td')
        td.innerHTML = b64.valor
        td.style.border = '1px solid'
        tr.appendChild(td)

        body.appendChild(tabla)
        tabla.appendChild(tr)

    }

}
