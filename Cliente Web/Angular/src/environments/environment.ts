// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  //Tiempo que tarda en irse el mensaje de exito
  timerToast : 4000,
  //Frase del Toast al Eliminar Con Exito
  fraseEliminar: 'Se ha Eliminado Correctamente',
  //Frase del Toast al Modificar Con Exito
  fraseModificar: 'Se ha Modificado Correctamente',
  //Frase del Toast al Crear Con Exito
  fraseCrear: 'Se ha Creado Correctamente',
  //Frase de error al Eliminar del Toast
  fraseErrorEliminar: 'Se ha Producido Un Error Inesperado',
  //Frase de error al Modificar del Toast
  fraseErrorModificar: 'Se ha Producido Un Error Inesperado',
  //Frase de error al Crear del Toast
  fraseErrorCrear: 'Se ha Producido Un Error Inesperado',


  //Modal
  //Color del Boton Aceptar del Modal
  colorAceptarModal: '#198754',
  //Color del Boton Cancelar del Modal
  colorCancelarModal: '#d33',
  //Frase de Confirmación para Eliminar
  fraseEliminarModal: '¿Desea Eliminar este Elemento?',
  urlBase: 'http://localhost:8000/api-rest/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
