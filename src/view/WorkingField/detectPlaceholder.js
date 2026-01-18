
export function detectPlaceholder(arr) {
    const str = arr?.[0];
    if (!str) return null; 

    if (str.includes('/')) return '/';
    if (str.includes('...')) return '...';
    if (str.includes('…')) return '…';
    if (str.includes('___')) return '___';

    return null;
}

detectPlaceholder.help = `
Функция - возвращает тип знака, которым заменено пропущенное слово
`;
