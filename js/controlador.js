

function crearClientes(){

    let c = new Cliente();
   try {
    c.rut = document.getElementById('rut').value;
    c.nombre = document.getElementById('nombre').value;
    c.apellido = document.getElementById('apellido').value;
    c.direccion = document.getElementById('direccion').value

    let res = c.validarRutCliente();
    let res2 = c.validarText();

   if (res2 == true) {
    rut.setCustomValidity("Nombre correcto"); return true;
       
   }

    

   } catch (error) {
       
   }


      

}

function imprimir(){

    alert("estoy imprimiendo")
}



