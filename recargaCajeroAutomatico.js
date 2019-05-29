var imagenes = [];
imagenes[1]              = "uno.jpg";
imagenes[5]              = "cinco.jpg";
imagenes[10]             = "diez.jpg";
imagenes[20]             = "veinte.jpg";
imagenes[50]             = "cincuenta.jpg";
imagenes[100]            = "cien.jpg";

var valor_billete       = 0;
var cantidad_billete    = 0;
var cantidadRecarga     = 0;
var repeticion          = 1;
var caja                = [];
var salir               = false;

cantidadRecarga =  Math.floor(prompt("Cuantos tipos de Billete va a recargar? : "));

while (repeticion <= cantidadRecarga)
{
  valor_billete       =  parseInt(prompt("El valor del billete a recargar es : "));
  alert("Recarga nro: " + repeticion + " Se va a recargar los billetes cuyo valor es: " + valor_billete)
  cantidad_billete    =  parseInt(prompt("La Cantidad de billetes a recargar: "));
  //alert("RESUMEN Recarga nro: " + repeticion + " Se va a recargar los billetes cuyo valor es: " + valor_billete + " con la Cantidad de : " + cantidad_billete)
  caja.push(new Billete(parseInt(valor_billete),  parseInt(valor_billete), cantidad_billete));
  console.log(valor_billete);
  repeticion++;
}

repeticion = 1;
for ( var b of caja) //para cada variable b colocar coleccicaja
{
     alert("TERMINO LA RECARGA, RESUMEN == >> Recarga nro. : " + repeticion + " Valor del Billete " + b.valor + " con Cantidad : " + b.cantidad);
     repeticion++;
}
