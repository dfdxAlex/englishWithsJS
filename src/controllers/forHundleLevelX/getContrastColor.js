

export function getContrastColor(rgb) {
  let i=0;
  const [r, g, b] = rgb.match(/\d+/g).map(Number);

  let colorR = 255 - r;
  let colorG = 255 - g;
  let colorB = 255 - b;

  if (colorR < 128) i++;
  if (colorG < 128) i++;
  if (colorB < 128) i++;

  if (i>1) {
    colorR = 0;
    colorG = 0;
    colorB = 0;
  } else {
    colorR = 255;
    colorG = 255;
    colorB = 255;
  }

  return `rgb(${colorR}, ${colorG}, ${colorB})`;
}
