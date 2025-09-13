const chalk = require('chalk');
const readline = require("readline");
const { table } = require('table');

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
    console.log(chalk.blue("================================"));
    console.log(chalk.blue("Bienvenido a Reinas del Chisme "));
    console.log(chalk.blue("================================"));
    
    const tablaMenu = [
        [chalk.blue("Opción"), chalk.blue("Descripción")],
        [chalk.green("1"), ("Competir")],
        [chalk.green("2"), ("Ver reglas")],
        [chalk.green("3"), ("Salir del juego")]
    ]

    const salida = table(tablaMenu,{
      border: {
        topBody: chalk.bold.magenta("─"),
            topJoin: chalk.bold.magenta("┬"),
            topLeft: chalk.bold.magenta("┌"),
            topRight: chalk.bold.magenta("┐"),

            bottomBody: chalk.bold.magenta("─"),
            bottomJoin: chalk.bold.magenta("┴"),
            bottomLeft: chalk.bold.magenta("└"),
            bottomRight: chalk.bold.magenta("┘"),

            bodyLeft: chalk.bold.magenta("│"),
            bodyRight: chalk.bold.magenta("│"),
            bodyJoin: chalk.bold.magenta("│"),

            joinBody: chalk.bold.magenta("─"),
            joinLeft: chalk.bold.magenta("├"),
            joinRight: chalk.bold.magenta("┤"),
            joinJoin: chalk.bold.magenta("┼")
      }
    });
    console.log(salida);
}  

function mostrarTipos(){
    console.log(chalk.yellow("Tipos: "));
    console.log("───────────────────────────────────────────── ⋆⋅☆⋅⋆ ─────────────────────────────────────────────");
    console.log(chalk.blue("Tia Vecina: ") +"          Nivel de chisme: "+ chalk.yellow("★ ★ ★")+"   | Reputación: "+ chalk.yellow("★")+"      | Riesgo de exagerar: " + chalk.yellow ("★ ★"));
    console.log(chalk.blue("Companera Curiosa: ")+"   Nivel de chisme: "+ chalk.yellow("★")+"       | Reputación: "+ chalk.yellow ("★ ★ ★")+"  | Riesgo de pasarse: " + chalk.yellow("★ ★ "));
    console.log(chalk.blue("Estudiante Espia: " )+"    Nivel de chisme: "+ chalk.yellow("★ ★")+"     | Reputación: "+ chalk.yellow("★ ★")+"    | Riesgo de ser descubierta: " + chalk.yellow("★ ★ "));
    console.log("------------------------------------------------------------------------------------------------");
}

function clear() {
  console.clear();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


module.exports = {numeroAleatorio,preguntar,mostrarMenu,mostrarTipos,clear,sleep}