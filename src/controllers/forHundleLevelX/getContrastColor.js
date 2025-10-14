

export function getContrastColor(rgb) {
  const [r, g, b] = rgb.match(/\d+/g).map(Number);

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