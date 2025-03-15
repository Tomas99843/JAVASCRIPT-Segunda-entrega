//QUE DEBE TENER ESTA ENTREGA:
//1.Funcion Constructora (function con this)
//2.Creacion de objetos (new con funcion constructora)
//3.Arrays
//4.Metodos de arrays(como Filter)
//5.Metodos de Strings (como toUpperCase(),includes(),trim()
//6.prompt(Entrada de usuario),
//7.ParseFloat,ParseInt()(Conversion de tipos)
//8.isNaN()(Validacion de datos)
//9.console.table()(Salida en consola)
//10.push()(Agregar elementos a un array)
//11.Operadores logicos
//12.Estructura de control If...else

//---------------------//-----------------------//

const registroAlumnos = function (nombre, apellido, cursoTomado, estadoCurso, estadoPago) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.cursoTomado = cursoTomado,
    this.estadoCurso = estadoCurso,
    this.estadoPago = estadoPago
}

let alumno1 = new registroAlumnos("Juan", "Perez", "Javascript", "En curso", "Pago efectuado");
let alumno2 = new registroAlumnos("Mateo", "Garcia", "ReactJS", "Aprobado", "Pago efectuado");
let alumno3 = new registroAlumnos("Angel", "Marquez", "Machine Learning", "En curso", "Pago pendiente");
let alumno4 = new registroAlumnos("Marta", "Lopez", "Desarrollo web", "Aprobado", "Pago pendiente");

const listaAlumnos = [alumno1, alumno2, alumno3, alumno4];

function filtrarAlumnos() {
    let nombreBuscado = prompt("Ingresa el nombre del alumno:").trim().toUpperCase();
    let apellidoBuscado = prompt("Ingresa el apellido del alumno:").trim().toUpperCase();
    let resultado = listaAlumnos.filter((alumno) =>alumno.nombre.toUpperCase() === nombreBuscado && alumno.apellido.toUpperCase() === apellidoBuscado);
    
    if (resultado.length > 0) {
        console.table(resultado);
    } else {
        let agregarNuevo = confirm("No se encontraron coincidencias. ¿Deseas registrar a este alumno?");
        if (agregarNuevo) {
            agregarAlumno(nombreBuscado, apellidoBuscado);
        }
    }
}

function agregarAlumno(nombre, apellido) {
    let cursoTomado = prompt("Ingresa el curso que está tomando el alumno:").trim();
    let estadoCurso;
    while (true) {
        estadoCurso = prompt("Ingresa el estado del curso: En curso o Aprobado").trim().toLowerCase();
        if (estadoCurso === "en curso" || estadoCurso === "aprobado") {
        break;
        }else{
        alert("Error: Ingresar valores validos. 'En curso' o 'Aprobado'.");
        }
    }
    let estadoPago;
    while (true) {
        estadoPago = prompt("Ingresa el estado del pago: Pago efectuado o Pago pendiente").trim().toLowerCase();
        if (estadoPago === "pago efectuado" || estadoPago === "pago pendiente") {
        break;
        }else{
        alert("Error: Ingresar valores validos. 'Pago efectuado' o 'Pago pendiente'.");
        }
    }
    if (!cursoTomado) {
        alert("Error: 'Curso tomado' es OBLIGATORIO. Intenta nuevamente.");
        return;
    }
    let nuevoAlumno = new registroAlumnos(nombre, apellido, cursoTomado, estadoCurso, estadoPago);
    listaAlumnos.push(nuevoAlumno);
    alert(`El alumno ${nombre} ${apellido} ha sido registrado exitosamente.`);
    console.table(listaAlumnos);
}