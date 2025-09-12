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
    console.log("===============================");
    console.log("Bienvenido a Reinas Del Chisme");
    console.log("-------------------------------");
    console.log(" ");
    console.log("1.Competir");
    console.log("2.Reglas");
    console.log("3.Salir");
    console.log(" ");
    console.log("===============================");
}  

function mostrarTipos(){
    console.log("-----------------------------------------------------------------------");
    console.log("Tipos");
    console.log("1.Tia Vecina:        +++ Nivel de chisme, ++ Riesgo de exagerar");
    console.log("2.Companera Curiosa:   + Nivel de chisme, +++ Reputacion");
    console.log("3.Estudiante Espia:   ++ Nivel de chisme, ++ Riesgo de ser descubierta");
    console.log("-----------------------------------------------------------------------");
}

module.exports = {numeroAleatorio,preguntar,mostrarMenu,mostrarTipos}