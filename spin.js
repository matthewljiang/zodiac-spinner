const spinArrow = document.getElementById('arrow');
const zodiacCircle = document.getElementById('zodiac');
const spinResult = document.getElementById('spinResult');
const zodiacName = {
  0: 'Rabbit',
  1: 'Dragon',
  2: 'Snake',
  3: 'Horse',
  4: 'Sheep',
  5: 'Monkey',
  6: 'Rooster',
  7: 'Dog',
  8: 'Boar',
  9: 'Rat',
  10: 'Ox',
  11: 'Tiger'
};

let currentDegree = 0;
let currentPosition = 0;

function changeDegree() {
  positionChange = Math.floor(Math.random() * 13);
  currentDegree += 720 + (positionChange * 30);
  currentPosition += positionChange;
  currentPosition %= 12;
  spinArrow.style.transform = `rotate(${currentDegree}deg)`;
}

spinArrow.onclick = function() {
  changeDegree();
  setTimeout(() => {
    spinResult.innerHTML = zodiacName[currentPosition];
  }, 1000);
}
