function sumThree(a, b, c) {
  console.log(a + b + c);
}
sumThree(3, 5, 6);

function sumThree(a, b, c) {
  console.log(a + b + c);
}
sumThree();

function sumThree(a = 5, b = 3, c) {
  console.log(a + b + c);
}
sumThree(2, 3);

function sumThree(a = 5, b = 0, c = 0) {
  console.log(a + b + c);
}
sumThree(5, 3, 6);

const sumThreeExpression = function (a, b, c) {
  return a + b + c;
};
console.log(sumThreeExpression(3, 5, 6));

const sumThreeArrow = (a, b, c) => {
  return a + b + c;
};
console.log(sumThreeArrow(3, 5, 6));

/* 
console.log(sumThreeExpression(3, 5, 6));  function.js:32 Uncaught ReferenceError: Cannot access 'sumThreeExpression' before initialization
at function.js:32:13 - Ця помилка означає функція, яку я намагаюсь використати, ще не була створена 

const sumThreeExpression = function(a, b, c)  {
return (a + b + c);
}; */

/* console.log(sumThreeArrow(3, 5, 6)); // function.js:40 Uncaught ReferenceError: Cannot access 'sumThreeArrow' before initialization
at function.js:40:13 - Ця помилка означає функція, яку я намагаюсь використати, ще не була створена 

const sumThreeArrow = (a, b, c) => {
return a + b + c;
} */

/* Коли функцію викликають без аргументу або аргументів за замовчуванням підсталяються дані, що передаються в параметрах */

function makePromoGenerator(prefix = "PROMO-") {
  let counter = 0;

  return function () {
    counter++;
    return `${prefix}${counter}`;
  };
}
const genA = makePromoGenerator("SALE-");
const genB = makePromoGenerator();

console.log(genA()); // "SALE-1"
console.log(genA()); // "SALE-2"
console.log(genA()); // "SALE-3"

console.log(genB()); // "PROMO-1"
console.log(genB()); // "PROMO-2"

console.log(genA()); // "SALE-4"

/* Код, який створює лічильник, який спрацьовує кожного разу, коли на нього натискають. 
В нашому випадку, два лічильника, які пам´ятає скільки разів його натиснули */

/* Замикання створює окрему область видимості для кожного виклику функції. 
Змінні із однаковими іменами в разних функціях не конфліктують, бо знаходяться у різних контекстах. */
