function solotexto(txt){
    var x = txt
    var regxNom = new RegExp('^[A-Z]+$', 'i')
    var valNom = regxNom.test(x)
    if (x.length == 0 || x.length >50 || !valNom) {
      return false;
    }
  
    return (true);
  }
    

function imprimir(){

    var flag = new Cliente();
    flag.rut = document.getElementById('rut').value
    flag.nombre = document.getElementById('nombre').value
    /*flag.apellido = document.getElementById('apellido').value
    flag.direccion = document.getElementById('direccion').value*/

    
    var res  = solotexto(flag.nombre);
    var res2 = flag.validarRutCliente();

    if (res2 == true) {
        rut.setCustomValidity("RUT valido")
    }else{
    rut.setCustomValidity("RUT Inválido")
    }
    


}



