// Завдання 1

const defaults = { theme: "light", layout: "grid", showNav: true };

const userPref = { layout: "list", showNav: false, fontSize: 16 };

/* const settings = Object.assign({}, defaults, {
  layout: "list",
  showNav: false,
  fontSize: 16,
});
console.log(settings); */

const setting = { ...defaults, ...userPref };
console.log(setting);

// Завдання 2

const grades = { math: 90, history: 75, biology: 85, art: 100 };
/* const entries = Object.entries(grades);
console.log(entries); */

const students = Object.entries(grades).map(([subject, score]) => {
  return `${subject} : ${score}`;
});

console.log(students);


// Завдання 3

function sumAll (...nums) {
return nums.reduce((a, b) => a + b, 0)
}
console.log(sumAll(1, 2, 3)); 
console.log(sumAll(5, 10, 15, 20));
console.log(sumAll());


//Завдання 4
function analyzeConfig(config) {
  const dbKeys = ["host", "port", "user", "password"];

  const dbSettings = {};
  const otherSettings = {};

  for (const [key, value] of Object.entries(config)) {
    if (dbKeys.includes(key)) {
      dbSettings[key] = value;
    } else {
      otherSettings[key] = value;
    }
  }
  return { dbSettings, otherSettings };
}

const input = {
  host: "localhost",
  port: 5432,
  user: "admin",
  password: "secret",
  debug: true,
  logLevel: "verbose",
  version: 2,
};

const { dbSettings, otherSettings } = analyzeConfig(input);
console.log(dbSettings);