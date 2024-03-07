// Se te proponen una serie de ejercicios para practicar
// los arrays y el bucle for.

// Para resolver NO hay que utilizar ninguna funciÃ³n matemÃ¡tica
// Crea el cÃ³digo necesario para resolver los requerimientos

// Dado este array:
let arrayNumeros1 = [4, 5, 3, 8, 2, 7, 1, 6]
let arrayNumeros2 = [4, 2, 7, 1, 0, 6]
// o cualquier otro array solo con números

/***************************************************************************************/
// 1) Mostrar por consola la suma de todos los valores

/** Para que funcione con cualquier array entonces hago función */
function sumar(array){
    // variable que va guardando la suma
    let suma = 0
    //recorremos el array y guardandolo en suma
    for(let i = 0; i < array.length; i++){
        suma += array[i]
    }
    return suma;
}
// llamo la funcion sumar con los dos arrays del ejemplo
console.log(sumar(arrayNumeros1));
console.log(sumar(arrayNumeros2));

/***************************************************************************************/
// 2) Mostrar por consola el promedio

/**Creo la funcion promedio que es la suma de los valores/el tamaño del array */
function promedio(array){
    let suma = 0
    //agregamos a suma una variable que nos da el tamaño del array para hacer el promedio
    let tamano = array.length
    for(let i = 0; i < tamano; i++){
        suma += array[i]
    }
    let promedio = suma/tamano
    return promedio;
}

//Promedio
console.log(promedio(arrayNumeros1));
console.log(promedio(arrayNumeros2));

/***************************************************************************************/
// 3) Encontrar el valor máximo, 
/**Creo la función, creo una variable que sirve para comparar cada uno de los elementos
 * si el elemento es mayor que esta variable, la reemplaza,  
 */

function maximo(array) {
    let valorMaximo = 1
    //recorre el array y con el if vamos comparando elemento por elemento y guardamos el mayor
    for(let i = 0; i < array.length; i++){
        if(array[i] >= valorMaximo) {
            valorMaximo = array[i]
            i += i
        }
    }
    return valorMaximo
}

console.log(maximo(arrayNumeros1));
console.log(maximo(arrayNumeros2));

/***************************************************************************************/
//3.2 Encontrar el valor mínimo

console.log(arrayNumeros1);
console.log(arrayNumeros2);

// ahora vamos decreciendo para buscar el menor
function minimo(array) {

    let valorMinimo = 3

    for(let i = 0; i < array.length; i++){
        if(array[i] < valorMinimo){
            valorMinimo = array[i]
        }
    }
    return valorMinimo
}

console.log(minimo(arrayNumeros1));
console.log(minimo(arrayNumeros2));

/***************************************************************************************/
// 4) Sumar los valores con i­ndice par y restar los impares
function operacion(array){
    //creo variables que guarden los valores impares, pares y la variable donde se guarde el resultado
    let operacion = 0
    let impares = 0
    let pares = 0 
    /** Para el indice par como i empieza en 0, si va de dos en dos sólo recorre los
     * indice pares y los va sumando
     */
    for(let i = 0; i < array.length; i = i + 2){
        pares += array[i]
    }

    /**Para el indice par, hacemos que empiece el rrecorrido en 1 y que vaya de dos en dos */
    for(let j = 1; j < array.length; j = j + 2){
        impares += array[j]
    }
    /**Ya tenemos los dos valores para hacer la operación */
    operacion = pares - impares
    return operacion;
}
// resultado con los arrays
console.log(operacion(arrayNumeros1));
console.log(operacion(arrayNumeros2));

/***************************************************************************************/
// Dado estos arrays:
let arrayNombres1 = ["Federico", "Kayn", "Luis", "Mónica", "Nicolás", "Ricardo", "Sara", "Stephanie", "Yahved"]
let arrayNombres2 = ["Clint", "Robert", "James", "Anne", "Ingrid", "John", "Patricia", "Marie"]


// 5) Encontrar el elemento con el texto más largo y guardarlo en la variable varTextoMasLargo
/** A partir de ahora es conseguir lo que piden de los dos arrays, así que los junto y empiezo */
arrayNombres1 = arrayNombres1.concat(arrayNombres2)

//quiero saber el tamaño de cada uno de los elementos del array
for(let i=0; i < arrayNombres1.length; i++){
    console.log(arrayNombres1[i].length);
} /** ya se que sólo hay un valor */

/* for y if para recorrer el array y que vaya comparando el tamaño de cada elemento
 * La variable comparar empieza en 2, así que busca el primer tamaño si es mayor que
 * 2 se guarda en varTextoMasLargo y va reemplazando si el siguiente lo supera*/
let comparar = 2
let varTextoMasLargo = 0 

for (let i = 0; i < arrayNombres1.length; i++) {
    if(arrayNombres1[i].length >= comparar){
        comparar = arrayNombres1[i].length
        varTextoMasLargo = i
    }
}

console.log(`
El elemento con el texto más largo es ${arrayNombres1[varTextoMasLargo]}`);

/***************************************************************************************/
// Si hay más de un valor, guardarlos en el array arrayTextosMasLargos.  /** No hay */


