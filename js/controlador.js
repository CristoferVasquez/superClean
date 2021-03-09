

function verificar(){

    let c = new Cliente();
   
        c.rut = document.getElementById('rut').value;

        if (c.rut.length != 0) {
            let res = c.validarRutCliente();
            if (res == true) {
                rut.setCustomValidity("RUT valido"); return true; 
            }else{
            rut.setCustomValidity("RUT Inválido"); return false; 
            }
        }else{
            alert("ingrese rut");
        }
        alert(res+c.rut);
      /*  c.nombre = document.getElementById('nombre').value;
        c.apellido = document.getElementById('apellido').value;
        c.direccion = document.getElementById('direccion').value
*/

      /*  let res2 = c.validarText(c.nombre);
        let res3 = c.validarText(c.apellido);

        alert(res+"-"+res2)
       
      */

        
    
 



}

function imprimir(){

    alert("estoy imprimiendo")
}



