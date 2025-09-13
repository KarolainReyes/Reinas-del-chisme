const readline = require("readline");

function numeroAleatorio (min, max){
     return Math.floor(Math.random() * (max - min + 1)) + min;
};



function preguntar(pregunta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(pregunta, (respuesta) => {
      rl.close();
      resolve(respuesta);
    });
  });
}

function mostrarMenu(){
    console.log("︵‿︵‿୨♡୧‿︵‿︵୨♡୧︵‿︵‿୨♡୧‿︵‿︵");
    console.log("Bienvenido a Reinas del Chisme ");
    console.log("================================");
    console.log(" ");
    console.log("Opciones disponibles: ");
    console.log("1. Competir");
    console.log("2. Reglas");
    console.log("3. Salir");
    console.log(" ");
    console.log("===============================");
}  

function mostrarTipos(){
    console.log("───────────────────────────────────────────── ⋆⋅☆⋅⋆ ─────────────────────────────────────────────");
    console.log("Tipos");
    console.log("1. Tia Vecina:          Nivel de chisme ★ ★ ★ | Reputacion ★      | Riesgo de exagerar ★ ★ ");
    console.log("2. Companera Curiosa:   Nivel de chisme ★      | Reputacion ★ ★ ★ | Riesgo de pasarse ★ ★ ");
    console.log("3. Estudiante Espia:    Nivel de chisme ★ ★    | Reputacion ★ ★   | Riesgo de ser descubierta ★ ★ ");
    console.log("------------------------------------------------------------------------------------------------");
}

function clear() {
  console.clear();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


module.exports = {numeroAleatorio,preguntar,mostrarMenu,mostrarTipos,clear,sleep}