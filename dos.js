/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  var marca;
  var precio;
  var pesoKg;
  var tipo;

  var pesoTotal=0;
  var marcaMasCaroLiquidos;
  var precioMasCaroLiquido;

  var marcaMasLivianoSolidos;
  var pesoMasLivianoSolido;

  var primeraVezLiquido=true;
  var primeraVezSolido = true;
  var respuesta = true;
  while(respuesta){

    marca = prompt("Ingrese la marca");
    
    do{
      precio = prompt("Ingrese el precio");
      precio = parseInt(precio);
    }while(isNaN(precio) || precio < 1);
    
    do{
      pesoKg = prompt("Ingrese el peso en kg");
      pesoKg = parseInt(pesoKg);
    }while(isNaN(pesoKg) || pesoKg < 1);

    do{
      tipo = prompt("Ingrese que tipo de producto es");
    }while(tipo != "solido" && tipo != "liquido");

    //1
    pesoTotal += pesoKg;

    //2
    if(primeraVezLiquido && tipo == "liquido"){
      primeraVezLiquido = false;
      precioMasCaroLiquido = precio;
      marcaMasCaroLiquidos = marca;
    }else{
      if(precio > precioMasCaroLiquido && tipo == "liquido"){
        precioMasCaroLiquido = precio;
        marcaMasCaroLiquidos = marca;
      }
    }
    //3
    if(primeraVezSolido && tipo == "solido"){
      primeraVezSolido = false;
      pesoMasLivianoSolido = pesoKg;
      marcaMasLivianoSolidos = marca;
    }else{
      if(pesoKg < pesoMasLivianoSolido && tipo == "solido"){
        pesoMasLivianoSolido = pesoKg;
        marcaMasLivianoSolidos = marca;
      }
    }
    respuesta = confirm("Desea seguir comprando?");
  }

  document.write("Peso total: "+pesoTotal);

  if(marcaMasCaroLiquidos == undefined){
    document.write("<br>No hay liquidos");
  }else{
    document.write("<br>Marca mas cara de liquido: "+marcaMasCaroLiquidos+
  " con el precio "+precioMasCaroLiquido);
  }
  if(marcaMasLivianoSolidos == undefined){
    document.write("<br>No hay solidos");
  }else{
  document.write("<br>Marca mas liviana de solido : "+marcaMasLivianoSolidos+
  " con el peso "+pesoMasLivianoSolido);
  }
}
