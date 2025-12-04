
export function is_notWord(arr) {
    const str = arr?.[0];
    if (!str) return false; 

    return (
        str.includes('/') ||
        str.includes('...') || 
        str.includes('…') ||
        str.includes('___')
    );
}

is_notWord.help = `
Функция - дубликат только возвращает true, если в текущем подмассиве
работаем с пропущенным словом
`;
