const d = document;
const formulario_login = d.getElementById("formulario_login");
const derivacion_registro = d.getElementById("derivacion-registro");
const loading = d.getElementById("loading");
const formulario_registro = d.getElementById('formulario-registro');
const nuevo_inicio_sesion = d.getElementById('inicio-sesion-new');
const inicio_sesion = d.getElementById('inicio-sesion');

d.addEventListener("DOMContentLoaded", (e) => {
  formulario_login.classList.remove('noDisplay');
  derivacion_registro.classList.remove('noDisplay');
  loading.classList.add('noDisplay');
  //***********/ 
  d.addEventListener("click", e => {
    if (e.target.matches('#link-derivacion-registro')) {
      formulario_registro.classList.remove('noDisplay');
      formulario_login.classList.add('noDisplay');
      derivacion_registro.classList.add('noDisplay');
      e.preventDefault();
    }
    //***********/
    if (e.target.matches('#submit-form-reg')) {
      formulario_registro.classList.add('noDisplay');
      nuevo_inicio_sesion.classList.remove('noDisplay');
      e.preventDefault();
    }
    //***********/
    if (e.target.matches('#boton_iniciar_sesion')) {
      inicio_sesion.classList.remove('noDisplay');
      formulario_login.classList.add('noDisplay');
      derivacion_registro.classList.add('noDisplay');
      e.preventDefault();
    }
    //***********/
    if (e.target.matches('#home')) {
      console.log("click_en_home");
      if (!formulario_registro.hasClass('noDisplay')) {
        formulario_registro.classList.add('noDisplay');
        formulario_login.classList.remove('noDisplay');
        derivacion_registro.classList.remove('noDisplay');
        console.log("formulario_registro");
      }
      if (!inicio_sesion.hasClass('noDisplay')) {
        inicio_sesion.classList.add('noDisplay');
        formulario_login.classList.remove('noDisplay');
        derivacion_registro.classList.remove('noDisplay');
        console.log("inicio_sesion");
      }
      if (!nuevo_inicio_sesion.hasClass('noDisplay')) {
        nuevo_inicio_sesion.classList.add('noDisplay');
        formulario_login.classList.remove('noDisplay');
        derivacion_registro.classList.remove('noDisplay');
        console.log("nuevo_inicio_sesion");
      }
      e.preventDefault();
    }

    const avatarIds = ["#avatar1", "#avatar2", "#avatar3", "#avatar4", "#avatar5", "#avatar6", "#avatar1-new"];
    if (avatarIds.includes(e.target.id)) {
      console.log("soy muy capo");
      e.preventDefault();
      window.location.href = "../pages/peliculas.html";
    }
  });
});

