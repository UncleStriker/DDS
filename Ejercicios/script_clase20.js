// var miObj = {
//     nombre: "Pedro",
//     apellido: "Urdemales",
//     direccion:{
//         calle:"calle 1",
//         numero:123,
//         ciudad:"Valparaiso"
//     }
// }

// console.log(miObj.direccion.calle);

var miObj = {}
var arrObj = []

for(i=0;i<=5;i++){
    arrObj.push(
        {
            nombre:prompt("Ingrese nombre"),
            apellido:prompt("Ingrese apellido"),
            direccion:prompt({
                calle:"calle 1",
                numero:123,
                ciudad:"Valparaiso"
            })
        }

    )
}

// for(i=0; i<3; i++){
//         arrObj.forEach(personas=>{
//         console.log("Nombre:",personas.nombre);
//         console.log("Apellido:",personas.apellido);
//         console.log("Direccion:");
//         console.log("Calle:",personas.direccion.calle);
//         console.log("Numero:",personas.direccion.numero);
//         console.log("Numero:",personas.direccion.numero);
//     })
// }
