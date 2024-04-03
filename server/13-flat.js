const matriz = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, [1, 2]]],
  [7, 8, 9],
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i];
  for (let j = 0; j < array.length; j++) {
    const element = matriz[i][j];
    newArray.push(element);
  }
}

const rta = matriz.flat(3);
console.log("for", newArray);
console.log("flat", rta);

const flatten = (matriz) =>
  matriz.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

flatten(matriz);

const input = [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
];

/* const result = [...input]
  .toString()
  .replace(/ /g, "")
  .replace(/[^\w\s]|_/g, "").length; */

const result = [].toString().replaceAll(",", " ").split(" ");
const result2 = input.flatMap((item) => item.split(" ")).length;

console.log(input);
console.log(result);
