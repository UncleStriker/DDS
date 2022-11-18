semana = ['L','M','X','J','V','S','D']
arr = []
diaSem = 3
diaMes = 1
sumatoria = 0
indiceSemana = 1
sumatoriaSemana = 0
for(i = 1 ; i<=30 ; ++i){
    pluv = Number(prompt(`Ingrese pluviomertia del día ${i}`))
    sumatoria+= pluv
    arr.push([diaSem, diaMes, pluv])
    ++diaMes
    ++diaSem
    if((diaSem == 7)){
        diaSem = 0
        console.log(`El promedio de la semana ${indiceSemana} es ${sumatoriaSemana/7}`)
        sumatoriaSemana=0
        indiceSemana++
    }else{
        sumatoriaSemana+=pluv
    }
    
}
console.log(arr)
console.log(`El promedio de lluvia de Septiembre es ${sumatoria/30}`)