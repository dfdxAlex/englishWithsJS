
export function backgraundForLanguageSeect(array, color)
{
    // Создать массив с выбранными элементами
    array.forEach((el)=>{
        const selected = document.getElementById(el);
        if (selected) {
            selected.style.background = color;
        }
    });
}