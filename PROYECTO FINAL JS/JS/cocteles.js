//Obtengo el elementro del DOM  
    document.addEventListener("DOMContentLoaded", () => {
        const detalleCoctel = document.getElementById("detalle-coctel");
        
        //Obtengo el id del Coctel
        const params = new URLSearchParams(window.location.search);
        const idCoctel = parseInt(params.get('id'));
        
        //Obtengo los cocteles del JSON
        const datosCocteles = JSON.parse(localStorage.getItem("cocteles"));
        
        //Busco el coctel por ID
        const coctelSeleccionado = datosCocteles.cocteles.find(
            (coctel) => coctel.id == idCoctel
            );
        
        //Genero lista para los ingredientes
        const ingredientesLista = document.createElement("ul");
        coctelSeleccionado.ingredients.forEach(ingrediente => {
            const ingredienteItem = document.createElement("li");
            ingredienteItem.textContent = `${ingrediente.amount} ${ingrediente.unit} ${ingrediente.ingredient}${ingrediente.label ? ` (${ingrediente.label})` : ''}`;
            ingredientesLista.appendChild(ingredienteItem);
        });

        //Creao div para mostrar en el DOM el codctel elegido   
            if (coctelSeleccionado) {
                const contenedorCoctelSeleccionado = document.createElement("div");
                contenedorCoctelSeleccionado.classList.add("detalle_coctel");
                contenedorCoctelSeleccionado.innerHTML = `
                <div class="contenedor">
      <div class="c_nombre"><h2>${coctelSeleccionado.name}</h2></div>
      <div class="contenedor2">
      <div class="c_img"><img class="d_imagen" src="${coctelSeleccionado.imagen}" alt="${coctelSeleccionado.name}"></div>
      <div class="contenedor3">
      <div class="c_vaso"><h5>Vaso: ${coctelSeleccionado.glass}</h5></div>
      <div class="c_categoria"><h5>Categoria: ${coctelSeleccionado.category}</h5></div>
      <div class="c_ingredientes"><h5 id= "ingredientes">Ingredientes: </h5></div>
      <div class="c_garnish"><h5>Garnish: ${coctelSeleccionado.garnish}</h5></div>
      <div class="c_preparacion"><h5>Preparacion: ${coctelSeleccionado.preparation}</h5></div></div>
      </div></div>
      `;
      //agregar a pagina principal
      detalleCoctel.appendChild(contenedorCoctelSeleccionado);
      const ingredientes = document.getElementById("ingredientes");
      ingredientes.appendChild(ingredientesLista);
        }
    });