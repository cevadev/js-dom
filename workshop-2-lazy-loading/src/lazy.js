//param entry -> es parte de la API intersection observer
const isIntersecting = (entry) => {
  return entry.isIntersecting; //retorna true si esta dentro de la pantalla (visible)
};

const loadImage = (entry) => {
  //obtenemos el nodo
  const container = entry.target; //el target es el contenedor (div)
  const imagen = container.querySelector("img");
  //con la imagen recuperada accedemos a la propiedad src
  const url = imagen.dataset.src;

  //indicamos al browser que cargue la imagen
  imagen.src = url;

  loadedImages++;
  printLog();

  //una vez que la accion se ejecuta, queremos que deje de escuchar a la imagen
  observer.unobserve(container);
};

//el api IntersectionObserver reciben una accion donde se le indica que hacer por cada imagen
//entries -> son todas las entradas que en este momento esta escuchando
const observer = new IntersectionObserver((entries) => {
  //fliltras las imagenes que se intersectan en el viewport
  entries
    .filter(isIntersecting) //iteramos como uno de los elementos que es un entry
    //por cada una de las imágenes en la pantalla, realzamos una accion
    .forEach(loadImage);
});

//funcion que utiliza al intersectionObserver para que observe la imagen que estamos recibiendo
export const registerImagen = (imagen) => {
  //el intersectionObserver escuchará cada una de las imagenes
  observer.observe(imagen);
};
