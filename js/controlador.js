

function verificar(){

    let c = new Cliente();
    try {

        c.rut = document.getElementById('rut').value;
        c.nombre = document.getElementById('nombre').value;
        c.apellido = document.getElementById('apellido').value;
        /*c.direccion = document.getElementById('direccion').value
*/

        let res = c.validarRutCliente();
        let res2 = c.validarText(c.nombre);
        let res3 = c.validarText(c.apellido);
        let res4 = c.validarDire(c.direccion);

        alert(res+"-"+res2)
       
      
    
    } catch (error) {

       alert(error);
    }



}

function imprimir(){

    alert("estoy imprimiendo")
}



