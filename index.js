const TiaVecina = require('./classes/TiaVecina');
const CompaneraCuriosa = require('./classes/CompaneraCuriosa');
const EstudianteEspia = require('./classes/EstudianteEspia');
const {preguntar,mostrarMenu,mostrarTipos} = require("./classes/functions");

const t1 = new TiaVecina("Rut",0,0);
const t2 = new TiaVecina("Dolores",0,0);
const t3 = new TiaVecina("Asuncion",0,0);
const e1 = new EstudianteEspia("Camila",0,0);
const e2 = new EstudianteEspia("Valentina",0,0);
const e3 = new EstudianteEspia("Juana",0,0);
const c1 = new CompaneraCuriosa("Natalia",0,0);
const c2 = new CompaneraCuriosa("Lorenz",0,0);
const c3 = new CompaneraCuriosa("Daniela",0,0);

let chismosas = [t1,t2,t3,e1,e2,e3,c1,c2,c3];

async function main(){
    
    let salir = false;
    while (salir==false){
        mostrarMenu()
        const opcion = await preguntar("Ingresa una opcion: ");
        switch (opcion) {
            case "1":
                let nombre = await preguntar("Ingresa tu nombre: ");
                if(nombre.length<3){console.log("Nombre demasiado corto");break;};
                let jugador = await elegirTipo(nombre)
                console.log("Jugador añadido correctamente")
                break;
        
            default:
                console.log("Ingrese una opcion valida")
                break;
        }
        
    }
}


main();

async function elegirTipo(nombre){
                while (true){
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
                        break;
                }}
}