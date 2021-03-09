

function crearClientes(){

    let c = new Cliente();
   try {
    c.rut = document.getElementById('rut').value;
    c.nombre = document.getElementById('nombre').value;
    c.apellido = document.getElementById('apellido').value;
    c.direccion = document.getElementById('direccion').value

    let res = c.validarRutCliente();
    let res2 = c.validarText();

    if (c.rut.length == 0) {
        
        rut.setCustomValidity("Favor ingrese su rut"); return false;
       
    }else{
        if (res == true) {
            rut.setCustomValidity("RUT valido"); return true; 
        }else{
        rut.setCustomValidity("RUT Inválido"); return false; 
        }
    }
    
    


    if (condition) {
        
    }

    

   } catch (error) {
       
   }


      

}

function imprimir(){

    alert("estoy imprimiendo")
}



