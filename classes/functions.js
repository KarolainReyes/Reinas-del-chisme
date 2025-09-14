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

async function mostrarInicio() {
  const ascii = `
 ██████ ██   ██ ██ ███████ ███    ███  ██████  ███████  █████  ███████ 
██      ██   ██ ██ ██      ████  ████ ██    ██ ██      ██   ██ ██      
██      ███████ ██ ███████ ██ ████ ██ ██    ██ ███████ ███████ ███████ 
██      ██   ██ ██      ██ ██  ██  ██ ██    ██      ██ ██   ██      ██ 
 ██████ ██   ██ ██ ███████ ██      ██  ██████  ███████ ██   ██ ███████ 


██████  ██████   ██████  ███████ ███████ ███████ ██  ██████  ███    ██  █████  ██      ███████ ███████ 
██   ██ ██   ██ ██    ██ ██      ██      ██      ██ ██    ██ ████   ██ ██   ██ ██      ██      ██      
██████  ██████  ██    ██ █████   █████   ███████ ██ ██    ██ ██ ██  ██ ███████ ██      █████   ███████ 
██      ██   ██ ██    ██ ██      ██           ██ ██ ██    ██ ██  ██ ██ ██   ██ ██      ██           ██ 
██      ██   ██  ██████  ██      ███████ ███████ ██  ██████  ██   ████ ██   ██ ███████ ███████ ███████ 

    
  `;

  console.log(chalk.yellow(ascii));
  await sleep(2500);
  clear();           
}


async function mostrarMenu(){
    await mostrarInicio()
    console.log(chalk.yellow("==================================================="));
    console.log(`      👑 Bienvenido a ${chalk.magentaBright("Reinas del Chisme")} 👑`);
    console.log(chalk.yellow("==================================================="));
    
    const tablaMenu = [
        [chalk.blue("Opción"), chalk.blue("Descripción")],
        [chalk.green("1"), ("Competir")],
        [chalk.green("2"), ("Salir del juego")]
    ]

    const salida = table(tablaMenu,{
      border: {
        topBody: chalk.bold.yellow("─"),
            topJoin: chalk.bold.yellow("┬"),
            topLeft: chalk.bold.yellow("┌"),
            topRight: chalk.bold.yellow("┐"),

            bottomBody: chalk.bold.yellow("─"),
            bottomJoin: chalk.bold.yellow("┴"),
            bottomLeft: chalk.bold.yellow("└"),
            bottomRight: chalk.bold.yellow("┘"),

            bodyLeft: chalk.bold.yellow("│"),
            bodyRight: chalk.bold.yellow("│"),
            bodyJoin: chalk.bold.yellow("│"),

            joinBody: chalk.bold.yellow("─"),
            joinLeft: chalk.bold.yellow("├"),
            joinRight: chalk.bold.yellow("┤"),
            joinJoin: chalk.bold.yellow("┼")
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