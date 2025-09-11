// Функция находит элемент и прячет его

export function noonMenu(name)
{
    const el = document.querySelector(name);
    if (el) {
        el.style.display = 'none';
        return true;
    } else {
        return false;
    }
};