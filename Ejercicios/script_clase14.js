var body = document.body
var mensajes = [
    "cambiame el color",
    "cambiame el backgrunnd",
    "hazme invisible",
    "cambiame el cursor",
    "improvisa y experimenta",
    "me convienrto en mayuscula"
];

for(i = 0; i <= 5; i++){
    label = document.createElement('label')
    label.innerText = mensajes[i]

    switch(i){
        // case 0: label.style.color = 'red';break;
        case 0: label.style.color = 'green';break;
        case 1: label.style.backgroundColor  = 'aqua';break;    
        case 2: label.style.display = 'none';break;
        case 3: label.style.cursor = 'pointer';break;
        case 4: label.style.textDecorationLine = 'line-through';break;
        case 5: label.style.textTransform = 'uppercase';
        label.style.cssText = "display: block; position: absolute";        default:break;

    }
    br = document.createElement('br')
    body.appendChild(label)
    body.appendChild(br)
}   


