function Persona(nombre, apellido, edad, sexo){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.sexo = sexo;
    this.meses = meses
    this.dias = ((edad)*365) + ((meses)*30)
}

var arr = []
for(i=0; i<=2; i++){
    var nombre = prompt("Ingrese nombre")
    var apellido = prompt("Ingrese apellido")
    var edad = parseInt(prompt("Ingrese edad"))
    var meses = parseInt(prompt("Ingrese meses"))
    var sexo = prompt("Ingrese sexo")
    arr.push(new Persona(nombre, apellido, edad, sexo, meses))
}

console.log(arr);