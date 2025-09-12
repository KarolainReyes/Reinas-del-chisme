const Chismosa = require('./Chismosa');

class EstudianteEspia extends Chismosa {
    constructor(nombre, reputacion,nivelChisme){
        super(nombre,reputacion,nivelChisme);
    }
    recolectarInfo(){
        console.log("Lee chats ajenos desde el ultimo puesto del salón");
    }
    contarChisme(){
        console.log("Filtra el chisme por estados de whatsapp");
    }

}
