

var resultado           = document.getElementById('resultado');
var dinero_solicitado   = document.getElementById('button_dinero'); //prompt("Indique cuanto dinero del cajero requiere : ");
dinero_solicitado.addEventListener("click", entregarDinero);

var div                 = 0;
var papeles             = 0;
var total_cajero        = 0;


for (var t of caja)
{
  total_cajero = total_cajero + (t.valor * t.cantidad);

 //ESTE SOLO ENTRA AQUI LA PRIMERA VEZ
}

//alert ("DEBES DECARGAR POR POSICION DEL CAJERO Y NO POR MONTO TOTAL.......MOSCA MOSCA MOSCA");
//for (var t of caja)
//{
//  alert("contenido del vector : nombre " + t.nombre + " valor " + t.valor + " cantidad " + t.cantidad);

 //ESTE SOLO ENTRA AQUI LA PRIMERA VEZ
//}
function entregarDinero()
{
  var t                    = document.getElementById('text_dinero');
  var dinero               = parseInt(t.value);
  var monto_solicitado     = parseInt(dinero);
  var total_entregado      = 0;
  var entregado            = [];
  var espejo               = [];

  for ( var cc of caja) //MOSCA Creando un espejo
  {
     espejo.push (new Billete( cc.nombre, cc.valor, cc.cantidad)) ;
  }

  if (dinero <= total_cajero) //Si hay disponibilidad, dispensar dinero
  {
      for ( var b of caja) //para cada variable b colocar coleccicaja
      {
          if (dinero > 0)
          {
            nSi = 0;
            div = parseInt(dinero / b.valor); //Math.floor parseInt(dinero / b.valor);    //parseInt parseFloat( dinero / b.valor);
            if (dinero >= b.valor)               //si el dinero solicitado es mayour o igual al valor del vector
            {
              if (div > b.cantidad )
              {
                papeles = b.cantidad;
              }
              else
              {
                 papeles = div;
              } //if (div > b.cantidad )
              entregado.push (new Billete( b.nombre, b.valor, papeles)) ;
              dinero          = dinero - (b.valor * papeles);
              total_entregado = total_entregado + (b.valor * papeles);
              //CREO QUE SE RESTA AQUI LA Cantidad
              b.cantidad = b.cantidad - papeles;
            } //if dinero >= b.valor
          } //if (dinero > 0)
          else
          {

          } //if (dinero > 0)
      } //for ( var b of caja)

      if (total_entregado == monto_solicitado )
      {
        resultado.innerHTML = "Se Entregara : " + "<br>" ;
        for (var e of entregado)
        {
          e.hablar();  // valory y cantidad
          total_cajero = total_cajero - (e.valor * e.cantidad);
        }
        resultado.innerHTML += " Total disponible en el cajero : " + total_cajero;

      } //if (total_entregado == monto_solicitado )
      else {
          resultado.innerHTML = "Monto solicitado no podra ser dispensado " ;
          caja            = [];  // MOSCA
          for ( var b of espejo)       //MOSCA Retomando los valores originales de caja
          {
              caja.push (new Billete( b.nombre, b.valor, b.cantidad)); //MOSCA
          }
      } //if (total_entregado == monto_solicitado )
  } //if (dinero > total)
  else
  {
      resultado.innerHTML = "Monto no disponible !!! Total en el Cajero " + total_cajero + " y el Monto solicitado " + dinero;
    //  alert("Monto no disponible !!! Total en el Cajero " + total_cajero + " y el Monto solicitado " + dinero);
  }//if (dinero > total)
} //function entregarDinero()
