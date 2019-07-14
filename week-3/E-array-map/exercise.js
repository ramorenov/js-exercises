// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// metodo 1  funcion externa

function metodo1(number) {
  return number * 100;
}

let resultado1 = numbers.map(metodo1);

console.log("metodo1: " + resultado1);

// metodo 2 funcion dentro del metodo map

let resultado2 = numbers.map(function metodo2(number) {
  return number * 100;
});

console.log("metodo2: " + resultado2);

// metodo 3 funcion arrow

let resultado3 = numbers.map(number => {
  return number * 100;
});
console.log("metodo3: " + resultado3);

// metodo 4 funcion arrow con return implicito

let resultado4 = numbers.map(number => number * 100);
console.log("metodo4: " + resultado4);
