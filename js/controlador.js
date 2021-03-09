

function verificar(){

    let c = new Cliente();
   
        c.rut = document.getElementById('rut').value;
        
        if (c.rut.length != 0) {
            let res = c.validarRutCliente();
            alert(res+c.rut);
        }else{
            alert("ingrese rut");
        }
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



