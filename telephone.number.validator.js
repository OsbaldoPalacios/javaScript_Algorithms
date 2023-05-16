function telephoneCheck(str) {
    // Expresión regular para validar el formato del número de teléfono
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  
    // Verificar si la cadena cumple con el formato del número de teléfono
    return regex.test(str);
  }