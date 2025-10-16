import { getRandom } from '../../services/getRandom.js';

export function generateColorPair() {
  // случайная тройка RGB
  const rgb1 = [
    getRandom(0, 255),
    getRandom(0, 255),
    getRandom(0, 255),
  ];

  return `rgb(${rgb1.join(', ')})`;
}