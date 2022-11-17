// Jugando Póker
// -	Debe generar dos grupos de inputs, cada uno señalando si pertenece al jugador 1 o 2. 
// -	Debe generar un botón que permita repartir cartas entre 1 y 13 para cada jugador. Con la consiguiente función.
// -	Debe generar un botón que sea capaz de distinguir cuál jugador ha ganado según la siguiente jerarquía(desde la más baja hasta la más alta)
// o	Todas las cartas distintas
// o	Un par
// o	Dos pares
// o	Un trío
// o	Un full (un trío mas un par)
// o	Póker (4 cartas iguales)
// o	Escala real ( 5 cartas consecutivas)
// -	Consideraciones:
// o	No es necesario validar que no existan mas de 4 cartas iguales en una misma mano.
// o	No existen “pintas” o cartas de distinto color
// o	Si los dos jugadores tienen un solo par, gana el que tenga el par más alto y así también para el caso de los tríos. En el full el trio mayor gana. En el póker, el de mayor carta, gana.
// o	Puede haber empates, también se deben informar.
var body = document.body
var div1p = document.createElement('div')
var div2p = document.createElement('div')
var arr1p = []
var arr2p = []
var dibujar = () =>{
    div1p.innerHTML = ''
    div2p.innerHTML = ''
    arr1p = []
    arr2p = []
    var label1P = document.createElement('label')
    label1P.innerHTML = "Jugador 1"
    var label2P = document.createElement('label')
    label2P.innerHTML = "Jugador 2"
    br = document.createElement('br')
    div1p.appendChild(label1P)
    div1p.appendChild(br)
    br = document.createElement('br')
    div2p.appendChild(label2P)
    div2p.appendChild(br)
    for( i = 0 ; i <= 4 ; i++ ){
        br = document.createElement('br')
        input1P = document.createElement('input')
        input1P.type = 'number'
        input1P.value = Math.ceil(Math.random()*13)
        arr1p.push(input1P.value)
        div1p.appendChild(input1P)
        div1p.appendChild(br)
        br = document.createElement('br')
        input2P = document.createElement('input')
        input2P.type = 'number'
        input2P.value = Math.ceil(Math.random()*13)
        arr2p.push(input2P.value)
        div2p.appendChild(input2P)
        div2p.appendChild(br)
    }
    body.appendChild(div1p)
    body.appendChild(div2p)    
}

br = document.createElement('br')
body.appendChild(br)
var botonBarajar = document.createElement('button')
botonBarajar.innerHTML="Barajar"
botonBarajar.onclick = () => dibujar() 
body.appendChild(botonBarajar)

br = document.createElement('br')
body.appendChild(br)
var botonResultados = document.createElement('button')
botonResultados.innerHTML="Resultados"
botonResultados.onclick = () => resultados() 
body.appendChild(botonResultados)

