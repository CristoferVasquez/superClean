
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

function imprimir(){

    alert("estoy imprimiendo")
}



