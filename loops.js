var students = ['Zero', 'Guya', 'Lino', 'Albert'];

function helloStudent(estudiante) {
    console.log(`Hola, ${estudiante}!`);
}

console.log("Using classic form:")
for (var i = 0; i < students.length; i++) {
    helloStudent(students[i]);
}

console.log("Using new form:")
for (var estudiante of students) {
    helloStudent(estudiante);
}

console.log("Using While loop:")
while (students.length > 0) { // Aquí la tarea se hará siempre y cuando sea true, cuando llegué a false, dejará de hacer la tarea
    var estudiante = students.shift(); // shift() es un método que saca un elemento del array de la posición 0 a la última, Pop() comienza de la última a la primera.
    helloStudent(estudiante);
}