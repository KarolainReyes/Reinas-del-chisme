const Chismosa = require('./Chismosa');

class CompaneraCuriosa extends Chismosa {
    constructor(nombre, reputacion,nivelChisme){
        super(nombre,reputacion,nivelChisme);
    }
    recolectarInfo(){
        console.log("Hace preguntas aparentemente profesionales a los compañeros de trabajo");
    }
    contarChisme(){
        console.log("Comenta el chisme como ejemplo de vida en el trabajo")
    }
    
    

}
