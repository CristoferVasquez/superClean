class cliente{
    constructor(){
        
    }

    validarRut(){
       let rut = document.getElementById('rut');
       alert( Fn.validaRut(rut) ? 'Valido' : 'inválido');



    }

}

class vehiculo{
    constructor(patente){
        this.patente = patente;
    }
}

class venta{
    constructor(vehiculo,cliente){
        this.vehiculo = vehiculo;
        this.cliente = cliente;
    }
}