// Завдання 1

function intersection(arrA, arrB) {
  const setA = new Set(arrA);
  const setB = new Set(arrB);
  const results = [];

  for (const value of setA) {
    if (setB.has(value)) {
      results.push(value);
    }
  }
  return results;
}

console.log( intersection([1,2,2,3], [2,3,4]) ); // [2,3]

console.log(intersection(["a", "b"], ["b", "c"])); // ["b"]

// Завдання 2
const arrA = [1, 2, 3];
const arrB = [3, 4, 2, 5];

const arr = new Set();

function union(arrA, arrB) {
  return [...new Set([...arrA, ...arrB])];
}

console.log(union([1, 2, 3], [3, 4, 2, 5])); // [1,2,3,4,5]

//Завдання 3

const users = [
  { name: "Оля", role: "admin" },

  { name: "Іван", role: "user" },

  { name: "Марія", role: "admin" },

  { name: "Петро", role: "user" },
];


function groupByRole(arr) {
  const results = new Map();
  
  for (const user of arr) {
    const role = user.role;

  if (!results.has(role)) {
    results.set(role, []);
  }

  results.get(role).push(user.name)
}
return results;
}

const grouped = groupByRole(users);

console.log(grouped.get("admin")); // ["Оля","Марія"]

console.log(grouped.get("user")); // ["Іван","Петро"]