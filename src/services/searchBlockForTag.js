// Функция принимает в параметр массив со строками созданными по правилу thouryUnit1()
// Находит там нужный tag и возвращает весь текст уже в виде строки от нужного тега до пустой строки

export function searchBlockForTag(strStart, tag)
{
    let searchBool = false;
    let strRez = strStart.reduce((acc, value) => {

        if (value.includes(tag)) {
            searchBool = true;
            return acc;
        }
        if (value.trim() === "") {
            searchBool = false;
        }

        if (searchBool) {
            acc+=value+'\n';
        }

        return acc;
        
    }, "");

    return strRez;
}