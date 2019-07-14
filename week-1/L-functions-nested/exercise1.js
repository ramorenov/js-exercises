var estudiantes = 13;
var mentores = 15;
var tot = estudiantes + mentores;

function percentage(number) {
  percent = (number * 100) / tot;
  return Math.round(percent);
}

function Greeting(a, b) {
  console.log((greeting = "porcentaje de estudiantes: " + percentage(a) + "%"));
  console.log((greeting2 = "porcentaje de mentores: " + percentage(b) + "%"));
}

Greeting(estudiantes, mentores);
