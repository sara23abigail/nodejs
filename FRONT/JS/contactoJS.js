const d = document;
const formulario_login = d.getElementById("formulario_login");
const loading = d.getElementById("loading");
const inputFile = document.getElementById('captura_problema');
const noFilesSelectedLabel = document.querySelector('.no-files-selected');
const modal = document.getElementById('modal');
const btnAbrirModal = document.getElementById('abrirModal');
const btnCerrarModal = document.getElementById('cerrarModal');
const nameLastnameInput = document.getElementById('nameLastname');
const problemaTecnicoRadio = document.getElementById('problema_tecnico');
const sugerenciaRadio = document.getElementById('sugerencia');
const capturaProblema = document.getElementById('captura_problema');


d.addEventListener("DOMContentLoaded", (e) => {
  formulario_login.classList.remove('noDisplay');
  loading.classList.add('noDisplay');
  //***********/ 
});

inputFile.addEventListener('change', () => {
  if (inputFile.files.length > 0) {
    noFilesSelectedLabel.style.display = 'none';
  } else {
    noFilesSelectedLabel.style.display = 'block';
  }
});

// Función para abrir el modal
function abrirModal() {
  modal.style.display = 'block';
}

// Función para cerrar el modal
function cerrarModal() {
  modal.style.display = 'none';
}

// Evento de clic en el botón de apertura
btnAbrirModal.addEventListener('click', abrirModal);

// Evento de clic en el botón de cierre (X)
btnCerrarModal.addEventListener('click', cerrarModal);

// Evento de teclado para cerrar el modal al presionar Escape
window.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && modal.style.display === 'block') {
    cerrarModal();
  }
});


// Validacion del formulario

// Función de validación
function validarFormulario() {
  // Validar campo de nombre y apellido
  if (nameLastnameInput.value.trim() === '') {
    alert('El campo "Nombre y apellido" es obligatorio.');
    nameLastnameInput.focus();
    return false;
  }

  // Validar tipo de consulta (al menos un radio seleccionado)
  if (!problemaTecnicoRadio.checked && !sugerenciaRadio.checked) {
    alert('Debe seleccionar un tipo de consulta.');
    return false;
  }

  // Validar campo de captura de problema (si se selecciona "Problema técnico")
  if (problemaTecnicoRadio.checked && !capturaProblemaInput.files.length) {
    alert('Debe adjuntar una captura del problema.');
    capturaProblemaInput.focus();
    return false;
  }

  if (!capturaProblema.files.length) {
    alert('Debe adjuntar una captura del problema.');
    capturaProblema.focus();
    return false;
  }

  // Validar campo de descripción del motivo
  if (descripcionMotivoTextarea.value.trim() === '') {
    alert('El campo "Descripción del motivo" es obligatorio.');
    descripcionMotivoTextarea.focus();
    return false;
  }

  // Validar casilla de verificación de términos y condiciones
  if (!aceptoTerminosCheckbox.checked) {
    alert('Debe aceptar los términos y condiciones.');
    aceptoTerminosCheckbox.focus();
    return false;
  }

  // Si todos los campos son válidos, permite el envío del formulario
  return true;
}

// Agregar evento al formulario
const formulario = document.querySelector('form');
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío predeterminado del formulario

  if (validarFormulario()) {
    // Enviar el formulario utilizando AJAX o el método submit tradicional
    // ...
  }
});

