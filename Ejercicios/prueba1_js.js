/**
 * A través de una aplicación escrita en Javascript, el estudiante deberá idear un método para registrar 
 * los datos pluviométricos del mes de septiembre,
 *  de la siguiente manera:
 */
 var dia = ["lun","mar","mier","jue","vier","sab","dom"];
 var fecha = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
 var mm_lluvia = [0.2,0,0.2,0,17,3.1,5,8,9,0.2,0.2,0,17,3.1,5,0.2,0,0.2,0,17,3.1];

var j = 3;
var k = 0;
var x = 0;
var suma_mm = [];
var prom_semanal = [];
for(var i = 0; i < fecha.length; i++) {

    dia_semana = dia[j]+ " " + fecha[i] + " " + mm_lluvia[k];
    
    k++;
    j++;
    x++;
    if(j >6) {
        j =0;
    };
    if(k > 20){
        k = 0;
    };

 
    suma_mm = suma_mm[i] + mm_lluvia[k];
    // console.log("suma hasta el dia: ", suma_mm);
    // suma_mm = suma_mm + float(mm_lluvia[k]);
    for(x = 0; fecha>0;fecha<6,x++){
        prom_semanal[0] = prom_semanal[x] + mm_lluvia[k];
    };
    for(x = 6; fecha>0;fecha<6,x++){
        prom_semanal[1] = prom_semanal[x] + mm_lluvia[k];
    };
    for(x = 0; fecha>0;fecha<6,x++){
        prom_semanal[2] = prom_semanal[x] + mm_lluvia[k];
    };
    for(x = 0; fecha>0;fecha<6,x++){
        prom_semanal[3] = prom_semanal[x] + mm_lluvia[k];
    };
    for(x = 0; fecha>0;fecha<6,x++){
        prom_semanal[4] = prom_semanal[x] + mm_lluvia[k];
    };

    console.log(dia_semana);
};
console.log(mm_lluvia);
console.log("La suma de los milimetros caidos fueron: "+ suma_mm);
console.log("Promedio de la semana 1: " + prom_semanal[0]);
console.log("Promedio de la semana 2: " + prom_semanal[1]);
console.log("Promedio de la semana 3: " + prom_semanal[2]);
console.log("Promedio de la semana 4: " + prom_semanal[3]);

//var mm_lluvia = prompt(Number("Ingrese los milimetros de aguas caida: "));