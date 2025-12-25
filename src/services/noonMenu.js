// Функция находит элемент и прячет его

// покрыта тестом
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

noonMenu.help = `
Функция находит элемент и прячет его. Входящий параметр - это селектор для querySelector();
`;