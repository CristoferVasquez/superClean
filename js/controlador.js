var flag = new Cliente();
/*c.nombre = document.getElementById('nombre').value
c.apellido = document.getElementById('apellido').value
c.direccion = document.getElementById('direccion').value
*/
function verificar(){
    var flag = new Cliente();
   try {

    flag.rut = document.getElementById('rut').value


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



