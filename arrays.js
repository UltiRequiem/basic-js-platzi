var fruits = ["Manzana", "Platano", "Cereza", "Fresa"];
console.log(`My arrya contiene: ${fruits}`);
console.log(`La cantidad de elementos que contiene son: ${fruits.length}`);

console.log(`El primer elemento del array es: ${fruits[0]}`);

var masFrutas = fruits.push("Uvas");
console.log(fruits);

var utlimo = fruits.pop("Uvas");
console.log(fruits);

var nue = fruits.unshift("Uvas");
console.log(fruits);

var deleteFruit = fruits.shift("Manzana");
console.log(fruits);


var position = fruits.indexOf("Platano");
console.log(fruits);