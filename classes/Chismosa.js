// Clase abstracta

class Chismosa {
    #reputacion;
    #nivelChisme
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

    recolectarInfo(){
        throw new Error("Este metodo debe implementarse desde las clases hijas");
    }

    contarChisme(){
        throw new Error("Este metodo debe implementarse desde las clases hijas");
    }
}

