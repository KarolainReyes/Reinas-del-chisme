const chalk = require('chalk');
const Chismosa = require('./Chismosa');
const {numeroAleatorio} = require('./functions');

class CompaneraCuriosa extends Chismosa {
    constructor(nombre, reputacion,nivelChisme){
        super(nombre,reputacion,nivelChisme);
    }
    recolectarInfo(){
        console.log(chalk.blue(this.nombre),"Hace preguntas aparentemente profesionales a los compañeros de trabajo 🎤");
    }
    contarChisme(){
        console.log(chalk.blue(this.nombre),"Comenta el chisme como ejemplo de vida en el trabajo");
        let nivelExtra = numeroAleatorio(1,2)+1;
        this.nivelChisme= this.nivelChisme+nivelExtra;
        console.log("  ")
        console.log(chalk.yellow("            🏁 Resultados: "))
        console.log("  ")
        console.log(chalk.green("✨ Obtiene",nivelExtra, "nivel de Chisme"));
        let gato = Math.random();
        if (gato<0.1){console.log("La curiosidad mató al gato");console.log(chalk.red("-2 puntos de reputacion 📉 "));this.reputacion=this.reputacion-2;}
        else{
        this.reputacion=this.reputacion+4;
        console.log(chalk.green("+4 de reputacion 📈 "))};
    }
    
}



module.exports = CompaneraCuriosa;