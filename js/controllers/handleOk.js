// функция считает число верных ответов и записывает 
// их в свою переменную в локальном хранилище.
// У каждого урока будут свои переменные для хранения верных ответов
// То есть каждый запуск этого обработчика событий увеличивает 
// число верных ответов на одну единицу.
// Функция handleLevelX(); перезапускает рабочее поле 
// для обновления информации

const handleOk = () => {
    let tic = 0;

    if (localStorage.getItem('level') === '1') {
        tic = +localStorage.getItem('level1_Ok');
        localStorage.setItem('level1_Ok',tic+1);
        handleLevelX(new LevelDataModel(1));
    }
    
    if (localStorage.getItem('level') === '2') {
        tic = +localStorage.getItem('level2_Ok');
        localStorage.setItem('level2_Ok',tic+1);
        handleLevelX(new LevelDataModel(2));
    }
    
}
