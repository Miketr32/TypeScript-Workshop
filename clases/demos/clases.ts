class Persona {
    nombre: string;                                                             //por defecto, son publicas
    private edad: number;                                                       // quiere decir que solo existen dentro de este ambito
    protected email: string                                                     // Lo mismo en este caso
    constructor(nombre: string, edad: number, email: string) {
        this.nombre = nombre;
        this.edad = edad
        this.email = email
    }
    getEdad () {                                                                //De esta forma puede ser extraidos los datos
        return 'mi edad es ' + this.edad
    }
}

class Estudiante extends Persona {
    isActive: boolean
    constructor(nombre: string, edad: number, email: string) {
        super(nombre, edad, email)
        this.isActive = false
    }
    funcionPrueba() {
        this.email
    }
}


let mati = new Persona('matias', 29, 'mati@mail.com')
let fede = new Estudiante('fede', 29, 'fede@mail.com')

mati.nombre //publico, lo puedo acceder desde fuera de la clase
mati.getEdad()
fede.funcionPrueba()
export {}