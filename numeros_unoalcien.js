
 
	function imprimir(frase){
		document.write(frase + ", ");
		
	}
	// Inicializar la variable i en 1
	var i = 1;

	// Iniciar un bucle while que se ejecuta mientras i es menor o igual a 100
	while (i <= 100) {

		// Si el valor de i es par, llamar a la función imprimir() para imprimirlo
		if (i % 2 === 0) {
			imprimir(i);
		}

		// Incrementar la variable i en 1
		i++;
	}

	// Llamar a la función imprimir() para imprimir la palabra "FIN"
	imprimir("FIN");

