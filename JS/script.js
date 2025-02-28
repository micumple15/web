document.getElementById('addPerson').addEventListener('click', function (event) {
  event.preventDefault();

  // Clonar el contenedor de persona al hacer clic en "Agregar más integrantes aquí"
  var personaContainer = document.querySelector('.persona');
  var newPersonaContainer = personaContainer.cloneNode(true);

  // Cambiar el nombre de los radio buttons clonados
  var radioButtons = newPersonaContainer.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(function (radio, index) {
    var uniqueId = 'confirmacion_' + Date.now() + '_' + index;
    radio.name = uniqueId;
    radio.id = uniqueId; // Agregar un id único
    radio.checked = false; // Asegurarse de que el radio clonado no esté marcado
  });

  // Limpiar los valores de los campos clonados
  newPersonaContainer.querySelectorAll('input[type="text"]').forEach(function (input) {
    input.value = '';
  });

  // Agregar el nuevo contenedor de persona al formulario
  document.getElementById('personas').appendChild(newPersonaContainer);
});

document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Obtén todos los contenedores de persona
  var personaContainers = document.querySelectorAll('.persona');

  // Inicializa un array para almacenar los mensajes de cada persona
  var messages = [];

  // Itera sobre cada contenedor de persona
  personaContainers.forEach(function (personaContainer, index) {
    // Obtén los datos de la persona actual
    var nombre = personaContainer.querySelector('[name="nombre"]').value;
    var menu = personaContainer.querySelector('[name="menu"]').value;
    var cancion = personaContainer.querySelector('[name="cancion"]').value;

    // Obtén el valor del radio button seleccionado
    var confirmacionOption = personaContainer.querySelector('input[type="radio"]:checked');
    var confirmacion = confirmacionOption ? confirmacionOption.value : "No seleccionado";

    // Construye el mensaje de WhatsApp para la persona actual y agrégalo al array
    messages.push(
      `\n` +
      `*Nombre:* ${nombre}\n` +
      `\n` +
      `*Menú:* ${menu}\n` +
      `\n` +
      `*Canción:* ${cancion}\n` +
      `\n` +
      `*Asistencia:* ${confirmacion}\n` +
      `Gracias por la invitación!` +
      `\n`
    );
  });

  // Obtén el enlace de WhatsApp del campo oculto
  var whatsappLink = document.getElementById('whatsappLink').value;

  // Combina el enlace de WhatsApp y los mensajes
  var fullLink = `${whatsappLink} ${encodeURIComponent(messages.join(''))}`;

  // Abre el enlace en una nueva ventana o redirige al usuario
  window.open(fullLink, '_blank');
});