
    

function imprimir(){

    var flag = new Cliente();
    flag.rut = document.getElementById('rut').value
    flag.nombre = document.getElementById('nombre').value
    flag.apellido = document.getElementById('apellido').value
    //flag.direccion = document.getElementById('direccion').value

    var res = flag.validarRutCliente();
    var res2  = flag.validarNombre();
    var res3 = flag.validarApellido();


  

    if (res == false) {
        rut.setCustomValidity("RUT Inválido")
    }
    if (res2 == false) {
        nombre.setCustomValidity("Nombre Inválido")
    }
    if (res3 == false) {
        apellido.setCustomValidity("Apellido Inválido")
    }


}



