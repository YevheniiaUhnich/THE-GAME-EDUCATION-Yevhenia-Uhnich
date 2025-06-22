let fruits = ["banana", "apple", "orange", "pear", "kiwi"];

fruits.unshift("apricot");
fruits.push("peach");

console.log(fruits); // ["apricot", "banana", "apple", "orange", "pear", "kiwi", "peach"]

fruits.shift("apricot");
fruits.pop("peach");
console.log(fruits);
console.log("fruits left: " + fruits.length);
console.log(fruits.join(", "));
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

let fruitsTwo = ["banana", "apple", "orange", "pear", "kiwi"];
let fruitsThree = [...fruitsTwo];

const part = fruitsThree[0];
fruitsThree[0] = fruitsThree[fruitsThree.length - 1];
fruitsThree[fruitsThree.length - 1] = part;

console.log(fruitsThree);

let fruitsFore = ["banana", "kiwi", "apple", "peach"];

console.log('I like fruits: ' + fruits.join(", "));

function isInArray(el, arr) {
  const message =
    "Елемент - " +
    el +
    ", " +
    (arr.includes(el) ? "є" : "не є") +
    " частиною масиву [" +
    arr.join(", ") +
    "]";
  return message;
}

let fruitsFive = ["banana", "kiwi", "apple", "peach"];
console.log(isInArray("banana", fruitsFive));
console.log(isInArray("grape", fruitsFive));
