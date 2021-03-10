class Cliente{
    constructor(){
    }

    crearCliente(){
        try {
            this.rut = document.getElementById('rut').value
            this.nombre = document.getElementById('nombre').value
            this.apellido = document.getElementById('apellido').value
            this.direccion = document.getElementById('direccion').value
            
        } catch (error) {
            alert("llene todo")
        }

    }

    validarRut(){
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
    
      return validar;
    }

}



class Vehiculo{
    constructor(patente){
    }
    crearVehiculo(){
        try {

            this.marca = document.getElementById('marca').value
            this.modelo = document.getElementById('modelo').value
            this.año = document.getElementById('año').value
            
        } catch (error) {
            alert("llene todo")
        }
    }

    validarAño(){

        var regxNom = new RegExp('^[0-9]+$', 'i')
        var valNom = regxNom.test(this.año)
        if (this.año == 0 || (this.año < 1900  && this.año >2021)||  !valNom) {
     
            return false;
          }else{
              return true;
          }
    }


}

class Venta{
    constructor(){
      
    }

  

    generarVenta(txt){

    try {
    this.encargado = document.getElementById('encargado').value
    this.precio =  document.getElementById('servicio').value
    let precioFinal = this.precio+this.precio*(0.19);
    return(txt+"\n------------------------------\nUsted a sido atendido por : "+this.encargado+"\nPago total"+precioFinal)
  

} catch (error) {
    
}

    }

  

}