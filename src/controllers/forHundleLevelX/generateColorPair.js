import { getRandom } from '../../services/getRandom.js';

export function generateColorPair() {
  // случайная тройка RGB
  const rgb1 = [
    getRandom(0, 255),
    getRandom(0, 255),
    getRandom(0, 255),
  ];

  // антипод — 255 минус каждый компонент
  const rgb2 = rgb1.map(num => 255 - num);

  // Если цвета используются средние, то для избежания схожести цвета фона и текста
  // Развести их по краям принудительно.
  if ((rgb1[0] - rgb2[0]) < 50) {
     rgb1[0] = getRandom(0, 100);
     rgb2[0] = getRandom(150, 255);
  }

  if ((rgb1[1] - rgb2[1]) < 50) {
     rgb1[1] = getRandom(0, 100);
     rgb2[1] = getRandom(150, 255);
  }

  if ((rgb1[2] - rgb2[2]) < 50) {
     rgb1[2] = getRandom(0, 100);
     rgb2[2] = getRandom(150, 255);
  }
  // возвращаем оба формата
  return {
    color1: `rgb(${rgb1.join(', ')})`,
    color2: `rgb(${rgb2.join(', ')})`
  };
}