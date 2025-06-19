const percentsTab = document.getElementById('percentsTab');
const timeTab = document.getElementById('timeTab');
const sectionPercents = document.getElementById('sectionPercents');
const sectionTime = document.getElementById('sectionTime');


percentsTab.onclick = () => {
    percentsTab.classList.add('active');
    percentsTab.classList.remove('active');
    sectionPercents.classList.add('active');
    sectionPercents.classList.remove('active');
} 

timeTab.onclick = () => {
    timeTab.classLiast.add('active');
    timeTab.classList.remove('active');
    sectionTab.classList.add('active');
    sectionTab.classList.remove('active');
}

document.getElementById('sectionPercents').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const base = parseFloat(document.getElementById('baseNumber').value);
    const percent = parseFloat(document.getElementById('percentValue').value);
    const resultEl = document.getElementById('percentResult');
  
    if (isNaN(base) || isNaN(percent)) return;
  
    const value = (base * percent) / 100;
    const remainder = base - value;
    resultEl.value = `${percent}% від ${base} = ${value} | Залишок: ${remainder}`;
  });
  
  document.getElementById('sectionTime').addEventListener('submit', function(e) {
    e.preventDefault();
    const S = parseInt(document.getElementById('secondsInput').value);
    const resultEl = document.getElementById('timeResult');
  
    if (isNaN(S) || S < 0) return;
  
    const hours = Math.floor(S / 3600);
    const minutes = Math.floor((S % 3600) / 60);
    const seconds = S % 60;
  
    resultEl.value = `годин: ${hours}; хвилин: ${minutes}; секунд: ${seconds}`;
  });
  
  // Перетворення часу
const convertTime = () => {
    const secondsInput = document.getElementById('secondsInput');
    const resultEl = document.getElementById('timeResult');
  
    const S = parseInt(secondsInput.value);
    if (!S || S < 0) return;
  
    const [hours, minutes, seconds] = [
      Math.floor(S / 3600),
      Math.floor((S % 3600) / 60),
      S % 60
    ];
  
    resultEl.textContent = `годин: ${hours}; хвилин: ${minutes}; секунд: ${seconds}`;
  };
  

