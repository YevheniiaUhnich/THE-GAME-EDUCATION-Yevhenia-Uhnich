function showCurrentTime() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(showCurrentTime, 1000); 


function diffInDays(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const diffInMs = Math.abs(d2 - d1);

  // Один день = 86400000 мс (1000 * 60 * 60 * 24)
  const msInDay = 1000 * 60 * 60 * 24;

  return Math.floor(diffInMs / msInDay);
}

console.log(diffInDays('2025-08-01', '2025-08-05')); // 4
console.log(diffInDays(new Date(), '2025-12-31'));   // кількість днів до нового року
