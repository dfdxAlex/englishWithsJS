import { describe, it, expect } from 'vitest';
import { noonMenu } from '../../services/noonMenu.js';

describe('noonMenu', () => {
  it('hides the element if it exists', () => {
    // Создаём элемент в DOM
    document.body.innerHTML = `<div id="menu">Lunch</div>`;

    const result = noonMenu('#menu');

    // Проверяем, что функция вернула true
    expect(result).toBe(true);

    // Проверяем, что элемент реально спрятан
    const el = document.querySelector('#menu');
    expect(el.style.display).toBe('none');
  });

  it('returns false if element does not exist', () => {
    document.body.innerHTML = ''; // DOM пустой

    const result = noonMenu('#menu');
    expect(result).toBe(false);
  });
});
