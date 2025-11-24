// принимает подмассив и возвращает перевод согласно выбранному языку
export function getTranslateForTest(dataArray)
{
        if (localStorage.getItem('EnglishWithJs_lang') === 'ru') {
            return dataArray[5];
        } else if (localStorage.getItem('EnglishWithJs_lang') === 'ua') {
            return dataArray[6];
        } else if (localStorage.getItem('EnglishWithJs_lang') === 'pl') {
            return dataArray[7];
        }
}

getTranslateForTest.help = `
принимает подмассив и возвращает перевод согласно выбранному языку
`;