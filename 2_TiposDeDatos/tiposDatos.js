/* 📌 Tipos de datos que podemos guardar en las variables:
    string - Cadena de Texto
    number - Numero
    boolean - Booleano (verdadero o falso)
    object - Objeto
    function - Funciones

	null - Valor nulo
	undefined - Valor sin definir
*/

// 📌 Cadena de Texto
const nombre = 'Carlos';
const parrafo = "Este es un 'parrafo'";
const parrafo2 = 'Este es un "parrafo"';
// const parrafo3 = 'Este es un \'parrafo\'';

// 📌 Numero
const numero = 4;
const numero2 = -4.123;

// 📌 Boleano
const usuarioConectado = false;
const mayorQue = 10 > 2;

console.log(mayorQue);

// 📌 Arrays
const array = ['texto', 5, true, {propiedad:'valor'}, [1,2,3]];
console.log(array);

//📌 Objetos
const persona = {
    nombre: 'Eloy', 
    edad:23, 
    mas18:true
};

console.log(persona.nombre)


//📌 Funciones
function hola(){
    console.log('HOLA');
}
hola();

