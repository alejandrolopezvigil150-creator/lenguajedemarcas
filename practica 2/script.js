const barra = document.getElementById('barra');
const texto = document.getElementById('texto');

let progreso = 0;
setInterval(() => {
    progreso += 10;
    if (progreso > 100) {
        progreso = 0; // vuelve a empezar
    }

    barra.value = progreso;
    texto.textContent = progreso + '%';
}, 500);