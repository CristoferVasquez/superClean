class Cliente{
    constructor(){
        this.rut = document.getElementById('rut').value;/*
        this.nombre = document.getElementById('nombre').value;
        this.apellido = document.getElementById('apellido').value;
        this.direccion = document.getElementById('direccion').value;
        this.comuna = document.getElementById('comuna').value; */      
    }

    validarRutCliente(){

        var Fn = {
	
            validaRut : function (rutCompleto) {
                if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
                    return false;
                var tmp 	= rutCompleto.split('-');
                var digv	= tmp[1]; 
                var rut 	= tmp[0];
                if ( digv == 'K' ) digv = 'k' ;
                return (Fn.dv(rut) == digv );
            },
            dv : function(T){
                var M=0,S=1;
                for(;T;T=Math.floor(T/10))
                    S=(S+T%10*(9-M++%6))%11;
                return S?S-1:'k';
            }
        }
       
       let validar =  Fn.validaRut(this.rut) ? true : false;

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