// Специальная проверка на работу с массивом toBeSentences
// Он создан не стандартно, в нем дублируется первое слово

export function cleartoBeSentences(arrayButton)
{
    if (localStorage.getItem('nameArrayDb') === 'toBeSentences') {
        arrayButton.shift();
    }
    return arrayButton;
}

cleartoBeSentences.help = `
Специальная проверка на работу с массивом toBeSentences
Он создан не стандартно, в нем дублируется первое слово
`;