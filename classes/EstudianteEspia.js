const chalk = require('chalk');
const Chismosa = require('./Chismosa');
const {numeroAleatorio,sleep} = require('./functions');

class EstudianteEspia extends Chismosa {
    constructor(nombre, reputacion,nivelChisme){
        super(nombre,reputacion,nivelChisme);
    }
    recolectarInfo(){
        console.log(chalk.blue(this.nombre),"lee chats ajenos desde el ultimo puesto del salón 🕵️‍♀️");
    }
    contarChisme(){
        console.log(chalk.blue(this.nombre),"filtra el chisme por estados de whatsapp");
        let descubierta = Math.random();
        let nivelExtra = numeroAleatorio(1,2)+2
        this.nivelChisme= this.nivelChisme+nivelExtra;
        console.log("  ")
        console.log(chalk.yellow("            🏁 Resultados: "))
        console.log("  ")
        console.log(chalk.green("✨ Obtiene",nivelExtra, "nivel de Chisme"));
        if(descubierta<0.3){
            console.log(chalk.yellow("Oh no,",this.nombre,"fue descubierta"));
            this.reputacion=this.reputacion-2;
            console.log(chalk.red("-2 de reputacion 📉 "))
        }else{this.reputacion=this.reputacion+3;
            console.log(chalk.green("+3 de reputacion 📈 "));
        }
    }

}


module.exports = EstudianteEspia;