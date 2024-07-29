// функция считает число верных ответов и записывает 
// их в свою переменную в локальном хранилище.
// У каждого урока будут свои переменные для хранения верных ответов
// То есть каждый запуск этого обработчика событий увеличивает 
// число верных ответов на одну единицу.
// Функция handleLevelX(); перезапускает рабочее поле 
// для обновления информации

function handleOkErr(str) {
    let tic = 0;
    const levexW = 'level'+localStorage.getItem('level')+'_'+str;
    tic = +localStorage.getItem(levexW);
    localStorage.setItem(levexW,tic+1);

    handleLevelX(new LevelDataModel(+localStorage.getItem('level')));
}