/***************************************************************************************/
// 6) Lo mismo para el texto más corto.

console.log(arrayNombres1);

/** Creo 2 variables la de valor minimo que empieza con el tamaño del primer elemento
 * del array y el array donde se van a guardar los nombres si hay mas de uno
 */
let valorMinimo = arrayNombres1[0].length;
let nombresMasCortos = [];

/** El primer for recorre todos los elementos y en la variable valorMinimo guarda el tamaño del 
 * elemento mas pequeño
 */
for (let i = 0; i < arrayNombres1.length; i++) {
  if (arrayNombres1[i].length < valorMinimo) {
    valorMinimo = arrayNombres1[i].length;
    } 
}

/** Como ya tengo el tamaño mas pequeños en el siguiente for relleno el array de nombresMasCortos
 * comparando el tamaño de cada elemento con valorMinimo si es exacto guarda
 */
for(let i=0; i < arrayNombres1.length; i++) {
    if(arrayNombres1[i].length === valorMinimo){
        nombresMasCortos.push(arrayNombres1[i])
    }

}

console.log("el tamaño mas corto es: " + valorMinimo);
console.log(("los nombres mas cortos son: " + nombresMasCortos));


/***************************************************************************************/
// 7) Obtén un array llamado longitudNombres que tenga como elementos las longitudes de los textos
// incluidos en cualquiera de los arrays anteriores. Por tanto debes mostrar : [ 8, 5, 4, etc.

/**Creo una array que guarde el tamaño de cada elemento, el for recorre el array
 * y va guardando el tamaño en el array
 */
let longitudNombres = []
for(let i = 0; i < arrayNombres1.length; i++) {
    longitudNombres.push(arrayNombres1[i].length)    
}

console.log(longitudNombres);


/***************************************************************************************/
// 8) Crea un array llamado arrayNombresConI que incluya solo los nombres que contengan la letra i

/** Creo un array que contenga los nombres que tengan la letra i */
let arrayNombresconI = []

/** recorremos el array con el for y con el if va mirando en cada elemento si tienen la i
 * si es asi lo guarda en el nuevo array
 */
for(let i = 0; i < arrayNombres1.length; i++) {
    if(arrayNombres1[i].includes("i")){
        arrayNombresconI.push(arrayNombres1[i])
    }
}

console.log(`Los nombres que contienen la letra i son: ${arrayNombresconI}`);


/***************************************************************************************/
// Dado este array:
let arrayMixto = [ "Marie", 24, "Pol", 18, "Judith", 22, "Eva", 28, "Esther", 28 ]

// 9) Debes obtener otro array llamado arrayBidimensional que sea así­:
// [ ["Marie", 24 ], ["Pol", 18], ["Judith", 22 ], [ "Eva", 28] ]

/** Creo una variable que guardara el array */
let arrayBidemensional = []

/** Un for que recorre el arrayMixto, como va cortando de dos en dos, le decimos
 * que recorra el for de dos en dos y que corte con slice y lo guarde 
 */
for(let i = 0; i < arrayMixto.length; i = i + 2) {
    arrayBidemensional.push(arrayMixto.slice(i, (i + 2)))   //aquí hubo un poco de ayuuda
}

console.log(arrayBidemensional);


/***************************************************************************************/
// 10) A partir de un array como el que has obtenido en el ejercicio 9,
// debes resolver los ejercios 1, 2, 3 y 4
/**10.1) La suma de los elementos es la suma de las edades */

/**variable que va a guardar la suma */
let sumaEdad = 0

/**For que recorre el array y suma la edad */
for(let i = 0; i < arrayBidemensional.length; i++) {
    sumaEdad += arrayBidemensional[i][1]
}

console.log(`la suma de las edades es: ${sumaEdad}`);


/** 10.2) El promedio */

/** Para el promedio cogemos la suma y la dividimos en el tamaño.
 * creo la variable promedio
 */
let PromedioEdad = sumaEdad/arrayBidemensional.length

console.log(`El promedio de las edades es: ${PromedioEdad}`);


/** 10.3) El valor Máximo */
/** Creo la variable de edad maxima, empezando en 1 y que vaya comparando
 * creo el array nombrePersonas para saber de quienes tienen esas edades
 */

let edadMaxima = 1
let nombrePersonas = []

/**Con el for recorremos el array y con el if vamos comparando cada edad la mayor
 * se va guardando hasta que haya una mayor
 */
for(let i = 0; i < arrayBidemensional.length; i++) {
    if(arrayBidemensional[i][1] > edadMaxima) {
        edadMaxima = arrayBidemensional[i][1]
    }
}

/** este for es vuelve a recorrer el array pero con el if ahora compara las
 * personas que tienen edadMaxima
*/
for(let i = 0; i < arrayBidemensional.length; i++) {
    if (arrayBidemensional[i][1] == edadMaxima) {
        nombrePersonas.push(arrayBidemensional[i][0])
    }
}

console.log (`La edad Máxima es ${edadMaxima} y corresponde a ${nombrePersonas}`);


/**10.4)El valor Mínimo 
 *      
*/

