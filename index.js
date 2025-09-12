const TiaVecina = require('./classes/TiaVecina');
const CompaneraCuriosa = require('./classes/CompaneraCuriosa');
const EstudianteEspia = require('./classes/EstudianteEspia');
const {preguntar,mostrarMenu,mostrarTipos,numeroAleatorio,sleep,clear} = require("./classes/functions");

const t1 = new TiaVecina("Rut",0,0);
const t2 = new TiaVecina("Dolores",0,0);
const t3 = new TiaVecina("Asuncion",0,0);
const e1 = new EstudianteEspia("Camila",0,0);
const e2 = new EstudianteEspia("Valentina",0,0);
const e3 = new EstudianteEspia("Juana",0,0);
const c1 = new CompaneraCuriosa("Natalia",0,0);
const c2 = new CompaneraCuriosa("Lorenz",0,0);
const c3 = new CompaneraCuriosa("Daniela",0,0);

let chismosas = [t1,t2,t3];
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

async function main(){
    
    let salir = false;
    while (salir==false){
        clear();
        mostrarMenu()
        const opcion = await preguntar("Ingresa una opcion: ");
        switch (opcion) {
            case "1":
                clear();
                let nombre = await preguntar("Ingresa tu nombre: ");
                if(nombre.length<3){console.log("Nombre demasiado corto");sleep(1000);break;};
                let jugador = await elegirTipo(nombre);
                console.log("Jugador añadido correctamente");
                sleep(1000);
                clear();
                console.log("Inician las competencias...");
                await sleep(1000);
                clear();
                for (const chismosa of chismosas){
                    chismosa.recolectarInfo();
                    await sleep(2000);
                    console.log(chismosa.nombre,"cuenta que",chismes[numeroAleatorio(0,9)])
                    await sleep(3000);
                    chismosa.contarChisme();
                    await preguntar("Presione cualquier tecla para continuar: ")
                    clear();
                };
                const nivelChismeMasAlto = chismosas.reduce((max, chismosa) => 
                    jugador.nivelChisme > max.nivelChisme ? chismosa : max);
                const reputacionMasAlta = chismosas.reduce((max, chismosa) => 
                    jugador.reputacion > max.reputacion ? chismosa : max);
                console.log("Mayor nivel chisme",nivelChismeMasAlto.nombre,nivelChismeMasAlto.nivelChisme);
                console.log("Mejor reputacion",reputacionMasAlta.nombre,reputacionMasAlta.reputacion);
                await preguntar("asasas")
                break;
            case "3":
                console.log("Saliendo...");
                return;
            default:
                console.log("Ingrese una opcion valida")
                break;
        }
        
    }
}


main();

async function elegirTipo(nombre){
                while (true){
                    clear();
                mostrarTipos();
                let tipo = await preguntar("Elije un tipo: ");
                switch (tipo) {
                    case "1": 
                        let j1 = new TiaVecina(nombre,0,0);
                        chismosas.push(j1);
                        return j1;
                    case "2":
                        let j2 = new CompaneraCuriosa(nombre,0,0);
                        chismosas.push(j2);
                        return j2;
                    case "3":
                        const j3 = new EstudianteEspia(nombre,0,0);
                        chismosas.push(j3);
                        return j3;
                    default:console.log("Digite un tipo correcto");
                    await sleep(1500);
                        break;
                }};
}