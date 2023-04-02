const form = document.getElementById('formulario');
const mostrarEnPantalla = document.getElementById('mostrarEnPantalla');
form.addEventListener('submit', crearPersona);
class Persona {
    #nombre;
    #añoNacimiento;
    #edad
    #DNI;
    #sexo;
    #peso;
    #altura;
    constructor(nombre, añoNacimiento, edad, DNI, sexo, peso, altura) {
        this.#nombre = nombre;
        this.#añoNacimiento = añoNacimiento;
        this.#edad = edad;
        this.#DNI = DNI;
        this.#sexo = sexo;
        this.#peso = peso;
        this.#altura = altura;
    }
    get nombre() { return this.#nombre; }
    get añoNacimiento() { return this.#añoNacimiento; }
    get edad() { return this.#edad; }
    get DNI() { return this.#DNI; }
    get sexo() { return this.#sexo; }
    get peso() { return this.#peso; }
    get altura() { return this.#altura; }

    set nombre(newNombre) { this.#nombre = newNombre; }
    set añoNacimiento(newAñoNacimiento) { this.añoNacimiento = newAñoNacimiento; }
    set edad(newEdad) { this.#edad = newEdad; }
    set DNI(newDNI) { this.#DNI = newDNI; }
    set sexo(newSexo) { this.#sexo = newSexo; }
    set peso(newPeso) { this.#peso = newPeso; }
    set altura(newAltura) { this.#altura = newAltura; }

    mostrarDatos() {
        mostrarEnPantalla.innerHTML = (`<ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Año de nacimiento: ${this.#añoNacimiento}</li>
        <li>Edad: ${this.edad}</li>
        <li>DNI: ${this.DNI}</li>
        <li>Sexo: ${this.sexo}</li>
        <li>Peso: ${this.peso}</li>
        <li>Altura: ${this.altura}</li>
        </ul>`);
    }
    mostrarGeneracion() {
        let añoNac = this.añoNacimiento;
        let generacion = '';
        let rasgo = '';

        if (añoNac >= 1994 && añoNac <= 2010) {
            generacion = 'Z';
            rasgo = 'Irreverencia';
        }
        else if (añoNac >= 1981 && añoNac <= 1993) {
            generacion = 'Y';
            rasgo = 'Frustración';
        }
        else if (añoNac >= 1969 && añoNac <= 1980) {
            generacion = 'X';
            rasgo = 'Obsesión por el éxito';

        } else if (añoNac >= 1949 && añoNac <= 1968) {
            generacion = 'Baby Boom';
            rasgo = 'Ambición';

        } else if (añoNac >= 1930 && añoNac <= 1948) {
            generacion = 'Silent Generation';
            rasgo = 'Austeridad';
        }

        switch (generacion) {
            case 'Z':
                document.write(`${this.nombre} pertenece a la generación:<span> ${generacion}</span> y su rasgo principal es la: <span>${rasgo}</span>`);
                break;
            case 'Y':
                document.write(`${this.nombre} pertenece a la generación:<span> ${generacion}</span> y su rasgo principal es la: <span>${rasgo}</span>`);
                break;
            case 'X':
                document.write(`${this.nombre} pertenece a la generación:<span> ${generacion}</span> y su rasgo principal es la: <span>${rasgo}</span>`);
                break;
            case 'Baby Boom':
                document.write(`${this.nombre} pertenece a la generación:<span> ${generacion}</span> y su rasgo principal es la: <span>${rasgo}</span>`);
                break;
            case 'Silent Generation':
                document.write(`${this.nombre} pertenece a la generación:<span> ${generacion}</span> y su rasgo principal es la: <span>${rasgo}</span>`);
                break;
            default:
                document.write(`${this.nombre} no pertenece a ninguna generación`);
                break;
        }
    }
    mayorDeEdad() {
        if (this.edad >= 18) {
            document.write(`<p>${this.nombre} de ${this.edad} años, es mayo de edad.</p>`);
        } else {
            document.write(`<p>${this.nombre} de ${this.edad} años, es menor de edad.</p>`);
        }
    }
}

function crearPersona(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const añoNacimiento = document.getElementById('añoNacimiento');
    const edad = document.getElementById('edad');
    const dni = document.getElementById('dni');
    const sexo = document.getElementById('sexo');
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');

    const persona = new Persona(nombre.value, añoNacimiento.value, edad.value, dni.value, sexo.value, peso.value, altura.value);
    persona.mostrarDatos();
    console.log(persona);
}

// let federico = new Persona('Federico',2000,22,43204867,'H','70Kg',1.75);
// federico.mostrarDatos();
// federico.mostrarGeneracion();
// federico.mayorDeEdad();