const resultados = () =>{
    var res1 =''
    var res2 =''
    var puntaje1 = 0
    var puntaje2 = 0
    //Todas las cartas distintas
    // o	Un par
    // o	Dos pares
    // o	Un trío
    // o	Un full (un trío mas un par)
    // o	Póker (4 cartas iguales)
    // o	Escala real ( 5 cartas consecutivas)
    arr1p.sort()
    arr2p.sort()
    /***comprueba escala real */
    if ( arr1p[1] == arr1p[0]+1 &&
        arr1p[2] == arr1p[1]+1 &&
        arr1p[3] == arr1p[2]+1 &&
        arr1p[4] == arr1p[3]+1 
        ){
            res1 = "Escalera Real"
            puntaje1 = 7
        }else
   
    /****Fin comprueba escala real */
    /****comprueba poker */
    if (    (arr1p[0] == arr1p[1] &&
            arr1p[1] == arr1p[2] &&
            arr1p[2] == arr1p[3] ) ||
            (arr1p[1] == arr1p[2] &&
            arr1p[2] == arr1p[3] &&
            arr1p[3] == arr1p[4] ) 
        ){
            res1 = `Poker de ${arr1p[2]}`
            puntaje1 = 6
        }else
    
    /****comprueba trio */

        if (    (arr1p[0] == arr1p[1] && arr1p[1] == arr1p[2]) ||
                (arr1p[1] == arr1p[2] && arr1p[2] == arr1p[3]) ||
                (arr1p[2] == arr1p[3] && arr1p[3] == arr1p[4]) 
            
        ){
            res1 = `trio`
            puntaje1  = 4
        }
    
    /****fin comprueba trio */
    /****comprueba full */
    if ((arr1p[0] == arr1p[1]) &&
        (arr1p[2] == arr1p[3] &&
        arr1p[3] == arr1p[4]  ) &&
        (arr1p[0] != arr1p[4]) ||
        (arr1p[0] == arr1p[1] &&
         arr1p[2] == arr1p[3]) &&
        (arr1p[3] == arr1p[4]) &&
        (arr1p[0] != arr1p[4]) 
    ) {
        res1 = `Full`
        puntaje1 = 5
    }
    
    /****fin comprueba full */
    /**** comprueba dos pares */
    if ((arr1p[0] == arr1p[1]) &&
        (arr1p[2] == arr1p[3]) &&
        ((arr1p[0] != arr1p[2])&&(arr1p[0] != arr1p[4]))
        ||
        (arr1p[0] == arr1p[1]) &&
        (arr1p[3] == arr1p[4]) &&
        ((arr1p[0] != arr1p[3])&&(arr1p[0] != arr1p[4]))
        ||
        ((arr1p[1] == arr1p[2]) &&
        (arr1p[3] == arr1p[4]) &&
        ((arr1p[0] != arr1p[2])&&(arr1p[0] != arr1p[4]))) 
    ) {
        res1 = `Dos Pares`
        puntaje1 = 3
    }else
    /**comprueba 1 par */
    if(
        ((arr1p[0] == arr1p[1]) && (arr1p[1] != arr1p[2]) && (arr1p[2] != arr1p[3]) &&(arr1p[3] != arr1p[4]))||
        ((arr1p[0] != arr1p[1]) && (arr1p[1] == arr1p[2]) && (arr1p[2] != arr1p[3]) &&(arr1p[3] != arr1p[4]))||
        ((arr1p[0] != arr1p[1]) && (arr1p[1] != arr1p[2]) && (arr1p[2] == arr1p[3]) &&(arr1p[3] != arr1p[4]))||
        ((arr1p[0] != arr1p[1]) && (arr1p[1] != arr1p[2]) && (arr1p[2] != arr1p[3]) &&(arr1p[3] == arr1p[4]))
    ){
        res1 = `Un par`
        puntaje1 = 2
    }else{
        res1 = `todas las cartas son distintas`
        puntaje1 = 1

    }
    
      /***comprueba escala real */
  if ( arr2p[1] == arr2p[0]+1 &&
    arr2p[2] == arr2p[1]+1 &&
    arr2p[3] == arr2p[2]+1 &&
    arr2p[4] == arr2p[3]+1 
    ){
        res2 = "Escalera Real"
        puntaje2 = 7
    }else

/****Fin comprueba escala real */
/****comprueba poker */
if (    (arr2p[0] == arr2p[1] &&
        arr2p[1] == arr2p[2] &&
        arr2p[2] == arr2p[3] ) ||
        (arr2p[1] == arr2p[2] &&
        arr2p[2] == arr2p[3] &&
        arr2p[3] == arr2p[4] ) 
    ){
        res2 = `Poker de ${arr2p[2]}`
        puntaje2 = 6
    }else

/****comprueba trio */

    if (    (arr2p[0] == arr2p[1] && arr2p[1] == arr2p[2]) ||
            (arr2p[1] == arr2p[2] && arr2p[2] == arr2p[3]) ||
            (arr2p[2] == arr2p[3] && arr2p[3] == arr2p[4]) 
        
    ){
        res2 = `trio`
        puntaje2  = 4
    }

/****fin comprueba trio */
/****comprueba full */
if ((arr2p[0] == arr2p[1]) &&
    (arr2p[2] == arr2p[3] &&
    arr2p[3] == arr2p[4]  ) &&
    (arr2p[0] != arr2p[4]) ||
    (arr2p[0] == arr2p[1] &&
     arr2p[2] == arr2p[3]) &&
    (arr2p[3] == arr2p[4]) &&
    (arr2p[0] != arr2p[4]) 
) {
    res2 = `Full`
    puntaje2 = 5
}

/****fin comprueba full */
/**** comprueba dos pares */
if ((arr2p[0] == arr2p[1]) &&
    (arr2p[2] == arr2p[3]) &&
    ((arr2p[0] != arr2p[2])&&(arr2p[0] != arr2p[4]))
    ||
    (arr2p[0] == arr2p[1]) &&
    (arr2p[3] == arr2p[4]) &&
    ((arr2p[0] != arr2p[3])&&(arr2p[0] != arr2p[4]))
    ||
    ((arr2p[1] == arr2p[2]) &&
    (arr2p[3] == arr2p[4]) &&
    ((arr2p[0] != arr2p[2])&&(arr2p[0] != arr2p[4]))) 
) {
    res2 = `Dos Pares`
    puntaje2 = 3
}else
/**comprueba 1 par */
if(
    ((arr2p[0] == arr2p[1]) && (arr2p[1] != arr2p[2]) && (arr2p[2] != arr2p[3]) &&(arr2p[3] != arr2p[4]))||
    ((arr2p[0] != arr2p[1]) && (arr2p[1] == arr2p[2]) && (arr2p[2] != arr2p[3]) &&(arr2p[3] != arr2p[4]))||
    ((arr2p[0] != arr2p[1]) && (arr2p[1] != arr2p[2]) && (arr2p[2] == arr2p[3]) &&(arr2p[3] != arr2p[4]))||
    ((arr2p[0] != arr2p[1]) && (arr2p[1] != arr2p[2]) && (arr2p[2] != arr2p[3]) &&(arr2p[3] == arr2p[4]))
){
    res2 = `Un par`
    puntaje2 = 2
}else{
    res2 = `todas las cartas son distintas`
    puntaje2 = 1

}
if(puntaje1>puntaje2){
    //gana 1p
}else if (puntaje1<puntaje2){
    //gana 2p
}else{
    //empataron
}
}