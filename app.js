const board = document.querySelector('#board');
const colors = ['#53D7E0', '#53E0D4', '#53E0BD', '#53E0A1', '#53C9E0', '#53B6E0', '#53A1E0', '#53E066'];
const SQUARES_NUMBER = 900;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  // добавление квадратов
  const square = document.createElement('div');
  square.classList.add('square');
  
  square.addEventListener('mouseover', () => {
    setColor(square);
  })
  
  square.addEventListener('mouseleave', () => {
    removeColor(square);
  })

  board.append(square);
}

// установка цвета при наведении
function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

// удаление цвета при уходе с квадрата
function removeColor(element) {
  element.style.backgroundColor = '#111';
  element.style.boxShadow = '0 0 2px #000';
}

// задание случайного цвета из массива цветов
function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}