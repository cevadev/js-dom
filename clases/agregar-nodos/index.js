//creamos un elemento h1 - sin agregarlo aun al dom
const etiquetah3 = document.createElement("h3");

//creamos un texto - sin agregarlo aun al dom
const texto = document.createTextNode("¡Hola, mundo!");

//obtenemos el elemento padre
const parentElement = document.querySelector("div");

//insertamos el texto al elemento
etiquetah3.appendChild(texto);

//insertamos el nodo al elemento padre
parentElement.appendChild(etiquetah3);

//***************************************************** */
/***
 * Manejo del metodo append
 */

//agregamos un elemento al root
parentElement.append("Este es un nuevo texto", document.createElement("p"));

//******************************************************** */

//***************************************** */
/**
 * utilizamos el metodo insertBefore()
 */
const titulo = document.createElement("h1");
const tituloText = document.createTextNode("Trabajando con nodos");
titulo.appendChild(tituloText);

//obtenemos la referencia del elemento que quiero insertar antes
const referencia = document.querySelector("h3");

//insertamos el titulo antes de la referencia
parentElement.insertBefore(titulo, referencia);

//************************************************************** */
/**
 * Otras formas de agregar elementos
 * outerHTML imprimimos todo el html del div
 */
const textoHtml = parentElement.outerHTML;
console.info(textoHtml);

//innerHtml imprime el contenido interno del elemento de referencia
const onlyText = parentElement.innerHTML;
console.info(onlyText);

//*********************************************************** */
/**
 *Eliminando un nodo (eliminando un input)
 */

const nodoInputAEliminar = parentElement.querySelector("input");
parentElement.removeChild(nodoInputAEliminar);
