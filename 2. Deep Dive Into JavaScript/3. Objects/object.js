let user = {
  name: "Yevheniia",
  sername: "Uhnich",
  age: 42,
  city: "Kremenchuk",
  student: true,
};

function getProp(obj, key) {
  return obj[key] || "Немає властивості";
}

function setProp(obj, key, value) {
  obj[key] = value;

  return obj;
}

// Task-2 //

const defaults = { theme: "light", showNav: true };
const prefs = { showNav: false, fontSize: 16 };

const clone = Object.assign({}, defaults, prefs);
/* clone.theme = "light";
clone.showNav = false;
clone.fontSize = 16; */

console.log(defaults);
console.log(clone);
console.log(prefs);

// Task - 3//

const orig = {
  title: "Task",
  data: { id: 1, values: [10, 20] },
};

const copy = JSON.parse(JSON.stringify(orig));
copy.title = "Task";
copy.data.id = 1;
copy.data.values.push(30);
console.log(orig.title, orig.data.id, orig.data.values);
