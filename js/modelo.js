class Cliente{
    constructor(){      
    }

    validarCliente(){
       let rut = document.getElementById('rut');
       let validar =  Fn.validaRut(rut) ? true : false;

       return(validar)
    }

}

class Vehiculo{
    constructor(patente){
        this.patente = patente;
    }
}

class Venta{
    constructor(vehiculo,cliente){
        this.vehiculo = vehiculo;
        this.cliente = cliente;
    }
}