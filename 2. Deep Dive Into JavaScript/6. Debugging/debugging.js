function calculateAverage(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

const data = [10, 20, 30];

console.log(calculateAverage(data)); // 20

// Завдання 2

const jsonStrings = ['{"name":"Оля"}', "{bad json}", '{"name":"Іван"}'];

for (let s of jsonStrings) {
  try {
    const obj = JSON.parse(s);
    console.log("obj.name");
  } catch (error) {
    console.error("Invalid JSON:", s);
  }
}

// Завдання 3

function multiplyArray(arr) {
  let result = 1;

  for (let i = 0; i < arr.length; i++) {
    try {
      if (typeof arr[i] !== "number") {
        throw new Error("Non-number element");
      }
      result *= arr[i];
    } catch (error) {
      console.error(error.message, `at index ${i}`);
    }
  }
  return result;
}

const values = [2, 3, "4", 5];

console.log(multiplyArray(values));

// Завдання 4

const users = [
  { name: "Оля", age: 20 },

  { name: "Іван", age: 25 },
];

function getUserAge(name) {
  for (let i = 0; i < age.length; i++) {
    if (users[i].age === age) {
      return users[i].age;
    }
  }
  console.log(age);
  // return "User not found";
}

console.log(getUserAge(25));
