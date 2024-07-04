const d = document;
const loading = d.getElementById("loading");
const background_video = d.getElementById("background-video");
const background_image = d.getElementById("background-image");
const banner = d.getElementById("banner");
const new_banner = d.querySelector(".new_banner");
const main_peliculas = d.getElementById("main-peliculas");
const generos = ["diez_mejores", "accion", "comedia", "romanticas"];

d.addEventListener("DOMContentLoaded", (e) => {

  background_image.classList.remove('noDisplay');
  banner.classList.remove('noDisplay');
  loading.classList.add('noDisplay');
  localStorage.setItem("URL_Pelicula", "https://www.youtube.com/embed/SOW5EfrTTsE?si=Y2j0CV6Xy9uwm_s_&controls=1&iv_load_policy=3&loop=1&wmode=transparent&rel=0");
  localStorage.setItem("TITULO_Pelicula", "El secreto de sus ojos");
  leerJSON_escribirEnHTML("container", generos[0], "../JS/peliculas.json")
  //Crear galeria de peliculas de accion
  crear_nuevo_banner("Peliculas de Acción", "container_3", 1, 5);
  leerJSON_escribirEnHTML("container_3", generos[1], "../JS/peliculas.json");
  //Crear galeria de peliculas de comedia
  crear_nuevo_banner("Peliculas de Comedia", "container_4", 2, 6);
  leerJSON_escribirEnHTML("container_4", generos[2], "../JS/peliculas.json");
  //Crear galeria de peliculas romanticas
  crear_nuevo_banner("Peliculas Romanticas", "container_5", 3, 7);
  leerJSON_escribirEnHTML("container_5", generos[3], "../JS/peliculas.json");
  //Click sobre alguna de las películas
  describir_peliculas_click(generos[0]);
  describir_peliculas_click(generos[1]);
  describir_peliculas_click(generos[2]);
  describir_peliculas_click(generos[3]);
  ver_pelicula();
});

function crear_nuevo_banner(tituloBanner, idContainer, numero_de_repeats, filaBanner) {
    main_peliculas.style.gridAutoRows = `repeat(${numero_de_repeats}, 30vh)`;
    main_peliculas.innerHTML += `
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

function describir_peliculas(idContainer, ruta) {
  //Comparacion genero de la pelicula para realizar la búsqueda en el JSON
  let genero_pelicula = idContainer.substring(0, 4);
  let genero = "";
  if (genero_pelicula === "diez") {
    genero = "diez_mejores";
  }
  else if (genero_pelicula === "acci") {
    genero = "accion";
  }
  else if (genero_pelicula === "come") {
    genero = "comedia";
  }
  else if (genero_pelicula === "roma") {
    genero = "romanticas";
  }
  else { genero_pelicula = "" };
  //Comparacion de número del id de la pelicula para realizar la búsqueda en el JSON
  let numero_pelicula = idContainer.slice(-2);
  let IDpelicula = "";
  if (numero_pelicula === "_1") {
    IDpelicula = 1;
  }
  else if (numero_pelicula === "_2") {
    IDpelicula = 2;
  }
  else if (numero_pelicula === "_3") {
    IDpelicula = 3;
  }
  else if (numero_pelicula === "_4") {
    IDpelicula = 4;
  }
  else if (numero_pelicula === "_5") {
    IDpelicula = 5;
  }
  else if (numero_pelicula === "_6") {
    IDpelicula = 6;
  }
  else if (numero_pelicula === "_7") {
    IDpelicula = 7;
  }
  else if (numero_pelicula === "_8") {
    IDpelicula = 8;
  }
  else if (numero_pelicula === "_9") {
    IDpelicula = 9;
  }
  else if (numero_pelicula === "10") {
    IDpelicula = 10;
  }
  else { IDpelicula = "" };
  //Modificamos el DOM
  let container = d.getElementById("background-image");
  fetch(ruta)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let peliculas_del_genero = data[genero];
      let pelicula_especifica = peliculas_del_genero[IDpelicula - 1];
      localStorage.setItem("URL_Pelicula", pelicula_especifica.link); //Guardamos el valor de la pelicula en el localstorage
      localStorage.setItem("TITULO_Pelicula", pelicula_especifica.titulo); //Guardamos el valor del titulo en el localstorage
        const cardHTML = `
        <article id="background-image-img"><img src="${pelicula_especifica.image}" alt="${pelicula_especifica.titulo}"></article>
        <article id="background-image-description">
          <h3>"${pelicula_especifica.titulo}"</h3>
          <p>${pelicula_especifica.descripcion}</p></article>
        <article id="ver-pelicula">
        Ver Trailer
        </article>
        `;
        container.innerHTML = cardHTML;
      })
      .catch(function (error) {
        console.error("Error al cargar los datos:", error);
  });
}

function ver_pelicula() {
  const background_video = d.getElementById("background-video");
  const background_image = d.getElementById("background-image");
  d.addEventListener("click", e => {
    if (e.target.matches("#ver-pelicula")) {
      const pelicula = localStorage.getItem("URL_Pelicula");
      const titulo = localStorage.getItem("TITULO_Pelicula");
      const cardHTML = `
      <div>
      <iframe src="${pelicula}&controls=1&iv_load_policy=3&loop=1&wmode=transparent&rel=0" 
      title="${titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      `;
      background_video.innerHTML += cardHTML;
      background_video.classList.remove('noDisplay');
      background_image.classList.add('noDisplay');
    }
  });
}

