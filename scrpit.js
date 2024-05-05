// Supongamos que ya tienes el JSON cargado en una variable llamada 'clasesJSON'
const clases = Object.keys("./api/ass.json"); // Obtiene las claves (nombres de las clases)
const indiceAleatorio = Math.floor(Math.random() * clases.length); // Genera un índice aleatorio
const claseSeleccionada = clases[indiceAleatorio]; // Obtiene el nombre de la clase seleccionada

// Ahora puedes mostrar la información de la clase seleccionada en tu página web
document.getElementById("clase-info").innerHTML = JSON.stringify(clasesJSON[claseSeleccionada], null, 2);
