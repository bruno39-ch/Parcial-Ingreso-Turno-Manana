/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	var persona;

	var nombre;
	var tempertatura;
	var sexo;
	var edad;

	var cantidadHombres=0;
	var cantidadMujeres=0;

	var promedioEdad=0;
	
	var mujerConMasTemperatura;

	var primeraVez= true;
	var contador =0;
	while(contador < 3){
			contador++;

			nombre = prompt("Ingrese su nombre");
			do{
				tempertatura = prompt("Ingrese su tempertatura");
				tempertatura = parseInt(tempertatura);
			}while(isNaN(tempertatura));

			do{
				sexo = prompt("Ingrese su sexo: f/m");
			}while(sexo != "f" && sexo != "m");

			do{
				edad = prompt("Ingrese su edad");
				edad = parseInt(edad);
			}while(isNaN(edad));

			if(sexo == "f"){
				cantidadMujeres++;
			}else{
				cantidadHombres++;
			}

			promedioEdad =promedioEdad + edad;


			if(primeraVez && sexo == "f"){
				mujerConMasTemperatura = tempertatura;
			}else{
				if(tempertatura > mujerConMasTemperatura && sexo == "f"){
					mujerConMasTemperatura = tempertatura;
				}
			}
	}
	document.write("Cantidad de hombre: "+cantidadHombres);
	document.write("<br>Cantidad de mujeres: "+cantidadMujeres);
	document.write("<br>Promedio de edad: "+promedioEdad/5);
	if(mujerConMasTemperatura == undefined){
	document.write("<br>No hay mujeres");
	}else{
		document.write("<br>Mujer con mas tempertatura: "+mujerConMasTemperatura);
	}
}
