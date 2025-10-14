

export function getContrastColor(rgb) {
  console.log('фон:'+rgb);
  let i=0;
  const [r, g, b] = rgb.match(/\d+/g).map(Number);

  // let colorR = returnColorForText(r);
  // let colorG = returnColorForText(g);
  // let colorB = returnColorForText(b);

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

  console.log('текст:'+`rgb(${colorR}, ${colorG}, ${colorB})`);
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

