// Clase abstracta

class Chismosa {
    #reputacion;
    #nivelChisme;
    constructor(nombre,reputacion,nivelChisme){
        if(this.constructor === Chismosa){
            throw new Error ("Esto es una clase abstracta!")
        };
        this.nombre=nombre;
        this.#reputacion=reputacion;
        this.#nivelChisme=nivelChisme;
    };

    get reputacion(){
        return this.#reputacion;
    };
    
    get nivelChisme(){
        return this.#nivelChisme;
    }
    
    set reputacion(valor) {
         if (valor < 0) {
        this.#reputacion = 0;
    } else {
        this.#reputacion = valor;
    }
    }
    set nivelChisme(valor) {
    if (valor < 0) {
        this.#nivelChisme = 0;
    } else {
        this.#nivelChisme = valor;
    }
}

    recolectarInfo(){
        throw new Error("Este metodo debe implementarse desde las clases hijas");
    }

    contarChisme(){
        throw new Error("Este metodo debe implementarse desde las clases hijas");
    }
}

module.exports = Chismosa;