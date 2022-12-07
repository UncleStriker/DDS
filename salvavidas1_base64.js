// Considere el siguiente array de objetos:
// [
//      {	
//      valor: 190,
//      valor_b64 = “IjE5MCI=”
//      },
//      {	
//      valor: 534,
//      valor_b64 = “IjUzNCI=”
//      }, …….
// ]
// Debe generar un constructor para los objetos. Los valores de “valor” 
// deben generarse de forma aleatoria. 
// Debe pedir por pantalla un valor (prompt) de la cantidad de números que 
// tenga el objeto
// La clave <<valor_b64>> debe generarse a partir del encoded del string 
// del número. Revise las funciones nativas atob y btoa
// El array debe imprimirse en una tabla de la siguiente manera

// ID	Numero	Base64
// 1	190	    IjE5MCI=
// 2	534	    IjUzNCI=
// …	 	 


// function Base64(id, numero, base64){
//     this.id = id;
//     this.numero = numero;
//     this.base64 = base64;
// }

var body = document.body

tabla = document.createElement('table')
body.appendChild(tabla)

tr = document.createElement('tr')
td = document.createElement('td')
td.innerHTML = 'ID'
tr.appendChild(td)
td = document.createElement('td')
td.innerHTML = 'NUMERO'
tr.appendChild(td)
td = document.createElement('td')
td.innerHTML = 'Base64'
tr.appendChild(td)

const cantNumeros = Number(prompt('Ingrese cuantos numeros desea convertir a base64(aleatorios)'))

tabla.appendChild(tr)

const base64 = []
const randomNums = []

for (i=0; i <= cantNumeros-1; i++) {
    tr = document.createElement('tr')

    td = document.createElement('td')
    var id = i+1
    td.id = id
    td.innerHTML = id
    tr.appendChild(td)

    numero = parseInt(Math.ceil(Math.random()*1000))
    td = document.createElement('td')
    td.innerHTML = numero
    tr.appendChild(td)
    randomNums.push(numero)

    var encodeNum = btoa(numero)
    td = document.createElement('td')
    td.innerHTML = encodeNum
    tr.appendChild(td)
    base64.push(encodeNum)

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

const decodBase64 = () =>{
    var tabla = document.createElement('table')
    tr = document.createElement('tr')

    td = document.createElement('td')
    td.innerHTML = 'ID'
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerHTML = 'Base64'
    tr.appendChild(td)
    
    td = document.createElement('td')
    td.innerHTML = 'NUMERO'
    tr.appendChild(td)
    body.appendChild(tabla)
    tabla.appendChild(tr)

    for(i=0; i<=cantNumeros-1; i++){
        tr = document.createElement('tr')
    
        td = document.createElement('td')
        var id = i+1
        td.id = id
        td.innerHTML = id
        tr.appendChild(td)
        
        td = document.createElement('td')
        td.innerHTML = base64[i]
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = randomNums[i]
        tr.appendChild(td)        

        body.appendChild(tabla)
        tabla.appendChild(tr)
    }

}






