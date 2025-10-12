
// export function getContrastColor(rgb) {
//   const [r, g, b] = rgb.match(/\d+/g).map(Number);
//   const brightness = (r * 299 + g * 587 + b * 114) / 1000;
//   return brightness > 128 ? 'black' : 'white';
// }

export function getContrastColor(rgb) {
  const [r, g, b] = rgb.match(/\d+/g).map(Number);

  // яркость по формуле WCAG
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  console.log(brightness);
  // если фон тёмный, текст белый, если светлый — динамический серый
  if (brightness > 70 && brightness < 180) {
    if (brightness < 128)
        return 'rgb(255,255,255)';  // текст виден на тёмном фоне
    if (brightness > 127)
        return 'rgb(0,0,0)';  // текст виден на тёмном фоне
  }

  const contrast = Math.round(255 - brightness);
  return `rgb(${contrast}, ${contrast}, ${contrast})`;
}
