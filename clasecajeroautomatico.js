
class Billete
{
  constructor(nombre, valor, cantidad)
  {
    this.imagen     = new Image();
    this.valor      = valor;
    this.cantidad   = cantidad;
    this.nombre     = nombre;
    this.imagen.src = imagenes[this.nombre]; //el arreglo imagenes esta en = recargaCajeroAutomatico.js
  }
  hablar()
  {
    document.body.appendChild(this.imagen);
    resultado.innerHTML += "    de " + this.valor +  " la Cantidad de : "  + this.cantidad + "<br/>";
    //alert (" Se va a entregar  de :  " + this.valor +  " la Cantidad de : "  + this.cantidad );
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
    //document.write("<strong>" + this.nombre + "</strong><br />");
    //document.write("Valor : " + this.valor + "<br />");
    //document.write("Cantidad : " + this.cantidad + "<hr />");
    resultado.innerHTML += "NOMBRE " + this.nombre +  " this.imagen.src " + this.imagen.src + "<br>";
  }
}
