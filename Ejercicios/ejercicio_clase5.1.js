// debe crear un factorial de un numero

function factorial (num){
    var total = 1
    for(i=1; i<=num; i++){
        total = total * i;
    }
    return (total);
}
var num = parseInt(prompt("Ingrese un numero para factorizar: "));
alert(`El factorial de ${num} es igual a ${factorial}`)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 var numero = 1
 