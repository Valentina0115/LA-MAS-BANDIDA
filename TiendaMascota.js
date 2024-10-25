// Clase base Mascota
class Mascota {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    mostrarInformacion() {
       return `Nombre: ${this.nombre}, Tipo: ${this.tipo}`;
    }

    hacerAccion() {
       return `${this.nombre} está haciendo algo.`;
    }
}

// Clase derivada Perro
class Perro extends Mascota {
    constructor(nombre) {
        super(nombre, 'Perro');  
    }

    ladrar() {
       return `${this.nombre} está ladrando: ¡Guau guau!`;
    }

    hacerAccion() {
        return this.ladrar();  // Aquí devolvemos el resultado de ladrar()
    }
}

// Clase derivada Gato
class Gato extends Mascota {
    constructor(nombre) {
        super(nombre, 'Gato');  
    }

    maullar() {
       return `${this.nombre} está maullando: ¡Miau miau!`;
    }

    hacerAccion() {
        return this.maullar();  // Aquí devolvemos el resultado de maullar()
    }
}

let mascotas = [];

// Evento para agregar mascotas
document.querySelector('#Agregar').addEventListener('click', function() {
    // Asegúrate de que el id en el HTML sea "nombre", en minúsculas
    let nombre = document.querySelector('#nombre').value;
    let tipoP = document.querySelector('#tipo').value;  // Capturamos el valor como cadena (Perro o Gato)
    
    let mascota;

    // Comparación correcta de cadenas (no como número)
    if (tipoP === 'Perro') {
       mascota = new Perro(nombre);
    } else if (tipoP === 'Gato') {
      mascota = new Gato(nombre);
    }

    // Si se ha creado una mascota, se agrega al array
    if (mascota) {
        mascotas.push(mascota);
        actualizarLista();
    }
})

// Función para actualizar la lista de mascotas
function actualizarLista(){
    let lista = document.querySelector("#listaM");

    mascotas.forEach(function(mascota){
        let li = document.createElement('li');
        li.textContent= `${mascota.nombre}, ${mascota.tipo} - ${mascota.hacerAccion()}`;

        lista.appendChild(li);  // Añadimos el li a la lista, no a sí mismo
    });
}
