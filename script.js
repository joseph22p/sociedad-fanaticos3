// script.js
const evento = new Date("September 15, 2025 18:00:00").getTime();
const contador = document.getElementById("contador");

setInterval(() => {
  const ahora = new Date().getTime();
  const distancia = evento - ahora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  contador.innerHTML = `Faltan ${dias}d ${horas}h ${minutos}m ${segundos}s`;

  if (distancia < 0) {
    contador.innerHTML = "¡El evento ya ha comenzado!";
  }
}, 1000);
