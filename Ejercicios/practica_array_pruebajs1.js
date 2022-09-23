
// let numbers = [2,5,6,8,3,1];
// console.log(numbers);
// console.log(numbers.length);
// // console.log(numbers[0]);

// /**
//  * recorrido FOR del array de 0 hasta
//  * su ultima posicion
//  * "INCREMENTO" i++
//  */
// for(let i=0 ; i<numbers.length; i++){
//     console.log(numbers[i]);
// };
// console.log("~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~");
// /**
//  * recorrido FOR del array desde su
//  * ultima posicion hasta 0
//  * "DECREMENTO" i--
//  */
// for(let i=numbers.length -1 ; i >=0; i--){
//     console.log(numbers[i]);
// };
// // console.log(numbers.sort());
// console.log("~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~");

// show(numbers);
// function show(arr){
//     for(let i=0 ; i<arr.length; i++){
//         console.log(arr[i]);
//     };
// };

let Beers = ["Budwiser","Royal Guard","Heineken"];
let wines = ["chardonay","merlot","cabernet"];
const alcoholicDrinks = Beers.concat(wines);

const numbers = [1,2,3,4,5,6];
const arr = [...numbers];
console.log(arr);
console.log(Beers);
console.log(wines);
console.log(alcoholicDrinks);


/**MUTABLES
 */
Beers.push("Baltica");//pone un elemento al final del array
Beers.unshift("Cristal");//pone un elemento al principio del array
Beers.splice(2,0,"Escudo");//pone un elemento al medio del array
console.log(Beers);
Beers.fill("olakease",0,6);

let b = Beers.pop();//elimina el ultimo elemento del array y lo muestra por pantalla
let b2 = Beers.shift();//elimina el primer elemento del array y lo muestra por pantalla
console.log(b);
console.log(b2);
console.log(Beers);


/**INMUTABLES
 */
console.log(Beers);
console.log(wines);

//const alcoholicDrinks = Beers.concat(wines);//concatena los 2 arrays en un nuevo array alcoholicDrinks
console.log(alcoholicDrinks);
alcoholicDrinks.push("Vodka");//agrega un elemento al final del array sin afectar a los otros dos concatenados
console.log(alcoholicDrinks);
console.log("Cervesas: ",Beers);
console.log("Vinos: ",wines);
