const Chismosa = require('./Chismosa');
const numeroAleatorio = require('./functions');

class EstudianteEspia extends Chismosa {
    constructor(nombre, reputacion,nivelChisme){
        super(nombre,reputacion,nivelChisme);
    }
    recolectarInfo(){
        console.log(this.nombre,"lee chats ajenos desde el ultimo puesto del salón");
    }
    contarChisme(){
        console.log(this.nombre,"filtra el chisme por estados de whatsapp");
        let descubierta = Math.random();
        let nivelExtra = numeroAleatorio(1,3)+numeroAleatorio(2,3)
        this.nivelChisme= this.nivelChisme+nivelExtra;
        console.log("Obtiene",nivelExtra, "nivel de Chisme");
        if(descubierta<0.3){
            console.log("Oh no,",this.nombre,"fue descubierta")
            this.reputacion=this.reputacion-2;
            console.log("-2 de reputacion")
        }else{this.reputacion=this.reputacion+3;
            console.log("+3 de reputacion");
        }
    }

}


module.exports = EstudianteEspia;