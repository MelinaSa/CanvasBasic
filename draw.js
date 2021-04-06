//traigo de html
var text = document.getElementById("texto_input");
var boton  = document.getElementById("boton_input");
boton.addEventListener("click", eventoPorClick); //a;ad func, aqui no ejecuto por eso n hay()


//Dibujando en canvas

var d = document.getElementById("dibujito"); //id identificador en html
var ancho = d.width;
var lienzo = d.getContext("2d") ; //debemos especificar en 2d o 3d
console.log(lienzo) //no es necesario

//lines

function drawLine(color, x0, y0, xf, yf )
{
    lienzo.beginPath();   //arrancar un trazo
    lienzo.strokeStyle = color; //atributo, propiedad atua como variable ese el color
    lienzo.moveTo(x0, y0); //Ubicacion inicial
    lienzo.lineTo(xf, yf); //ubicacion final
    lienzo.stroke(); //Dibuja la linea
    lienzo.closePath(); //cierra mi linea sino continua en este punto e siguiente
}



//mi evento por click 

function eventoPorClick()
{
    var line_limit = parseInt(text.value);
    var ciclo = 0;
    var yinicial, xfinal;
    var space_lines = ancho/line_limit;
    var color = "#380A53"
    var marco = "#2A2A2A"
    
    

    //loop

    for (ciclo = 0;ciclo < line_limit; ciclo++)
    {
        
        yinicial = space_lines * ciclo;
        xfinal = space_lines * (ciclo +  1);
        drawLine(color, 0,yinicial,xfinal,300);
        console.log( "linea" + ciclo);
    }

    //dubujando marco

    drawLine(marco,0,0,0,300); //efecto anti align sign
    drawLine(marco,0,0,300,0);
    drawLine(marco,300,300,300,0);
    drawLine(marco,300,300,0,300);

}
