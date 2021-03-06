class cliente{
    constructor(rut,dv){
        
        this.dv = dv;


    }

    validarRut(){
        
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