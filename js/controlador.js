

function iniciar() {
    nameField.addEventListener("input", validacionNombre, false);
    }
function validarTexto(txt){
    
        var x = txt;
        var regxNom = new RegExp('^[A-Z]+$', 'i')
        var valNom = regxNom.test(x)
        if (x.length == 0 || x.length > 50 || !valNom) {
         
          return false;
        }else{
            return true;
        }   
      
}

function validarTexto2(txt){
    
    var x = txt;
    var regxNom = new RegExp('^[A-Z]+$', 'i')
    var valNom = regxNom.test(x)
    if (x.length == 0 || x.length > 20 || !valNom) {
     
      return false;
    }else{
        return true;
    }   
  
}

function validarDireccion(txt){
    
    var x = txt;
    var regxNom = new RegExp('^[A-Z+ +0-9]+$', 'i')
    var valNom = regxNom.test(x)
    if (x.length == 0 || x.length < 5 || !valNom) {
     
      return false;
    }else{
        return true;
    }
  
  
    
  
}

  
function crearValidarCliente(){

    var flag = new Cliente();
    flag.crearCliente();
    rut.setCustomValidity('');
    nombre.setCustomValidity('');
    apellido.setCustomValidity('');
    direccion.setCustomValidity('');
    let imp = "Boleta del cliente";

    if (flag.validarRut() == false) {
        rut.setCustomValidity("RUT Inválido")
    }else{
        imp=imp+"\nRut  : "+flag.rut;
    }
    if (validarTexto(flag.nombre)==false) {
        nombre.setCustomValidity("Nombre Inválido")
        
    }else{
        imp=imp+"\nNombre  : "+flag.nombre;
    }
    if (validarTexto(flag.apellido)==false) {
        apellido.setCustomValidity("Apellido Inválido")
        
    }else{
        imp=imp+"\nApellido  : "+flag.apellido;
    }
    if (validarDireccion(flag.direccion)==false) {
        direccion.setCustomValidity("Direccion Inválida")
        
    }else{
        imp=imp+"\nDireccion  : "+flag.direccion;
    }

    
    return(imp)

}

function crearValidarVehiculo(txt){

    let band = new Vehiculo();
    imp = txt+"\n-----------------------------------\nVehiculo a trabajar";
    marca.setCustomValidity('');
    modelo.setCustomValidity('');
    año.setCustomValidity('');
    band.crearVehiculo();

    if (validarTexto2(band.marca)==false ) {
        marca.setCustomValidity("Determine la marca del vehiculo")
       
    }else{
        imp=imp+"\nMarca de vehiculo  : "+band.marca;
    }
    if (validarTexto2(band.modelo)==false ) {
        modelo.setCustomValidity("Determine el modelo del vehiculo")
        
    }else{
        imp=imp+"\nModelo de vehiculo  : "+band.modelo;
    }


    if (band.validarAño(band.año)==false) {
        año.setCustomValidity("Determine el año del vehiculo")
        
    }else{
        imp=imp+"\nModelo de vehiculo  : "+band.año;
    }

    return(imp);
    
}

function generarValidarVenta(txt){
    let x = new Venta()
    let imp = txt+"\n-----------------------------------\nVehiculo a trabajar";
    
    x.encargado = x.generarEncargado(document.getElementById("servicio").value)
    let venta = x.generarVenta(txt)
    if (x.encargado != "no" && document.getElementById("servicio").value == "no" ) {
        encargado.setCustomValidity("Determine los detalles de la venta")
           
    }else{
        imp=imp+venta;
    }

    return(imp)
    

}

function imprimir(){
    let resp1 = crearValidarCliente();
    if (resp1 != " ") {
       resp2 = crearValidarVehiculo(resp1);
       if (resp2 != " ") {

        alert(generarValidarVenta(resp2))
           
       }else{
        
       }
    }


}




window.addEventListener("load", iniciar, false);


