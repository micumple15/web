// Detectar el navegador de Samsung Internet
const isSamsungBrowser2 = navigator.userAgent.includes("SamsungBrowser");

if (isSamsungBrowser2) {
  const samsungModal = document.getElementById("samsung-modal");
  const closeModalS = document.getElementById("close-modalS");

  // Mostrar el modal
  samsungModal.style.display = "block";

  // Cerrar el modal al hacer clic en el botón "Cerrar"
  closeModalS.addEventListener("click", () => {
    samsungModal.style.display = "none";
  });

  // Cerrar el modal al hacer clic en cualquier lugar fuera del contenido del modal
  window.addEventListener("click", (event) => {
    if (event.target === samsungModal) {
      samsungModal.style.display = "none";
    }
  });
}