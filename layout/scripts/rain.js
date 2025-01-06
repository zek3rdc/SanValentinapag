// Función para crear la lluvia de corazones
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");
  corazon.style.left = Math.random() * 100 + "vw"; // Posición horizontal aleatoria
  corazon.style.animationDuration = Math.random() * 2 + 3 + "s"; // Duración aleatoria
  corazon.innerHTML = "❤️";
  document.body.appendChild(corazon);

  // Eliminar corazones después de la animación
  setTimeout(() => {
    corazon.remove();
  }, 5000);
}

// Generar un corazón cada 300ms
setInterval(crearCorazon, 300);


//controladores de musica
const music = document.getElementById("background-music");
const musicControl = document.getElementById("music-control");

// Controlar el audio al hacer clic en el botón
musicControl.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicControl.textContent = "🔇"; // Cambia el ícono
    musicControl.classList.add("playing"); // Activa la animación
  } else {
    music.pause();
    musicControl.textContent = "🎵"; // Cambia el ícono
    musicControl.classList.remove("playing"); // Detiene la animación
  }
});

// Ocultar el botón al hacer scroll
let scrollTimeout;
window.addEventListener("scroll", () => {
  musicControl.classList.add("hidden");

  // Mostrar el botón después de 1 segundo sin movimiento
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    musicControl.classList.remove("hidden");
  }, 1000);
});
