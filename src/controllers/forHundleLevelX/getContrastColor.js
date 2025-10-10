
export function getContrastColor(rgb) {
  const [r, g, b] = rgb.match(/\d+/g).map(Number);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? 'black' : 'white';
}