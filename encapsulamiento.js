class persona{
    constructor(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    };
    obtenerNombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    };
    obtnerEdad(){
        return `${this.edad}`
    };
}
let people = new persona('carlos','torres',19);
console.log(people.obtenerNombreCompleto());
console.log(people.obtenerEdad());

/* function persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.obtenerNombreCompleto = () => {
        return `${this.nombre} ${this.apellido}`
    };

    this.obtnerEdad = () => {
        return `${this.edad}`
    };

    this.cambiarEdad = (nuevaEdad) => {
        this.edad = nuevaEdad;
    }
}

let persona2 = new persona('carlos','torres',19);
console.log(persona2); */