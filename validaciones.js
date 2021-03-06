function validate() {

  var rut = document.getElementById('rut').value;
  if ((rut.length == 0 || rut.length !== 8) || isNaN(rut)) {
    alert("El rut indicado es incorrecto!");
    document.formularioContacto.rut.focus();
    return false;
  }

  var dv = document.getElementById('dv').value;
  var regx = new RegExp("^[0-9kK]{1}$")
  var valDv = regx.test(dv)
  if (dv.length == 0 || !valDv) {
    alert("El digito verificador indicado es incorrecto!");
    document.formularioContacto.dv.focus();
    return false;
  }

  var nombre = document.getElementById('nombre').value;
  var regxNom = new RegExp('^[A-Z]+$', 'i')
  var valNom = regxNom.test(nombre)
  if (nombre.length == 0 || nombre.length >50 || !valNom) {
    alert("El nombre indicado es incorrecto!");
    document.formularioContacto.nombre.focus();
    return false;
  }

  return (true);
}