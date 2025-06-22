function trafficLight(action, mode) {
  if (mode === "switch") {
    switch (action) {
      case "red":
        return "STOP";

      case "yellow":
        return "READY";

      case "green":
        return "GO";

      default:
        return "UNKNOWN SIGNAL";
    }
  }
  if (mode === "ifElse") {
    if (action === "red") {
      return "STOP";
    } else if (action === "yellow") {
      return "READY";
    } else if (action === "green") {
      return "GO";
    } else return "UNKNOWN SIGNAL";
  }
}

console.log(trafficLight("red", "switch"));     // "STOP"
console.log(trafficLight("yellow", "switch")); // "READY"
console.log(trafficLight("green", "switch")); // "GO"
console.log(trafficLight("black", "switch")); // "UNKNOWN SIGNAL"

console.log(trafficLight("red", "ifElse")); // "STOP"
console.log(trafficLight("yellow", "ifElse"));  // "READY"
console.log(trafficLight("green", "ifElse")); // "GO"
console.log(trafficLight("blue", "switch"));    // "UNKNOWN SIGNAL"


function isEven(n) {
  let results = (n % 2 === 0) ? `Number ${ n } - isEven` : `Number ${n} - notEven`;
  console.log(results);
}