// select all elements with the  "i" tag and store them in the NodeList called "Stars"/seleccione todos los elementos con la etiqueta "i" y guárdelos en la Lista de nodos llamada "Estrellas"
const stars = document.querySelectorAll(".stars i");

// loop through the "stars" NodeList/recorrer la lista de nodos "estrellas"
stars.forEach((star, index1) => {
    // add an event listener that runs a function when the "click" event is triggered/agregue un detector de eventos que ejecute una función cuando se active el evento "clic"
    star.addEventListener("click",() -> {
        console.log(index1);
    });
});