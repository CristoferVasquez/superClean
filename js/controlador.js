function verificar(){

    let c = new Cliente();
    let res = c.validarRutCliente();

    if(res==true){
        alert("rut valido")
    }else{
        alert("rut invalido"+c.rut)
    }

}

function imprimir(){

}




