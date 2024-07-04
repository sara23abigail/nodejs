const d = document;
const loading = d.getElementById("loading");
const background_video = d.getElementById("background-video");
const background_image = d.getElementById("background-image");
const banner = d.getElementById("banner");
const new_banner = d.querySelector(".new_banner");
const main_series = d.getElementById("main-series");
const generos = ["diez_mejores", "accion", "comedia", "romanticas"];

d.addEventListener("DOMContentLoaded", (e) => {

  background_image.classList.remove('noDisplay');
  banner.classList.remove('noDisplay');
  loading.classList.add('noDisplay');
  localStorage.setItem("URL_Serie", "https://www.youtube.com/embed/SOW5EfrTTsE?si=Y2j0CV6Xy9uwm_s_&controls=1&iv_load_policy=3&loop=1&wmode=transparent&rel=0");
  localStorage.setItem("TITULO_Serie", "Casi angeles");
  leerJSON_escribirEnHTML("container", generos[0], "../JS/series.json")
  //Crear galeria de series de accion
  crear_nuevo_banner("Series de Acción", "container_3", 1, 5);
  leerJSON_escribirEnHTML("container_3", generos[1], "../JS/series.json");
  //Crear galeria de series de comedia
  crear_nuevo_banner("Series de Comedia", "container_4", 2, 6);
  leerJSON_escribirEnHTML("container_4", generos[2], "../JS/series.json");
  //Crear galeria de series romanticas
  crear_nuevo_banner("Series Romanticas", "container_5", 3, 7);
  leerJSON_escribirEnHTML("container_5", generos[3], "../JS/series.json");
  //Click sobre alguna de las películas
  describir_series_click(generos[0]);
  describir_series_click(generos[1]);
  describir_series_click(generos[2]);
  describir_series_click(generos[3]);
  ver_series();
});

function crear_nuevo_banner(tituloBanner, idContainer, numero_de_repeats, filaBanner) {
    main_series.style.gridAutoRows = `repeat(${numero_de_repeats}, 30vh)`;
    main_series.innerHTML += `
    <section class="new-banner" class="noDisplay" style="grid-row: ${filaBanner};">
      <article>
        <h2>${tituloBanner}</h2>
      </article>
      <article>
        <div class="container" id="${idContainer}">
        </div>
      </article>
    </section>
  `;
}

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

function describir_series(idContainer, ruta) {
  //Comparacion genero de la series para realizar la búsqueda en el JSON
  let genero_series = idContainer.substring(0, 4);
  let genero = "";
  if (genero_series === "diez") {
    genero = "diez_mejores";
  }
  else if (genero_series === "acci") {
    genero = "accion";
  }
  else if (genero_series === "come") {
    genero = "comedia";
  }
  else if (genero_series === "roma") {
    genero = "romanticas";
  }
  else { genero_series = "" };
  //Comparacion de número del id de la series para realizar la búsqueda en el JSON
  let numero_series = idContainer.slice(-2);
  let IDserie = "";
  if (numero_series === "_1") {
    IDserie = 1;
  }
  else if (numero_series === "_2") {
    IDserie = 2;
  }
  else if (numero_series === "_3") {
    IDserie = 3;
  }
  else if (numero_series === "_4") {
    IDserie = 4;
  }
  else if (numero_series === "_5") {
    IDserie = 5;
  }
  else if (numero_series === "_6") {
    IDserie = 6;
  }
  else if (numero_series === "_7") {
    IDserie = 7;
  }
  else if (numero_series === "_8") {
    IDserie = 8;
  }
  else if (numero_series === "_9") {
    IDserie = 9;
  }
  else if (numero_series === "10") {
    IDserie = 10;
  }
  else { IDserie = "" };
  //Modificamos el DOM
  let container = d.getElementById("background-image");
  fetch(ruta)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let series_del_genero = data[genero];
      let serie_especifica = series_del_genero[IDserie - 1];
      localStorage.setItem("URL_Serie", serie_especifica.link); //Guardamos el valor de la serie en el localstorage
      localStorage.setItem("TITULO_Serie", serie_especifica.titulo); //Guardamos el valor del titulo en el localstorage
        const cardHTML = `
        <article id="background-image-img"><img src="${serie_especifica.image}" alt="${serie_especifica.titulo}"></article>
        <article id="background-image-description">
          <h3>${serie_especifica.titulo}</h3>
          <p>${serie_especifica.descripcion}</p></article>
        <article id="ver-series">
        Ver Avance
        </article>
        `;
        container.innerHTML = cardHTML;
      })
      .catch(function (error) {
        console.error("Error al cargar los datos:", error);
  });
}

