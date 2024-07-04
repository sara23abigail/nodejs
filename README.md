# NodeJS
Proyecto Front End del curso Full Stack Codo a Codo 2024

## Integrantes del grupo
Los integrantes (activos) de este proyecto son:  
-  Sara Nuñez (abigailsara190@gmail.com).  
-  Eichhorn Gustavo (eichhorn.gustavof@gmail.com).
-  Gisela Spina (calzadosbranca@gmail.com).

## Veo-Veo
Pagina web pensada para reproducir películas por stream.
Para ahorrar recursos, se decidió que las peliculas fueran simples iframes de youtube.

## Repositorio en GITHUB:
https://github.com/Gustavo-F-E/nodeJS
## Despliegue en Netlify:
https://grupo-24.netlify.app/

## Logo
![Logo](ASSETS/images/logo_veo_veo.png)

## Estructura con 5 Paginas:
La página del index, pagina de películas, página de series, página de contacto (con el formulario pedido) y la pagina de presentación de los integrantes del grupo.  

![Paginas](ASSETS/images/pages.png)  

## SEO:
```html
    <!--Metaetiquetas-->
    <link rel="canonical" href="https://grupo-24.netlify.app/" />
    <!--colocar direccion real cuando se haga el despliegue---->
    <meta property="og:title" content="Veo Veo" />
    <meta property="og:description" content="Veo Veo: Pagina web pensada para reproducir películas por stream."/>
    <meta property="og:image" content="../ASSETS/images/logo_veo_veo.png"/>
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:url" content="https://grupo-24.netlify.app/" />
```  
## Formulario de contacto:

La página cuenta con un formulario en la página 'Contacto' que tiene 5 campos, e incluye un select, un chekbox, un radiobutton, un textarea, se debe subir una imagen y tiene validaciones de javascript para que los campos sean obligatorios.  
![Paginas](ASSETS/images/formulario_de_contacto.PNG)  
![Paginas](ASSETS/images/formulario_de_contacto2.PNG)  
![Paginas](ASSETS/images/formulario_de_contacto3.PNG)  

## 3 Puntos de Corte en cada pagina:
Sitio tipo Mobile-first.  
Pantallas chicas: menos de 575px.  
Pantallas medianas: entre 576px y 991px.  
Pantallas grandes: Más de 992px.  
Estos puntos de corte fueron sacados de bootstrap.  
Durante el trabajo se vió que es necesario responder con más puntos de corte, pero por la pronta entrega de decidió entregar con sólo los tres pedidos.

### Ejemplo de Media-Queries utilizadas:

```css
@media screen and (min-width: 576px) and (max-width: 991px) {
  ...
}

@media screen and (min-width: 992px) {
  ...
}
```
## Animaciones o transiciones:
Se incluyeron algunas transiciones y animaciones: 
- En la página index.html:
```css
/***********************/
/*      Seccion 0      */
/***********************/

#loading span{
  animation: salto 1s alternate
    infinite;
}

#cargando1{ 
  animation-delay: 0.30s; 
}
#cargando2{ 
  animation-delay: 0.60s; 
}
#cargando3{ 
  animation-delay: 0.90s; 
}
@keyframes salto {
    from {
        opacity: 1;
    }
    to{
        opacity: 0;
    }
}
```
- En la página películas.html/series.html:
```css
/***********************/
/*      Card      */
/***********************/

.card{
  /***/
  /* Otras propiedades de estilo para la tarjeta */
  transition: transform 0.3s ease; /* Agregamos una transición suave */
  &:hover{
    transform: scale(1.2); /* Escalamos la tarjeta en un 5% al hacer hover */
  }
}
```
## Maquetación con Flexbox y/o Grid:
Existen varios lugares en la página donde se utiliza Flexbos o Grid.
```css
/*********************/
/****  Grupo 24  *****/
/*********************/
#grupo_24{
  display: flexbox;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /***/
  article{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    justify-content: center;
    align-items: center;
    /***/
  }
}

.avatar{
  grid-area: 1/1/4/2;
  justify-self: end;
  /***/
}

.nombre-y-apellido{
  grid-area: 2/2/3/3;
  justify-self: start;
  /***/
}

.mail{
  grid-area: 3/2/4/3;
  /***/
}
```
## Navegabilidad:
Se chequeó que haya puntos de no retorno.  
Se utilizó un favicon:  
```html
  <link rel="icon" type="image/x-icon" href="ASSETS/favicon/clapperboard.png">
```
## Validacion en https://validator.w3.org/ :
Sin errores.  
![Validator 1](ASSETS/images/validator1.PNG)  
![Validator 2](ASSETS/images/validator2.PNG)  
## Utilizacion de iframes, iconos y fuentes locales:
Ejemplo de utilización de iframes para la presentación de las películas.  

```html
  <div>
    <iframe src="https://www.youtube.com/embed/SOW5EfrTTsE?si=wrdA9mIdkde97cwU&controls=1&iv_load_policy=3&loop=1&wmode=transparent&rel=0" 
    title="El secreto de sus ojos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
    </iframe>
  </div>
```
## Estructura de los archivos CSS:
Se utilizó una estructura para el desarrollo del CSS en modo "desarrollo" y se compilaron en un solo archivo CSS para cada página usando una terminal "bash".  
### Ejemplo:
```css
@import url(../a_variables.css);
@import url(../b_resets.css);
@import url(../c_hamburguer_menu.css);
@import url(../e_main.css);
@import url(../e_seccion0_loading.css);
@import url(../e_seccion1_logo.css);
@import url(../_24/e_24.css);
@import url(../f_footer.css);
@import url(../k_nodisplay.css);

/*
*****  Abrir terminal bash: asegurarse que se está en la carpeta CSS/_24 asi se mantienen las mismas rutas *****
cat ../a_variables.css ../b_resets.css ../c_hamburguer_menu.css ../e_main.css ../e_seccion0_loading.css ../e_seccion1_logo.css ../_24/e_24.css ../f_footer.css ../k_nodisplay.css > styles.css
*/
```
## Estructura de los archivos Javascript:
Cada página (excepto 'grupo_24' por su simplicidad) posee un script tipo 'module' para rediccionar al archivo que contiene las intrucciones de Javascript pertinenetes a la misma.  
```html
  <script src="JS/indexJS.js" type="module"></script>
```
## Carpeta JS:
![Carpeta JS](ASSETS/images/Carpeta_JS.PNG)  
La carpeta de Javascript posee los archivos JS pertinentes. Las funciones de javascript que se encuentran allí son las básicas de mostrar u ocultar elementos HTML, interactuar con eventos 'clik' y renderizar, leyendo datos de los archivos 'JSON'. Por funcionalidad, también se requirió añadir líneas de código para guardar momentaneamente ciertos datos en el 'localstorage'.  

### Ejemplo 1:  

Como ejemplo, la Función "leerJSON_escribirEnHTML" lee datos del JSON, según la ruta especificada y utiliza esos para renderizarlos en el HTML:  
```js
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
```  

### Ejemplo 2:  

La Función "ver_pelicula", por otra parte, lee los datos temporariamente almacenados en el 'localstorage' y renderiza el video en el HTML, removiendo la clase 'noDisplay' en el elemento 'background_video' pero añadiendosela al elemento 'background_image':  
```js
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
```