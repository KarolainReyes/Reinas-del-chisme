const Chismosa = require('./Chismosa')
const {numeroAleatorio} = require('./functions');

class TiaVecina extends Chismosa {
    constructor(nombre, reputacion, nivelChisme) {
        super(nombre, reputacion, nivelChisme);
    }
    recolectarInfo() {
        console.log(this.nombre, "aprovecha la reunión del barrio para escuchar discretamente");
    }
    contarChisme() {
        console.log(this.nombre, "difunde el chisme mientras ofrece café");
        let exageracion = Math.random();
        let nivelExtra = numeroAleatorio(1,2) + 3
        this.nivelChisme = this.nivelChisme + nivelExtra;
        console.log("Obtiene", nivelExtra, "nivel de Chisme");
        if (exageracion < 0.4) {
            console.log("Oh no,", this.nombre, "exageró con el chisme");
            this.reputacion = this.reputacion - 3;
            console.log("-3 de reputacion")
        } else {
            this.reputacion = this.reputacion + 2
            console.log("+2 de reputacion");
        }
    }

}

module.exports = TiaVecina;