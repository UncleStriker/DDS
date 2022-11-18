function generar_tabla(){
    //obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];

    //crea un elemento <table> y un elemento <body>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    //crea las celdas
    for(var i = 0; i <2 ; i++){
        //crea una hilera de la tabla
        var hilera = document.createElement("tr");

        for(var j = 0; j <2; j++){
            //crea un elemento <tr> y un nodo de texto, haz que el nodo de
            //texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla 
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("Celda en la hilera "+i+"columna "+j);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }

        //agrega la hilera al final de la tabla(al final del elemento tblBody)
        tblBody.appendChild(hilera);
    }

    //posiciona el <tbody> debajo del elemento <tabla>
    tabla.appendChild(tblBody);
    //appends <table> into <body>
    body.appendChild(tabla);
    //modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
    
}