const a =[];
const b =[1,true,"hola",["A","B","C","D","E"]];
console.log(a);
console.log(b);
console.log(b.length);
console.log(b[2]);
console.log(b[0]);
console.log(b[3]);
console.log(b[3][2]);
console.log(b[3][3][0]);

const c = Array.of("X","Y","Z",9,8,7);
console.log(c);

const d = Array(100).fill(false);
console.log(d);

const colores = ["Rojo","Verde","Azul"];
console.log(colores);

// colores.pop(); 
console.log(colores);

colores.forEach(function(el){
    console.log(`<li id="">${el}</li>`);    
});
colores.forEach(function(el, index){
    console.log(`<li id="${index}">${el}</li>`);    
});

