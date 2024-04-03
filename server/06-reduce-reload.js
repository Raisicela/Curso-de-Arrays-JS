const items = [1, 3, 2, 3];

const rta = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});

console.log(rta);

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta1 = data
  .map((item) => item.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }
    return obj;
  }, {});

console.log(rta1);

const numbers = [
  1, 2, 3, 5, 8, 7, 2, 6, 9, 4, 2, 3, 5, 7, 9, 10, 6, 7, 1, 3, 10, 5, 9,
];

const frequency = numbers.reduce((accu, element) => {
  if (element >= 1 && element <= 5) {
    accu["1 - 5"] = (accu["1 - 5"] || 0) + 1;
  } else if (element >= 6 && element <= 10) {
    accu["6 - 10"] = (accu["6 - 10"] || 0) + 1;
  }
  return accu;
}, {});

console.log(frequency);
console.log(numbers.length);
