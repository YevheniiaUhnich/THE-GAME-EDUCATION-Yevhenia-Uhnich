// Завдання 1

const counter = {
  count: 0,
  increment() {
    this.count += 1;
    return this.count;
  }
};

const inc = counter.increment;

// console.log(inc()); // this === undefined - немає доступу до this.count;
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.increment()); // 3

// Завдання 2

const counterArrow = {
  count: 0,
  incrementArrow: () => {
    // У стрілочній функції немає власного this.
    // Вона "успадковує" this з зовнішнього контексту
    this.count += 1;
    return this.count;
  }
};

const inc2 = counterArrow.increment;

//console.log(inc2()); 
// console.log(counterArrow.increment()); 
// console.log(counterArrow.increment()); 
// console.log(counterArrow.increment()); 

// Завдання 3

function sayHello(greeting, punctuation) {
  console.log(`${greeting}, я — ${this.name}${punctuation}`);
  return `${greeting}, я — ${this.name}${punctuation}`;
  }

const alice = { name: "Аліса" };
sayHello.call(alice, 'Hello', '!'); // Hello, я - Аліса!

// const alice = { name: "Аліса"};
// sayHello.apply('Hello', ['!']) // Hello, я — Аліса!

const bob = { name: "Боб" };
sayHello.call(bob, 'Hello', '!'); // Hello, я — Боб!

// const bob = { name: "Боб" };
// sayHello.apply('Hello', ['!']) // Hello, я — Боб!

const aliceHello = sayHello.bind(alice, "Привіт");
aliceHello("!"); // Привіт, я — Аліса!

// використала call, бо аргументи передаються по черзі, а не у вигляді масива, і їх мало

// call - викликає функцію одразу, аргументи передаються через кому
// apply - викликає функцію одразу, аргументи передаються масивом
// bind - не викликає функцію одразу, повертає нову функцію, у якій this вже привʼязаний, можна викликати пізніше


// Завдання 4

function greetAll(greeting) {
  this.forEach(function (name) {
    console.log(`${greeting}, ${name}!`);
  }, this);
} 

const names = ['Оля', 'Іван', 'Маша'];
  
greetAll.call([names], 'Вітаю');

greetAll.apply(names, ['Добрий день']);

["Привіт", "Доброго вечора", "Хай"].forEach(function (greeting) {
  greetAll.call(this, greeting);
}, names);