document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('.menu-link');

  // Agregar un controlador de eventos de clic a cada enlace del menú
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      // Prevenir el comportamiento predeterminado del enlace
      e.preventDefault();

      // Obtener el ID del destino del enlace (eliminando el carácter '#')
      const targetId = link.getAttribute('href').substring(1);

      // Obtener el elemento de destino por su ID
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Calcular la posición de desplazamiento hasta el elemento
        const offsetTop = targetElement.offsetTop;

        // Utilizar el método `scrollIntoView` con el comportamiento suave
        window.scroll({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });
});