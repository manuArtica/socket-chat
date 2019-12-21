class Usuarios {

    /**
     * Definimos el constructor, que inicializa un array de
     * las personas que están conectadas al chat
     */


    constructor() {
        this.personas = [];
    }

    /**
     * Necesitaremos varios métodos para poder trabajar con 
     * las personas conectadas al chat
     */

    /**
     * Método para agregar una persona al chat
     * Creamos un objeto que recoge el id y el nombre de la
     * persona agregada y lo añadimos al array del constructor
     */

    agregarPersona(id, nombre, sala) {

        let persona = { id, nombre, sala };

        this.personas.push(persona);

        return this.personas;

    }

    /**
     * Creamos una función que nos permita obtener los datos de
     * una persona por el id. Recogemos el id y comprobamos si
     * coincide con el id de alguna de las personas existenetes
     * en el array Personas
     */

    getPersona(id) {
        let persona = this.personas.filter(persona => persona.id === id)[0];

        return persona;
    }

    /**
     * Creamos una función para obtener a todas las personas
     */

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }

    /**
     * Creamos una función para eliminar una persona
     */

    borrarPersona(id) {
        /**
         * Antes de borrar a la persona del array recogemos su información
         * para poder informar de que esta persona ha sido borrada
         */

        let personaBorrada = this.getPersona(id);

        this.personas = this.personas.filter(persona => persona.id != id);

        return personaBorrada;

    }


}


module.exports = {
    Usuarios
}