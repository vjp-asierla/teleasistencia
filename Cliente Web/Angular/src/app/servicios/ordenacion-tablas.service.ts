import {Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class OrdenacionTablasService {

  ordenacionService(indice:number, tipoContenido: string){
    //Declaraciones iniciales a 0, luego pondran cambiar tanto valor como tipo.
    let tabla, rows, iAux, elemento1, elemento2, boolContinuar, cont = 0;
    // Booleano para saber si debo o no entrar en el bucle.
    let boolEntrada = true;
    //String donde guardaremos la direccion del filtrado.
    let dirFiltrado = "asc";
    //Seleccionamos y guardamos la tabla. *IMPORTANTE: Las tablas deben tener el id tableList para que pueden ser seleccionadas.
    tabla = document.getElementById("tableList");

    // Bucle de filtrado, los boolean deciden su recorrido.
    while (boolEntrada) {
      //start by saying: no switching is done:
      boolEntrada = false;
      //Cogemos los distintos campos de la tabla.
      rows = tabla.rows;
      // For donde nos recorremos la tabla, empieza en uno para no incluir la cabecera.
      for (let i = 1; i < rows.length - 1; i++) {
        iAux = i;
        //Por defecto no accedemos a cambiar el orden de los campos.
        boolContinuar = false;
        // Vamos seleccionando los distintos campos a comparar.
        elemento1 = rows[iAux].getElementsByTagName("td")[indice];
        elemento2 = rows[iAux + 1].getElementsByTagName("td")[indice];
        // Tenemos que tener en cuanta la dirección del filtrado, asc por defecto, desc sería la alternativa, pero al solo tener dos nos ahorramos la pregunta.
        if (dirFiltrado == "asc") {
          if ((tipoContenido == "string" && elemento1.innerHTML.toLowerCase() > elemento2.innerHTML.toLowerCase()) || (tipoContenido == "number" && parseFloat(elemento1.innerHTML) > parseFloat(elemento2.innerHTML))) {
            //El boolean indica un cambio de orden en la tabla
            boolContinuar = true;
            break;
          }
        } else {
          if ((tipoContenido == "string" && elemento1.innerHTML.toLowerCase() < elemento2.innerHTML.toLowerCase()) || (tipoContenido == "number" && parseFloat(elemento1.innerHTML) < parseFloat(elemento2.innerHTML))) {
            //El boolean indica un cambio de orden en la tabla
            boolContinuar = true;
            break;
          }
        }
      }
      //Si hemos detectado que debe cambiar el orden del contenido, entramos.
      if (boolContinuar) {
        rows[iAux].parentNode.insertBefore(rows[iAux + 1], rows[iAux]);
        boolEntrada = true;
        //Aumentamos el contador para la siguiente clausula.
        cont++;
      } else {
        // Si no hemos cambiado nada, cambiamos el modo a descendente y autorizamos la entrada al bucle de nuevo.
        if (cont == 0 && dirFiltrado == "asc") {
          dirFiltrado = "desc";
          boolEntrada = true;
        }
      }
    }
  }




}
