//Завдання 1

function normalizeName(name) {
  return name
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(normalizeName(" aNNA mARie ")); // "Anna Marie"

//Завдання 2

function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-z0-9-]+(.\[a-zA-Z0-9-]+)*\.[a-zA-Z]+$/;
  return regex.test(email);
}

console.log(isValidEmail("test.user-1@example.co")); // true

console.log(isValidEmail("bad@@example..com")); // false

//Завдання 3

const post = "JS це круто! #javascript #web_dev #100DaysOfCode";
const hashtags = post.match(/#[a-zA-Zа-яА-ЯїЇєЄґ0-9_-]+/g);

console.log(hashtags);

// Завдання 4

const raw = "380501234567";

const formatted = raw.replace(/(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/, (_, code, operator, part1, part2, part3) => {
  return `+${code} (${operator}) ${part1}-${part2}-${part3}`;
});

console.log(formatted); // +38 (050) 123-45-67
