const base64 = []
const encodeNum = []


function Valor_b64(){
    this.valor = Math.ceil(Math.random()*1000)
    this.valor_b64 = btoa(this.valor)
}

var body = document.body

tabla = document.createElement('table')
body.appendChild(tabla)

tr = document.createElement('tr')

td = document.createElement('td')
td.innerHTML = 'ID'
tr.appendChild(td)

td = document.createElement('td')
td.innerHTML = 'Numero'
tr.appendChild(td)

td = document.createElement('td')
td.innerHTML = 'Base64'
tr.appendChild(td)

const cantNumeros = Number(prompt('Ingrese cuantos numeros desea convertir a base64(aleatorios)'))

tabla.appendChild(tr)

var valor = 0
var numero = 0
var valor_b64 = ''

for (var i = 0; i<=cantNumeros-1; i++){
    tr = document.createElement('tr')

    const encodeNum = {
        b64:{
            numero:{
                valor: new Valor_b64(valor, valor_b64)
            },
            valor_b64:{
                base64 : numero.valor_b64
            }            
        }
    }
    base64.push(encodeNum)

    base64.forEach( elem =>{
        tr = document.createElement('tr')
        td = document.createElement('td')
        td.innerHTML = i 
        td.style.border = "1px solid"
        tr.appendChild(td)
        td = document.createElement('td')
        td.innerHTML = elem.b64.numero.valor
        td.style.border = "1px solid"
        tr.appendChild(td)
        td = document.createElement('td')
        td.innerHTML = elem.b64.valor_b64.base64
        td.style.border = "1px solid"
        tr.appendChild(td)
        tabla.appendChild(tr)

     })
} 


