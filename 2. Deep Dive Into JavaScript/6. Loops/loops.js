function sumDigits(n) {
  if (typeof n !== "number" || n < 0) {
    console.log("Error");
    return 
  }

  let sum = 0;

  const digits = n.toString();
  for (let i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]);
  }
  return sum;
}
console.log(sumDigits(12456));
console.log(sumDigits(746464));
console.log(sumDigits(-1));
console.log(sumDigits(-34));

function multiplicationTable(n) {
  if (typeof n !== "number" || n < 0) {
    console.log("Error");
    return;
  }

  for (let i = 1; i <= 10; i++) {
    console.log(`${i} * ${n} = ${i * n}`);
  }
}

console.log(multiplicationTable(10));
console.log(multiplicationTable(2));
console.log(multiplicationTable(3));


const warehouse = {
  apples: 10,
  bananas: 5,
  oranges: 12,
  pears: 7,
};

let total = 0;

for (const prop in warehouse) {
  console.log(`${prop}: ${warehouse[prop]}`);
  total += warehouse[prop];
}

console.log(`Total number fruits: ${total}`);


function invert(obj) {
  const inverted = {}
  for (const [key, value] of Object.entries(obj)) {
    inverted[value] = key;
    console.log(`Ключ = ${key}, Значення = ${value}`);
  } 
  return inverted;
}

const likeBook = {
  title: "Маленький принц",
  author: "Антуан де Сент-Екзюпері",
  year: 1943,
  pages: 96
};
console.log(invert(likeBook));


