import { playSound } from '../handleSound/playSound.js';

export function addButtonPlaySound(buttonId, options = {})
{
  const btn = document.getElementById(buttonId);
  if (!btn) return false;

  // чтобы absolute работал корректно
  const computedPos = getComputedStyle(btn).position;
  if (computedPos === 'static') {
    btn.style.position = 'relative';
  }

  // защита от дубликатов
  if (btn.querySelector('#play'+buttonId)) return true;

  const speaker = document.createElement('span');
  speaker.className = 'speaker-icon';
  speaker.textContent = options.icon || '🔊';

  speaker.style.position = 'absolute';
  speaker.style.top = '50%';
  speaker.style.transform = 'translateY(-50%)';
  speaker.style.cursor = 'pointer';
  speaker.style.userSelect = 'none';
  speaker.id = 'play'+buttonId;

  const side = options.side || 'right'; // 'right' | 'left'
  const offset = options.offset ?? 8;

  if (side === 'right') {
    speaker.style.left = `calc(100% + ${offset}px)`;
  } else {
    speaker.style.left = `-${offset + 20}px`; // 20 ≈ ширина иконки
  }

  btn.appendChild(speaker);

  const buttonPlay = document.getElementById('play'+buttonId);
  buttonPlay.addEventListener('click', ()=>{
    playSound(buttonId.replace('-sound', ''));
  })

  return true;
}
