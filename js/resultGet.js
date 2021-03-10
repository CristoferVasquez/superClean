
function imprimirBoleta(){
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
  
    var rut = urlParams.get('rut');
    var nombre = urlParams.get('nombre');
    var apellido = urlParams.get('apellido');
    var direccion = urlParams.get('direccion');
    var tipoVehiculo = urlParams.get('tipoVehiculo');
    var marca = urlParams.get('marca');
    var año = urlParams.get('año');
    var encargado = urlParams.get('encargado');
    var servicio = urlParams.get('servicio');
   
   
    var total = parseInt(servicio) + (servicio*0.19);

    let texto = "Superclean\nBoleta Servicio de limpieza "+
                    "\nCliente\nRut:"+rut+"\nNombre Completo: "+nombre+
                    " "+apellido+"\nDireccion: "+direccion+"\n-----------------------------"+
                    "\nVehiculo\Tipo de vehiculo: "+tipoVehiculo+"\nMarca: "+marca+
                    "\nAño de vehiculo: "+año+"\n----------------------------------\nServicios y costo"+
                    "\nEncargado: "+encargado
                    +"\nPrecio a pagar "+total+" IVA Incluido";

    console.log(texto);
}

