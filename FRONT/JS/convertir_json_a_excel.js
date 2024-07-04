const xlsx = require('xlsx');

const dataJSON = {
  "nombre": ["Juan Perez", "Maria Garcia"],
  "edad": [30, 25],
  "ciudad": ["Buenos Aires", "Cordoba"]
};

const workbook = xlsx.utils.book_new();
const worksheet = xlsx.utils.aoa_to_sheet(dataJSON);

xlsx.utils.book_append_sheet(workbook, worksheet, 'Datos');

xlsx.utils.writeFile(workbook, 'data.xlsx');

/*
function leerJSON_escribirEnHTML(idContainer, datosJSON, ruta) {
  fetch(ruta)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const objeto_javascript = {};
      objeto_javascript[datosJSON] = data[datosJSON];
      let container = d.getElementById(idContainer);
      const objetoJS = objeto_javascript[datosJSON]; // Obtener el objeto a recorrer
      objetoJS.forEach(function(elemento) {
        const cardHTML = `
          <div class="card" id="${datosJSON}_${elemento.id}">
            <div class="card-content">
              <img id="img_${datosJSON}_${elemento.id}" src="${elemento.image}" alt="${elemento.titulo}" title="${elemento.titulo}">
            </div>
          </div>
        `;
        container.innerHTML += cardHTML;
      });
    })
    .catch(function(error) {
      console.error("Error al cargar los datos:", error);
    });
}
    */