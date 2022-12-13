function Jugador(jugador, n1, n2, n3, n4, n5, n6){
    this.jugador =jugador;
    this.n1 = n1;
    this.n2 = n2;
    this.n3 = n3;
    this.n4 = n4;
    this.n5 = n5;
    this.n6 = n6;
}

const agregar = () =>{
    jugadores.push(
        new Jugador(
            document.getElementById('inputNombre').value,
            parseInt(document.getElementById('inputN1').value),
            parseInt(document.getElementById('inputN2').value),
            parseInt(document.getElementById('inputN3').value),
            parseInt(document.getElementById('inputN4').value),
            parseInt(document.getElementById('inputN5').value),
            parseInt(document.getElementById('inputN6').value), 
        )
    )
    document.getElementById('inputNombre').value = ""
    document.getElementById('inputN1').value = ""
    document.getElementById('inputN2').value = ""
    document.getElementById('inputN3').value = ""
    document.getElementById('inputN4').value = ""
    document.getElementById('inputN5').value = ""
    document.getElementById('inputN6').value = ""
}

const generar = () => {
    const valores = llenarInputs()
    document.getElementById('inputNombre').value = "Jugador_"+i
    document.getElementById('inputN1').value = valores[0]
    document.getElementById('inputN2').value = valores[1]
    document.getElementById('inputN3').value = valores[2]
    document.getElementById('inputN4').value = valores[3]
    document.getElementById('inputN5').value = valores[4]
    document.getElementById('inputN6').value = valores[5]
    ++i;
}

const llenarInputs = () =>{
    values = []
    duplicados = false
    while( ! duplicados){
        values.push(Math.ceil(Math.random()*42))
        values.push(Math.ceil(Math.random()*42))
        values.push(Math.ceil(Math.random()*42))
        values.push(Math.ceil(Math.random()*42))
        values.push(Math.ceil(Math.random()*42))
        values.push(Math.ceil(Math.random()*42))
        values = values.sort()
        for(i=0;i<5;++i){
            if(values[i]!=values[i+1]){
                duplicados = true
            }else{
                duplicados = false
                values = []
                break
                
            }
        }
    
    } 
    console.log(values)
    return values     
}

body = document.body

jugadores = []
boton = document.createElement('button')
boton.innerHTML = 'agregar'
boton.onclick = () => agregar()
body.appendChild(boton)