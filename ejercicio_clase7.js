// Se debe crear un array de 10 números aleatorios entre 0 y 100.
// Debe elegir cualquiera de las opciones de bucles para recorrerlo, 
// mostrar cada número por pantalla y hacer la sumatoria correspondiente.
// Debe calcular el promedio de los 10 números y mostrarlo en pantalla


var arr = [];
var sumatoria = 0;

for(i=0; i <=10-1; ++i){
    arr = (Math.ceil(Math.random()*100));
    sumatoria+= sumatoria + arr[i];
console.log(arr);
console.log(sumatoria);
};  
