// функция открывает помощь по диамантам
// задача функции отрендерить нужную разметку в пустой контейнер див
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
    result = translate.translate(returnInfoForDiamant());
    let diamentInfo = document.getElementById('daiment-info');
    if (!diamentInfo) return;
    diamentInfo.innerHTML = result;
    clearInterval(id);
    },100);
})();
