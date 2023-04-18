const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;

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
  element.style.backgroundColor = 'red';
}

// удаление цвета при уходе с квадрата
function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
}