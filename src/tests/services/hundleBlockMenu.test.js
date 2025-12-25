import { describe, it, expect, vi } from 'vitest';
import { hundleBlockMenu } from '../../services/hundleBlockMenu';

describe('hundleBlockMenu', () => {

  it('returns true if elements exist', () => {
    document.body.innerHTML = `
      <div class="nav-item">
        <div class="dropdown-content" style="display:none">Menu</div>
      </div>
    `;

    const result = hundleBlockMenu();
    expect(result).toBe(true);
  });

  it('toggles display on container click', () => {
    document.body.innerHTML = `
      <div class="nav-item">
        <div class="dropdown-content" style="display:none">Menu</div>
      </div>
    `;
    hundleBlockMenu();

    const container = document.querySelector('.nav-item');
    const content = container.querySelector('.dropdown-content');

    // Первый клик → показать
    container.click();
    expect(content.style.display).toBe('block');

    // Второй клик → скрыть
    container.click();
    expect(content.style.display).toBe('none');
  });

  it('clicking inside content does not hide it', () => {
    document.body.innerHTML = `
      <div class="nav-item">
        <div class="dropdown-content" style="display:none">Menu</div>
      </div>
    `;
    hundleBlockMenu();

    const container = document.querySelector('.nav-item');
    const content = container.querySelector('.dropdown-content');

    container.click(); // показываем
    content.click();   // клик внутри
    expect(content.style.display).toBe('block');
  });

  it('clicking outside hides the menu', () => {
    document.body.innerHTML = `
      <div class="nav-item">
        <div class="dropdown-content" style="display:none">Menu</div>
      </div>
    `;
    hundleBlockMenu();

    const content = document.querySelector('.dropdown-content');
    const outside = document.body;

    // показываем меню
    document.querySelector('.nav-item').click();
    expect(content.style.display).toBe('block');

    // клик вне
    outside.click();
    expect(content.style.display).toBe('none');
  });

});
