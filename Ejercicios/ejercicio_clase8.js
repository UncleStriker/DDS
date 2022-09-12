// Debe generar un script que permita ingresar por pantalla un arreglo de números enteros. 
// Para terminar de ingresar valores, debe ingresar el numero -1. 
// Debe validar que cada valor ingresado corresponda a un numero entero (vea el método isInteger())
// Se debe ordenar los valores del array. (revisar método sort())
// Luego de ordenarlo, debe elegir cualquiera de las opciones de bucles para recorrerlo y 
// mostrar cada numero (función alert()).

num = 0;
arr = [];
i = 0;
while(num != -1){
    num = window.prompt("Ingrese un numero entero (salir: -1): ")
    if(Number.isInteger(num) == false ){
        i++;
        arr[i] == num;
    }
    else{
        console.log("Ingrese un numero entero")
    }
    console.log(arr[i]);
}
