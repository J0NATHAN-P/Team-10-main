// Espera a que todo el contenido del DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {

  // Obtiene el botón con ID 'btnHistoria'
  const btnHistoria = document.getElementById("btnHistoria");

  // Obtiene la sección de historia con ID 'historia'
  const historia = document.getElementById("historia");

  // Agrega un evento 'click' al botón para mostrar u ocultar la historia
  btnHistoria.addEventListener("click", () => {

    // Alterna la clase 'oculto' para mostrar u ocultar la sección historia
    historia.classList.toggle("oculto");

    // Cambia el texto del botón según el estado visible de la historia
    btnHistoria.textContent = historia.classList.contains("oculto")
      ? "Ver Historia"     // Si está oculta, muestra este texto
      : "Ocultar Historia"; // Si está visible, muestra este texto
  });

});
