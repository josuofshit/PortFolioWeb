// 1. Seleccionar todas las secciones
const sections = document.querySelectorAll('.section');

// 2. Crear una variable para llevar el control de la sección actual
let currentSection = 0;

// 3. Detectar el scroll del mouse
window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // Si el usuario hace scroll hacia abajo
        goToSection(currentSection + 1);
    } else {
        // Si el usuario hace scroll hacia arriba
        goToSection(currentSection - 1);
    }
});

// 4. Función para desplazarse a una sección específica
function goToSection(index) {
    // Verificar que la sección está dentro del rango válido
    if (index >= 0 && index < sections.length) {
        currentSection = index; // Actualizar la sección actual

        // Desplazar suavemente hacia la sección correspondiente
        sections[currentSection].scrollIntoView({
            behavior: 'smooth', // Movimiento suave
            block: 'start' // Alinea la sección al inicio
        });
    }
}


//EFECTO PARA TIPEO DEL NOMBRE
const text = "Josue Gallardo";
const typingSpeed = 150; // Velocidad de tipeo en ms
const element = document.getElementById("typeWriterText");

let index = 0;

function type() {
  if (index < text.length) {
    element.textContent += text.charAt(index); // Agrega el siguiente carácter
    index++;
    setTimeout(type, typingSpeed); // Llama a la función nuevamente
  }
}

type(); // Inicia la animación

