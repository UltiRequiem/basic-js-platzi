var fruits = ["Manzana", "Platano", "Cereza", "Fresa"];
console.log(`My arrya contiene: ${fruits}`);
console.log(`La cantidad de elementos que contiene son: ${fruits.length}`);

console.log(`El primer elemento del array es: ${fruits[0]}`);

fruits.push("Uvas");
console.log(fruits);

fruits.pop("Uvas");
console.log(fruits);

fruits.unshift("Uvas");
console.log(fruits);

fruits.shift("Manzana");
console.log(fruits);

console.log(fruits.indexOf("Platano"));