function describir_peliculas_click(genero) {
  const background_video = d.getElementById("background-video");
  const background_image = d.getElementById("background-image");
  let genero_de_la_imagen = "img_" + genero;
    d.addEventListener("click", e => {
      if (e.target.matches(`#${genero_de_la_imagen}_1`)) {
        background_video.classList.add('noDisplay');
        background_image.classList.remove('noDisplay');
        describir_peliculas(`${genero}_1`, "../JS/peliculas.json");
      }
      else if (e.target.matches(`#${genero_de_la_imagen}_2`)) {
        background_video.classList.add('noDisplay');
        background_image.classList.remove('noDisplay');
        describir_peliculas(`${genero}_2`, "../JS/peliculas.json");
      }
      else if (e.target.matches(`#${genero_de_la_imagen}_3`)) {
        background_video.classList.add('noDisplay');
        background_image.classList.remove('noDisplay');
        describir_peliculas(`${genero}_3`, "../JS/peliculas.json");
      }
      else if (e.target.matches(`#${genero_de_la_imagen}_4`)) {
        background_video.classList.add('noDisplay');
        background_image.classList.remove('noDisplay');
        describir_peliculas(`${genero}_4`, "../JS/peliculas.json");
      }
      else if (e.target.matches(`#${genero_de_la_imagen}_5`)) {
        background_video.classList.add('noDisplay');
        background_image.classList.remove('noDisplay');
        describir_peliculas(`${genero}_5`, "../JS/peliculas.json");
      }
      else if (e.target.matches(`#${genero_de_la_imagen}_6`)) {
        background_video.classList.add('noDisplay');
        background_image.classList.remove('noDisplay');
        describir_peliculas(`${genero}_6`, "../JS/peliculas.json");
      }
      else if (e.target.matches(`#${genero_de_la_imagen}_7`)) {
        background_video.classList.add('noDisplay');
        background_image.classList.remove('noDisplay');
        describir_peliculas(`${genero}_7`, "../JS/peliculas.json");
      }
      else if (e.target.matches(`#${genero_de_la_imagen}_8`)) {
        background_video.classList.add('noDisplay');
        background_image.classList.remove('noDisplay');
        describir_peliculas(`${genero}_8`, "../JS/peliculas.json");
      }
      else if (e.target.matches(`#${genero_de_la_imagen}_9`)) {
        background_video.classList.add('noDisplay');
        background_image.classList.remove('noDisplay');
        describir_peliculas(`${genero}_9`, "../JS/peliculas.json");
      }
      else if (e.target.matches(`#${genero_de_la_imagen}_10`)) {
        background_video.classList.add('noDisplay');
        background_image.classList.remove('noDisplay');
        describir_peliculas(`${genero}_10`, "../JS/peliculas.json");
      }
      else {
        //console.log("no hay id en el elemento clickeado");
      }
    });
};