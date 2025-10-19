// Функция подбирает для определенного id цвет фона и контрастный цвет символов

import { generateColorPair } from './generateColorPair.js';
import { getBoxShadow } from './getBoxShadow.js';
import { SettingForProgram } from '../../models/SettingForProgram.js';

export function getContrastColorTwo(id) {
  
  let colorBack = 0;
  let colorText = 0;
  
  const timerId = setInterval(() => {
    // Придумать два цвета и получить их мнимую координату
    colorBack = generateColorPair();
    if (SettingForProgram.selectColorBackGround == 'color-white') colorBack = 'rgb(255,255,255)';
    if (SettingForProgram.selectColorBackGround == 'color-black') colorBack = 'rgb(0,0,0)';

    colorText = generateColorPair();
    if (SettingForProgram.selectColorText == 'color-white') colorText = 'rgb(255,255,255)';
    if (SettingForProgram.selectColorText == 'color-black') colorText = 'rgb(0,0,0)';  

    // Если расстояние между ними больше 320, то покрасить объекты и закрыть цикл
    if (colorDifferenceRGB(colorBack, colorText) > 320) {
      
      id.style.backgroundColor = colorBack;

      id.style.color = colorText;

      if (SettingForProgram.shadow !== 'false')
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