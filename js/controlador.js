function validate() {
    
    var rut = document.getElementById('rut').value;
    if( rut.length == 0|| isNaN(rut) ) {
       alert( "El rut indicado es incorrecto!" );
       document.formularioContacto.rut.focus() ;
       return false;
    }

    var dv = document.getElementById('dv').value;
    if( dv.length == 0|| isNaN(dv) ) {
      alert( "El digito verificador indicado es incorrecto!" );
      document.formularioContacto.rut.focus() ;
      return false;
   }
   

    return( true );
 }