const pets = ["cat", "dog", "bat"];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === "tiger") {
    includeInArray = true;
    break;
  }
}

const rta = pets.includes("dog");
console.log("for", includeInArray);
console.log("includes", rta);

const array = ["ana", "santi", "nico", "anastasia"];
const term = "ana";
function filterByTerm(array, term) {
  return array.filter((element) => element.includes(term));
}

console.log(filterByTerm(array, term));
