// Функция подбирает для определенного id цвет фона и контрастный цвет символов

import { generateColorPair } from './generateColorPair.js';
import { getBoxShadow } from './getBoxShadow.js';

export function getContrastColorTwo(id) {
  
  let colorBack = 0;
  let colorText = 0;
  
  const timerId = setInterval(() => {
    colorBack = generateColorPair();
    colorText = generateColorPair();

    if (colorDifferenceRGB(colorBack, colorText) > 320) {
      id.style.backgroundColor = colorBack;
      id.style.color = colorText;
      id.style.boxShadow = getBoxShadow(colorBack);
      clearInterval(timerId);
    }
  }, 1);

}


function colorDifferenceRGB(color1, color2) {
  // Ожидаем цвета в формате "rgb(r,g,b)"
  const [r1, g1, b1] = color1.match(/\d+/g).map(Number);
  const [r2, g2, b2] = color2.match(/\d+/g).map(Number);

  const diff = Math.sqrt(
    Math.pow(r1 - r2, 2) +
    Math.pow(g1 - g2, 2) +
    Math.pow(b1 - b2, 2)
  );

  return diff; // 0 — цвета одинаковые, ~441 — максимально разные (черный vs белый)
}