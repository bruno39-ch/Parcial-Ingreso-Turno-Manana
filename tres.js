/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	var nombre;
	var lugar;
	var temporada;
	var cantidad;


	var contadorBariloche=0;
	var contadorCataratas=0;
	var contadorSalta=0;
	var lugarMasElegido;

	var titularConMasPasajeros;
	var titularConCantidadPasajeros;
	

	var promedio=0;
	var contadorPersonasEnInvierno;
	var viajesAinvierno=0;

	var primeraVez = true;
	respuesta = true;
	while(respuesta){
		nombre = prompt("Ingrese el nombre del titular");
		
		do{
			lugar = prompt("ingrese el lugar");
		}while(lugar != "bariloche" 
		&& lugar != "cataratas"
		&& lugar != "salta");

		do{
			temporada = prompt("Ingrese la temporada");
		}while(temporada != "otoño"
		&& temporada != "invierno"
		&& temporada != "verano"
		&& temporada != "primevarea");

		do{
			cantidad = prompt("Ingrese la cantidad de personas que viajan");
			cantidad = parseInt(cantidad);
		}while(isNaN(cantidad) || cantidad < 1);

		//1
		switch(lugar){
			case "bariloche":
				contadorBariloche++;
				break;
			case "cataratas":
				contadorCataratas++;
				break;
			case "salta":
				contadorSalta++;
				break;
		}
		//2
		if(primeraVez){
			primeraVez = false;
			nombre = titularConMasPasajeros;
			titularConCantidadPasajeros = cantidad;
		}else{
			if(cantidad > titularConCantidadPasajeros){
				nombre = titularConMasPasajeros;
				titularConCantidadPasajeros = cantidad
			}
		}

		//3
		if(temporada == "invierno"){
			viajesAinvierno++;
			contadorPersonasEnInvierno += cantidad;
		}
		respuesta = confirm("Ingresan mas titulares?");
	}
	//1
	if(contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta){
		lugarMasElegido = "bariloche";
	}else{
		if(contadorCataratas > contadorSalta){
			lugarMasElegido = "cataratas";
		}else{
			lugarMasElegido = "salta";
		}
	}
	promedio = contadorPersonasEnInvierno / viajesAinvierno;
	document.write("Lugar mas elegido: "+lugarMasElegido);
	document.write("<br>Nombre del titular con mas pasajeros: "+titularConMasPasajeros);
	document.write("<br>Promedio de personas que viajan en invierno: "+promedio);
}
