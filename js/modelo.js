class cliente{
    constructor(rut,dv){
        this.rut = rut
        this.dv = dv;

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