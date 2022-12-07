//TIPO CUENTA: silver , gold, platinum, diamond.
function Cliente(nombre, apellido, primerDeposito) {
    this.nombre = nombre;
    this.apellido = apellido;
    // this.tipoCuenta = tipoCuenta;
    this.primerDeposito = primerDeposito;
}

var body = document.body
input1 = document.createElement('input')
input1.id = 'nombre'
input1.placeholder = 'Nombre cliente'
br1 = document.createElement('br')
input2 = document.createElement('input')
input2.id = 'apellido'
input2.placeholder = 'Apellido cliente'
br2 = document.createElement('br')
input4 = document.createElement('input')
input4.id = 'primerDeposito'
input4.placeholder = 'Primer depósito'
br3 = document.createElement('br')
boton = document.createElement('button')
boton.innerHTML = 'Agregar cliente'
br4 = document.createElement('br')
boton.onclick = () => agregarCliente()
br = document.createElement('br')

// select = document.createElement('select')
// option1 = document.createElement('option')
// option1texto = document.createTextNode('opcion 1')
// option1.appendChild(option1texto)

// select.appendChild(option1)


body.appendChild(input1)
body.appendChild(br1)
body.appendChild(input2)
body.appendChild(br2)
body.appendChild(input4)
body.appendChild(br3)
body.appendChild(boton)
body.appendChild(br4)
body.appendChild(br)




//construccion de la tabla

tabla = document.createElement('table')
tr = document.createElement('tr')
td = document.createElement('td')
td.innerHTML = 'NOMBRE'
tr.appendChild(td)
td = document.createElement('td')
td.innerHTML = 'APELLIDO'
tr.appendChild(td)
td = document.createElement('td')
td.innerHTML = 'PRIMER DEPOSITO'
tr.appendChild(td)
td = document.createElement('td')
td.innerHTML = 'TIPO CUENTA'

tr.appendChild(td)
tabla.appendChild(tr)
body.appendChild(tabla)

//Recepcion de datos

var clientes = []
i = 0;
const agregarCliente = () => {
    if (i == 3) {
        alert("¡solo puede guardar 3 clientes!")
        return
    }
    nombre = document.getElementById('nombre').value
    apellido = document.getElementById('apellido').value
    //tipoCuenta = document.getElementById('tipoCuenta').value
    primerDeposito = parseInt(document.getElementById('primerDeposito').value)
    cliente = new Cliente(nombre, apellido, primerDeposito)
    clientes.push(cliente)

    tr = document.createElement('tr')
    td = document.createElement('td')
    td.innerHTML = cliente.nombre
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = cliente.apellido
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = cliente.primerDeposito
    tr.appendChild(td)
    td = document.createElement('td')
    var tipoCuenta = "Silver"
    if (cliente.primerDeposito >= 1500000) {
        tipoCuenta = "Gold"
    }
    if (cliente.primerDeposito >= 3000000) {
        tipoCuenta = "Platinum"
    }
    if (cliente.primerDeposito >= 4500000) {
        tipoCuenta = "Diamond"
    }
    td.innerHTML = tipoCuenta
    td.id = 'tipoCuenta'
    tr.appendChild(td)
    tabla.appendChild(tr)
    document.getElementById('nombre').value = ''
    document.getElementById('apellido').value = ''
    document.getElementById('primerDeposito').value = ''
    document.getElementById('tipoCuenta').value = ''

    ++i;
}