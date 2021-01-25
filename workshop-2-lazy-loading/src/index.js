/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
//importamos hyperscript
import h from "hyperscript";
import { registerImagen } from "./lazy.js";

const maximum = 122;
const minimum = 1;
const random = () => {
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

/**
 * Tareas:
 * 1. Crear una imagen: crear un nodo img y creamos un div donde agregamos el img al div
 * 2. Agregar la imagen al contenedor: agregamos el div al contenedor images
 * <div class="p-4">
        <img src="https://randomfox.ca/images/2.jpg" width="320" class="mx-auto" alt="" />
    </div>
 */

//funcion que nos devuelve un nodo de una imagen
const createImageNode = () => {
  //const container = document.createElement("div");
  //container.className = "flex flex-col items-center p-4";

  //creamos el container utilizando hyperscript
  const container = h("div.p-4.flex.flex-col.items-center");

  //creamos la imagen
  /* const imagen = document.createElement("img");
  imagen.className = "mx-auto";
  imagen.width = "320"; */
  //dataset -> agregamos al dataset de la imagen la url
  //imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

  //creamos la imagen utilizando hyperscript
  const imagen = h("img", {
    width: "320",
    "data-src": `https://randomfox.ca/images/${random()}.jpg`,
  });

  //Wrapper que genera un recuadro gris donde se colocará la imagen
  const imageWrapper = document.createElement("div");
  imageWrapper.className = "bg-gray-300";
  imageWrapper.style.minHeight = "100px";
  imageWrapper.style.display = "inline-block";

  //add la imagen al container
  imageWrapper.appendChild(imagen);
  container.appendChild(imageWrapper);

  appendedImages++;
  printLog();

  return container;
};

//const nuevaImagen = createImageNode();
//obtenemos el mountNode container
const mountNode = document.getElementById("images");

//boton que al hacer click agrega una nueva imagen
//capturamos el boton del html
const addButton = document.getElementById("add");
const cleanButton = document.getElementById("clean");

//action de comprobacion
const addImage = () => {
  //agregar imágenes
  const newImage = createImageNode();
  //agregamos el nodo con la imagen al container
  mountNode.append(newImage);

  //aplicamos el lazy loading y escuchamos la imagen
  registerImagen(newImage);
};

const cleanImages = () => {
  console.info(mountNode.childNodes);
  [...mountNode.childNodes].forEach((child) => {
    child.remove();
  });
};

addButton.addEventListener("click", addImage);
cleanButton.addEventListener("click", cleanImages);
