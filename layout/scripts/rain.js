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

// Controlador de música
const music = document.getElementById("background-music");
const toggleButton = document.getElementById("toggle-music");

toggleButton.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleButton.textContent = "🔊 Pausar Música";
  } else {
    music.pause();
    toggleButton.textContent = "🔇 Reproducir Música";
  }
});