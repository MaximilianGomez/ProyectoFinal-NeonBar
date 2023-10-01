fetch("./PROYECTO FINAL JS/JSON/cocteles.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => {localStorage.setItem("cocteles", JSON.stringify(datos));
  
  const gridCocteles = document.querySelector("#grid-cocteles");
  const datosCocteles = JSON.parse(localStorage.getItem("cocteles"));
  console.log(datosCocteles);
  if (datosCocteles) {
    datosCocteles.cocteles.forEach((coctel) => {
      const gridItem = document.createElement("div");
      
      gridItem.classList.add("grid-item");
      
      gridItem.innerHTML = `</div><img class="imagenCoctel" src="${coctel.imagen}" alt="${coctel.name}"><h4 class="nombreCoctel">${coctel.name}</h4> <div class="boton"><button class="btn btn-success" id="boton"}">Ver Mas</button>`;

      //Genero evento on.click y llamo a la funcion que muestra todos los detalles ( esta generada mas abajo)
      const boton = gridItem.querySelector('.btn-success');
      boton.addEventListener("click", () => {
        mostrarDetallesCocteles(coctel);
      });

      gridCocteles.appendChild(gridItem);
    });
  }
});

//Genero funcion que muestra los detalles
function mostrarDetallesCocteles(coctel) {
//Redirecciono a otra pagina para mostrar todo
window.location.href = `./PROYECTO FINAL JS/HTML/secundario.html?id=${coctel.id}`;
}