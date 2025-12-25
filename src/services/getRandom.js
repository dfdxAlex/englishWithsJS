// случайное число от min до max
// покрыта тестом

export function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}