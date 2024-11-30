
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


class Perro extends Mascota {
    constructor(nombre) {
        super(nombre, 'Perro');  
    }

    ladrar() {
       return `${this.nombre} está ladrando: ¡Guau guau!`;
    }

    hacerAccion() {
        return this.ladrar();  
    }
}

class Gato extends Mascota {
    constructor(nombre) {
        super(nombre, 'Gato');  
    }

    maullar() {
       return `${this.nombre} está maullando: ¡Miau miau!`;
    }

    hacerAccion() {
        return this.maullar();  
    }
}

let mascotas = [];

document.querySelector('#Agregar').addEventListener('click', function() {
    let nombre = document.querySelector('#nombre').value;
    let tipoP = document.querySelector('#tipo').value;  
    let mascota;

    if (tipoP === 'Perro') {
       mascota = new Perro(nombre);
    } else if (tipoP === 'Gato') {
      mascota = new Gato(nombre);
    }


    if (mascota) {
        mascotas.push(mascota);
        actualizarLista();
    }
})


function actualizarLista(){
    let lista = document.querySelector("#listaM");

    mascotas.forEach(function(mascota){
        let li = document.createElement('li');
        li.textContent= `${mascota.nombre}, ${mascota.tipo} - ${mascota.hacerAccion()}`;

        lista.appendChild(li);  
    });
}
