class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
        this.calificaciones = [];
    }

    agregarCalificacion(calificacion) {
        this.calificaciones.push(calificacion);
    }

    calcularPromedio() {
        let suma = 0;
        if (this.calificaciones.length === 0) {
            return "No hay calificaciones.";
        }
        for (let i = 0; i < this.calificaciones.length; i++) {
            suma += this.calificaciones[i];
        }
        let promedio = suma / this.calificaciones.length;
        return promedio;  // Devuelve el promedio calculado
    }

    listarCalificaciones() {
        return this.calificaciones;
    }
}

class Curso {
    constructor(tipoCurso) {
        this.tipoCurso = tipoCurso;
        this.estudiantes = [];
    }

    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }

    calcularPromedioCurso() {
        if (this.estudiantes.length === 0) {
            return "No hay estudiantes en el curso.";
        }
        let suma = 0;
        for (let i = 0; i < this.estudiantes.length; i++) {
            suma += this.estudiantes[i].calcularPromedio();
        }
        let promedio = suma / this.estudiantes.length;
        return promedio;  // Devuelve el promedio calculado del curso
    }
}

class CursoOnline extends Curso {
    constructor() {
        super("Curso Online");
    }
}

class CursoPresencial extends Curso {
    constructor() {
        super("Curso Presencial");
    }
}

// Variables globales
let estudiante;
let curso;

document.querySelector("#AgregarEstudiante").addEventListener("click", function() {
    let nombre = document.querySelector("#nombre").value;
    let edad = document.querySelector("#edad").value;

    // Crear la instancia del Estudiante
    estudiante = new Estudiante(nombre, edad);

    document.querySelector("#Resultado").textContent = `Estudiante ${nombre}, Edad: ${edad} agregado.`;

    // Limpiar los campos de entrada
    document.querySelector("#nombre").value = "";
    document.querySelector("#edad").value = "";
});

document.querySelector("#AgregarCurso").addEventListener("click", function() {
    let tipoCurso = document.querySelector("#tipoCurso").value;

    // Crear la instancia del curso según el tipo seleccionado
    if (tipoCurso === "online") {
        curso = new CursoOnline();
    } else {
        curso = new CursoPresencial();
    }

  
});

document.querySelector("#AgregarEstudianteAlCurso").addEventListener("click", function() {
    if (curso && estudiante) {
        curso.agregarEstudiante(estudiante);
        document.querySelector("#Resultado").textContent = `Estudiante ${estudiante.nombre} agregado al curso ${curso.tipoCurso}.`;
    } else {
        document.querySelector("#Resultado").textContent = "Primero agregue un curso y un estudiante.";
    }
});

document.querySelector("#AgregarCalificacion").addEventListener("click", function() {
    let calificacion = parseFloat(document.querySelector("#calificacion").value);
    calificacion.innerHTML = '';
    
    if (estudiante) {
        estudiante.agregarCalificacion(calificacion);
        document.querySelector("#Resultado").textContent = `Calificación ${calificacion} agregada.`;
    } else {
        document.querySelector("#Resultado").textContent = "Primero agregue un estudiante.";
    }


 
    actualizarListaCalificaciones();
});

document.querySelector("#MostrarPromedio").addEventListener("click", function() {
    if (estudiante) {
        let promedio = estudiante.calcularPromedio();
        document.querySelector("#Resultado").textContent = `Promedio del estudiante: ${promedio}`;
    } else {
        document.querySelector("#Resultado").textContent = "Primero agregue un estudiante.";
    }
});

function actualizarListaCalificaciones() {
    let lista = document.querySelector("#listaCalificaciones"); 
    lista.innerHTML = ""; 

    estudiante.listarCalificaciones().forEach(function(calificacion) {
        let li = document.createElement("li");
        li.textContent = `Calificación: ${calificacion}`;
        lista.appendChild(li);
    });
}