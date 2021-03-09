
function verificar(){
    var flag = new Cliente();
   try {

    flag.rut = document.getElementById('rut').value
    flag.nombre = document.getElementById('nombre').value
    flag.apellido = document.getElementById('apellido').value
    flag.direccion = document.getElementById('direccion').value


    if (flag.rut.length != 0) {
        let res = flag.validarRutCliente();
        if (res == true) {
            rut.setCustomValidity("RUT valido"); return true
        }else{
        rut.setCustomValidity("RUT Inválido"); return false
        }
    }else{
        rut.setCustomValidity("Favor ingrese su rut"); return false
    }


   } catch (error) {
       
   }
      


}

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
    flag.apellido = document.getElementById('apellido').value
    flag.direccion = document.getElementById('direccion').value

    
    var y  = solotexto(flag.nombre);


    if (y == true ) {
        nombre.setCustomValidity("Nombre valido"); return true
    }else{
        nombre.setCustomValidity("Nombre invalido"); return true
    }
}



