var body = document.body

for(i =0; i < 10; i++) {
    input = document.createElement('input')
    br = document.createElement('br')
    body.appendChild(input)
    body.appendChild(br)
}

boton = document.createElement('button')
boton.innerText = 'Llenar texto'
body.appendChild(boton)

