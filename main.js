const registroAlumnos = function (nombre, apellido, cursoTomado, estadoCurso, estadoPago) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.cursoTomado = cursoTomado;
    this.estadoCurso = estadoCurso;
    this.estadoPago = estadoPago;
};

let alumno1 = new registroAlumnos("Juan", "Perez", "Javascript", "en curso", "pago efectuado");
let alumno2 = new registroAlumnos("Mateo", "Garcia", "ReactJS", "aprobado", "pago efectuado");
let alumno3 = new registroAlumnos("Angel", "Marquez", "Machine Learning", "en curso", "pago pendiente");
let alumno4 = new registroAlumnos("Marta", "Lopez", "Desarrollo web", "aprobado", "pago pendiente");

const listaAlumnos = [alumno1, alumno2, alumno3, alumno4];

function filtrarAlumnos() {
    let nombreBuscado = prompt("Ingresa el nombre del alumno:").trim().toUpperCase();
    let apellidoBuscado = prompt("Ingresa el apellido del alumno:").trim().toUpperCase();
    let resultado = listaAlumnos.filter(
        (alumno) =>
            alumno.nombre.toUpperCase() === nombreBuscado &&
            alumno.apellido.toUpperCase() === apellidoBuscado
    );

    if (resultado.length > 0) {
        const alumno = resultado[0];
        alert(`El alumno ${alumno.nombre} ${alumno.apellido} está registrado. Se encuentra actualmente en el curso de ${alumno.cursoTomado}, en la instancia de ${alumno.estadoCurso} y con el ${alumno.estadoPago}.`);
        console.table(resultado);
    } else {
        let agregarNuevo = confirm("Alumno no encontrado. ¿Quiere registrar a este alumno? ¡Completemos algunos datos!");
        if (agregarNuevo) {
            agregarAlumno(nombreBuscado, apellidoBuscado);
        }
    }
}

function agregarAlumno(nombre, apellido) {
    let cursoTomado;
    while (!cursoTomado) {
        cursoTomado = prompt("Ingresa el curso que está tomando el alumno (OBLIGATORIO):").trim();
        if (!cursoTomado) alert("Error: Este campo es obligatorio.");
    }

    let estadoCurso;
    while (true) {
        estadoCurso = prompt("Ingresa el estado del curso: en curso o aprobado").trim().toLowerCase();
        if (estadoCurso === "en curso" || estadoCurso === "aprobado") {
            break;
        } else {
            alert("Error: Ingresar valores válidos. 'en curso' o 'aprobado'.");
        }
    }

    let estadoPago;
    while (true) {
        estadoPago = prompt("Ingresa el estado del pago: pago efectuado o pago pendiente").trim().toLowerCase();
        if (estadoPago === "pago efectuado" || estadoPago === "pago pendiente") {
            break;
        } else {
            alert("Error: Ingresar valores válidos. 'pago efectuado' o 'pago pendiente'.");
        }
    }

    let nuevoAlumno = new registroAlumnos(nombre, apellido, cursoTomado, estadoCurso, estadoPago);
    listaAlumnos.push(nuevoAlumno);
    alert(`El alumno ${nombre} ${apellido} ha sido registrado exitosamente. Se encuentra actualmente en el curso de ${nuevoAlumno.cursoTomado}, en la instancia de ${nuevoAlumno.estadoCurso} y con el ${nuevoAlumno.estadoPago}.`);
    console.table(listaAlumnos);
}

function iniciarAplicacion() {
    alert("Bienvenido al sistema de registro de alumnos de Coderhouse.");
    let continuar = true;
    while (continuar) {
        filtrarAlumnos();
        continuar = confirm("¿Deseas buscar o registrar otro alumno?");
    }
    alert("Gracias por usar el sistema. Vé a consola para conocer la lista final de alumnos registrados");
    console.table(listaAlumnos);
}

iniciarAplicacion();