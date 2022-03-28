import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroBusqueda'
})
export class FiltroBusquedaPipe implements PipeTransform {

  transform(valorIntroducido: any[], filtro?: any): any {
    return valorIntroducido.filter(function (contenido){
      return JSON.stringify(contenido).toLowerCase().includes(filtro.toLowerCase());
    })
  }

}
