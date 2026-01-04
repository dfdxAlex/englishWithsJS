
// Функция делает первый символ строки заглавным

export function capitalizeFirst(str) {
  if (!str) return str; // защита от пустой строки
  return str[0].toUpperCase() + str.slice(1);
}