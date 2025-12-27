

export function calculateMedian(array) {
    const sorted = [...array].sort((a, b) => a - b); // Сортируем массив
    const mid = Math.floor(sorted.length / 2);       // Находим середину

    if (sorted.length % 2 === 0) {
        // Если чётное количество элементов, среднее двух центральных
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        // Если нечётное, возвращаем центральный элемент
        return sorted[mid];
    }
}
