// Exportaciones

const TiaVecina = require('./classes/TiaVecina');
const CompaneraCuriosa = require('./classes/CompaneraCuriosa');
const EstudianteEspia = require('./classes/EstudianteEspia');
const { preguntar, mostrarMenu, mostrarTipos, numeroAleatorio, sleep, clear } = require("./classes/functions");
const { table } = require('table');
const Chismosa = require('./classes/Chismosa');
const chalk = require('chalk');


// Variables
const t1 = new TiaVecina("Rut", 0, 0);
const e1 = new EstudianteEspia("Camila", 0, 0);
const c1 = new CompaneraCuriosa("Natalia", 0, 0);

let chismosas = [t1, e1, c1];
const chismes = [
    "Juan le pegó a Luna",
    "Camila le robó un carro a Juan",
    "Pedro se fugó con la plata",
    "Sofía dejó plantado a Luis",
    "Carlos escondió la bicicleta",
    "Ana rompió la ventana",
    "Diego copió en el examen",
    "María gritó en la misa",
    "Andrés perdió la llave",
    "Laura escondió el celular",
    "Felipe le robó un beso a Paula",
    "Julián tiró la torta al suelo",
    "Carolina se cayó en la piscina",
    "Samuel quemó la ropa de Camilo",
    "Luisa se llevó el perro de Diana",
    "Esteban se durmió en clase",
    "Paola perdió el anillo",
    "Ricardo escondió los zapatos",
    "Valeria cambió la nota de Sofía",
    "Mateo rompió la guitarra de Andrés"
];

// Declaracion Funciones

async function main() {
    
    let salir = false;
    while (salir == false) {
        clear();
        mostrarMenu()
        const opcion = await preguntar(chalk.gray("Ingresa una opcion: "));
        switch (opcion) {
            case "1":
                clear();
                console.log(chalk.bold.gray("Preparate para competir..."));
                await sleep(1000);
                let nombre = await preguntar("Ingresa tu nombre: ");
                if (nombre.length < 3) { console.log(chalk.red("Nombre demasiado corto")); sleep(1000); break; };
                let jugador = await elegirTipo(nombre);
                console.log(chalk.green("Jugador añadido correctamente"));
                await sleep(1000);
                clear();
                console.log(chalk.yellow("Que inicie la competencia!!"));
                await sleep(1000);
                await competencia();
                break;
            case "3":
                console.log(chalk.blue("Saliendo..."));
                return;
            default:
                console.log(chalk.red("Ingrese una opcion valida"))
                break;
        }

    }
}


async function elegirTipo(nombre) {
    while (true) {
        clear();
        mostrarTipos();
        let tipo = await preguntar("Elije un tipo de chismosa: ");
        switch (tipo) {
            case "1":
                let j1 = new TiaVecina(nombre, 0, 0);
                chismosas.push(j1);
                return j1;
            case "2":
                let j2 = new CompaneraCuriosa(nombre, 0, 0);
                chismosas.push(j2);
                return j2;
            case "3":
                const j3 = new EstudianteEspia(nombre, 0, 0);
                chismosas.push(j3);
                return j3;
            default: console.log(chalk.red("Digite un tipo correcto"));
                await sleep(1500);
                break;
        }
    };
}

async function competencia() {
    clear();
    rondas=1;
    while (rondas<3){
    for (const chismosa of chismosas) {
        console.log("RONDA:",rondas)
        console.log('Recolectando información del chisme...');
        await sleep(1000);
        chismosa.recolectarInfo();
        await sleep(2000);
        console.log(chismosa.nombre, "cuenta que", chismes[numeroAleatorio(0, 9)])
        await sleep(2000);
        chismosa.contarChisme();
        await preguntar("Presione cualquier tecla para continuar: ")
        clear();
        
    };rondas+=1}

    let tablaResultados = [
        ['Nombre', 'Nivel de Chisme', 'Reputación']
    ];

    chismosas.forEach(chismosa => {
        let reputacion;
        let nivelChisme;
        if (chismosa.reputacion < 5){
            reputacion = (chismosa.reputacion)
        }else{
            reputacion = (chismosa.reputacion)
        };
        if (chismosa.nivelChisme < 5){
            nivelChisme = (chismosa.nivelChisme)
        }else{
            nivelChisme = (chismosa.nivelChisme)
        };
        let chismosaResultados = [chismosa.nombre, reputacion, nivelChisme];
        tablaResultados.push(chismosaResultados)        
    });
    console.log(table(tablaResultados));
    let resultados = await preguntar ('Estos son los resultados finales de la competencia...')
}


//Flujo de aplicacion

main();