function ver_series() {
  const background_video = d.getElementById("background-video");
  const background_image = d.getElementById("background-image");
  d.addEventListener("click", e => {
    if (e.target.matches("#ver-series")) {
      const serie = localStorage.getItem("URL_Serie");
      const titulo = localStorage.getItem("TITULO_Serie");
      const cardHTML = `
      <div>
      <iframe src="${serie}&controls=1&iv_load_policy=3&loop=1&wmode=transparent&rel=0" 
      title="${titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      `;
      background_video.innerHTML += cardHTML;
      background_video.classList.remove('noDisplay');
      background_image.classList.add('noDisplay');
    }
  });
}

function describir_series_click(genero) {
  const background_video = d.getElementById("background-video");
  const background_image = d.getElementById("background-image");
  let genero_de_la_imagen = "img_" + genero;
    d.addEventListener("click", e => {
      if (e.target.matches(`#${genero_de_la_imagen}_1`)) {
        background_video.classList.add('noDisplay');
        background_image.classList.remove('noDisplay');
        describir_series(`${genero}_1`, "../JS/series.json");
      }
      else if (e.target.matches(`#${genero_de_la_imagen}_2`)) {
        background_video.classList.add('noDisplay');
        background_image.classList.remove('noDisplay');
        describir_series(`${genero}_2`, "../JS/series.json");
      }
      else if (e.target.matches(`#${genero_de_la_imagen}_3`)) {
        background_video.classList.add('noDisplay');
        background_image.classList.remove('noDisplay');
        describir_series(`${genero}_3`, "../JS/series.json");
      }
      else if (e.target.matches(`#${genero_de_la_imagen}_4`)) {
        background_video.classList.add('noDisplay');
        background_image.classList.remove('noDisplay');
        describir_series(`${genero}_4`, "../JS/series.json");
      }
      else if (e.target.matches(`#${genero_de_la_imagen}_5`)) {
        background_video.classList.add('noDisplay');
        background_image.classList.remove('noDisplay');
        describir_series(`${genero}_5`, "../JS/series.json");
      }
      else if (e.target.matches(`#${genero_de_la_imagen}_6`)) {
        background_video.classList.add('noDisplay');
        background_image.classList.remove('noDisplay');
        describir_series(`${genero}_6`, "../JS/series.json");
      }
      else if (e.target.matches(`#${genero_de_la_imagen}_7`)) {
        background_video.classList.add('noDisplay');
        background_image.classList.remove('noDisplay');
        describir_series(`${genero}_7`, "../JS/series.json");
      }
      else if (e.target.matches(`#${genero_de_la_imagen}_8`)) {
        background_video.classList.add('noDisplay');
        background_image.classList.remove('noDisplay');
        describir_series(`${genero}_8`, "../JS/series.json");
      }
      else if (e.target.matches(`#${genero_de_la_imagen}_9`)) {
        background_video.classList.add('noDisplay');
        background_image.classList.remove('noDisplay');
        describir_series(`${genero}_9`, "../JS/series.json");
      }
      else if (e.target.matches(`#${genero_de_la_imagen}_10`)) {
        background_video.classList.add('noDisplay');
        background_image.classList.remove('noDisplay');
        describir_series(`${genero}_10`, "../JS/series.json");
      }
      else {
        //console.log("no hay id en el elemento clickeado");
      }
    });
};