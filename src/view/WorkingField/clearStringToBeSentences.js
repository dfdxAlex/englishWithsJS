// Функция очищает нулевой элемен от дублирующего слова

export function clearStringToBeSentences(stringToBeSentences)
{
    let arrayString = [];
    let stringFoWork = stringToBeSentences;
    if (localStorage.getItem('nameArrayDb') === 'toBeSentences') {
        arrayString = stringFoWork.split(" ");
        arrayString.shift();
    }
    let rezString = arrayString.join(" ");
    rezString = rezString.replace("not", '');

    return rezString;
}

clearStringToBeSentences.help = `
Функция очищает нулевой элемен от дублирующего слова. toBeSentences
`;