// Dado el siguiente array:
// myArray = ['casa','árbol','queso','perro','presidente','pare','barrio']
// Se debe ordenar alfabéticamente, creando otro array como resultado. (revisar método sort())
// Luego de ordenarlo, debe elegir cualquiera de las opciones de bucles 
// para recorrerlo y mostrar la primera letra de cada string.

const myArray = ['casa','arbol','queso','perro','presidente','pare','barrio']
orden = [];

for(i=0; i<=myArray.length;++i){
    myArray.sort();
    orden = myArray;
};
console.log(orden);