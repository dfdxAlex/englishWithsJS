// Функция находит все элементы с атрибутом data-bs-dismiss="modal" во всех модальных окнах
// и навешивает на них обработчик, который убирает фокус с активного элемента после закрытия модалки

export function fixModalFocus() {
  document.querySelectorAll('[data-bs-dismiss="modal"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.activeElement.blur();
    });
  });
}

fixModalFocus.help = `
Функция находит все элементы с атрибутом data-bs-dismiss="modal" во всех модальных окнах
и навешивает на них обработчик, который убирает фокус с активного элемента после закрытия модалки
`;