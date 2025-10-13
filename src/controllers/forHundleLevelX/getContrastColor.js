

export function getContrastColor(rgb) {
  const [r, g, b] = rgb.match(/\d+/g).map(Number);

  // яркость по формуле WCAG
  // const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // console.log(brightness);
  // если фон тёмный, текст белый, если светлый — динамический серый
  // if (brightness > 50 && brightness < 200) {
  //   if (brightness < 128)
  //       return 'rgb(255,255,255)';  // текст виден на тёмном фоне
  //   if (brightness > 127)
  //       return 'rgb(0,0,0)';  // текст виден на тёмном фоне
  // }

  // const contrast = Math.round(255 - brightness);

  const colorR = returnColorForText(r);
  const colorG = returnColorForText(g);
  const colorB = returnColorForText(b);

  return `rgb(${colorR}, ${colorG}, ${colorB})`;
}

function returnColorForText(color)
{
    if (color > 30 && color < 220) {
        if (color < 128) return 255;
        if (color > 127) return 0;
    }

    return 255-color;
}