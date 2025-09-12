const Chismosa = require('./Chismosa');
const {numeroAleatorio} = require('./functions');

class CompaneraCuriosa extends Chismosa {
    constructor(nombre, reputacion,nivelChisme){
        super(nombre,reputacion,nivelChisme);
    }
    recolectarInfo(){
         console.log(this.nombre,"Hace preguntas aparentemente profesionales a los compañeros de trabajo");
    }
    contarChisme(){
        console.log(this.nombre,"Comenta el chisme como ejemplo de vida en el trabajo");
        let nivelExtra = numeroAleatorio(1,3)+numeroAleatorio(1,2);
        this.nivelChisme= this.nivelChisme+nivelExtra;
        console.log("Obtiene",nivelExtra, "nivel de Chisme");
        this.reputacion=this.reputacion+4;
        console.log("+4 de reputacion")
    }
    
    

}



module.exports = CompaneraCuriosa;