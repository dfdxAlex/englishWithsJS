// функция открывает помощь по диамантам
// задача функции отрендерить нужную разметку в пустой контейнер див
// Запустится компонент с помощью средств бутстрапа
//  data-bs-toggle="modal" data-bs-target="#diamondsModal"
// бутстрап сам накидывает события на кнопку используя триггеры data-bs-

function daimentInfo()
{
    const translate = FactoryRegistr.getObject("LanguageController");
    const result = translate.translate(returnInfoForDiamant());
    document.getElementById('daiment-info').innerHTML = result;
}
