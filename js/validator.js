function solotexto(txt){
    var x = txt
    var regxNom = new RegExp('^[A-Z]+$', 'i')
    var valNom = regxNom.test(x)
    if (x.length == 0 || x.length >50 || !valNom) {
     
      return false;
    }
  
    return (true);
  }
    