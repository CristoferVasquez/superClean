

function verificarCliente(rut){



      

}

function imprimir(){
    let c = new Cliente();
    try {

        c.rut = document.getElementById('rut').value;
        c.nombre = document.getElementById('nombre').value;
        c.apellido = document.getElementById('apellido').value;
        c.direccion = document.getElementById('direccion').value;


    } catch (error) {
        
    }

    alert("estoy imprimiendo")
}



