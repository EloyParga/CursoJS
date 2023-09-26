/* 📌 Operadores Lógicos 
	&& 	And
	||	OR
	! 	NOT
*/

// Ejemplo #1 - &&
const permitirAcceso = edad >= 18 && tieneEntrada;
console.log('Acceso permitido al concierto: ' + permitirAcceso);

// Ejemplo #2 - OR
const permitirAcceso2 = (edad >= 18 && tieneEntrada) || (tienePermiso && tieneEntrada);
console.log('Acceso permitido al concierto: ' + permitirAcceso);

// Ejemplo #3 - !
const variable = false;
console.log(!variable);

