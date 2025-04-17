// функция открывает помощь по диамантам
// задача функции отрендерить нужную разметку в body
// Запустится компонент с помощью средств бутстрапа
//  data-bs-toggle="modal" data-bs-target="#diamondsModal"
// бутстрап сам накидывает события на кнопку используя триггеры data-bs-

// функция переделана на самозапускающуюся, она ждёт пока не появятся 
// все нужные элементы и помещает Бутстрап компонент
(function daimentInfo()
{
    let result;
    const translate = FactoryRegistr.getObject("LanguageController");
    let id = setInterval(()=>{

    if (typeof returnInfoForDiamant !== 'function') return;
    if (typeof translate !== 'object') return;
    result = translate.translate(returnInfoForDiamant());

    document.body.insertAdjacentHTML("beforeend", result);

    clearInterval(id);
    },100);
})();
