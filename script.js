// select all elements with the  "i" tag and store them in the NodeList called "Stars"/seleccione todos los elementos con la etiqueta "i" y guárdelos en la Lista de nodos llamada "Estrellas"
const stars = document.querySelectorAll(".stars i");

// loop through the "stars" NodeList/recorrer la lista de nodos "estrellas"
stars.forEach((star, index1) => {
    // add an event listener that runs a function when the "click" event is triggered/agregue un detector de eventos que ejecute una función cuando se active el evento "click"
    star.addEventListener("click",() => {
        // loop through the "stars" NodeList again/recorra de nuevo la lista de nodos "estrellas"
        stars.forEach((star, index2) => {
        //     add the "active" class to the clicked star and any stars with a lower index
        // and remove the "active" class from any stars with a higher index/
        //     agregue la clase "activa" a la estrella en la que se hizo click y a cualquier estrella con un índice más bajo
        // y eliminar la clase "activa" de cualquier estrella con un índice más alto
        index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        });
    });
});