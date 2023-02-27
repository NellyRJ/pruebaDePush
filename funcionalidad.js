var x = 50;
var y = 30;

var suma = x+y;
var frutas = ["Manzana", "Pera", "Uva", "Mango"];

nombreFuncion("Nelly");

function nombreFuncion(nombre){

    alert("Hello esta es una alerta " + nombre);
}

/** Metodos string
 * 
 *  nombre.toUpperCase()
 * nombre.toLowerCase()
 * nombre.replace("a", "aaa")->Solo cambia la primera a que encuentra
 * nombre.replaceAll() -->cambia todas las letras que se programe
 * frutas.length()--> cantidad de elementos que existen en el arreglo
 * frutas.push()--> para agregar un nuevo elemento al arreglo
 * frutas.pop() --> funciona para retirar el ultimo elemento del arreglo
 * frutas.splice()--> recibe la posicion de donde se va borrar, y 
 * el segundo parametro es la cantidad de elementos a eliminar
 * frutas.find()-->
 * frutas.includes()--> buscar si tiene cierto elemento
 * frutas.forEach()-->
 * frutas.sort()-->
 * 
 * 
 * **/


var hoy = new Date(2023, 1, 1);

console.log("HOY ", hoy);

/** 
 * hoy.getDay()-->Obtener el dia actual
 * hoy.toLocalDateString()
 * 
 * var options = {year: "numeric", month: "2-digit", day: "2-digit"};
 * 
 * console.log("AÑO", hoy.toLocalDateString('en-us', options));
 * **/


/**
 * --Ciclos--
 * For
 * for(let i=0; i<5; i++){
 * 
 * }
 * 
 * While
 * let x = 0;
 * 
 * while(x<5){
 *  
 * x++;
 * }
 */