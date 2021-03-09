

function verificar(){

    let c = new Cliente();
   try {

    c.rut = document.getElementById('rut').value
    c.nombre = document.getElementById('nombre').value
    c.apellido = document.getElementById('apellido').value
    c.direccion = document.getElementById('direccion').value

    if (c.rut.length != 0) {
        let res = c.validarRutCliente();
        if (res == true) {
            rut.setCustomValidity("RUT valido"); return true
        }else{
        rut.setCustomValidity("RUT Inválido"); return false
        }
    }else{
        rut.setCustomValidity("Favor ingrese su rut"); return false
    }

    if (condition) {
        
    }
    

   } catch (error) {
       
   }
      


}

function imprimir(){

    alert("estoy imprimiendo")
}



