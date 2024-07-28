// функция считает число неверных ответов и записывает 
// их в свою переменную в локальном хранилище.
// У каждого урока будут свои переменные для хранения ошибок
// То есть каждый запуск этого обработчика событий увеличивает 
// число ошибок на одну единицу.
// Функция handleLevelX(); перезапускает рабочее поле 
// для обновления информации

const handleError = () => {
    let tic = 0;

    if (localStorage.getItem('level') === '1') {
        tic = +localStorage.getItem('level1_Error');
        localStorage.setItem('level1_Error',tic+1);
        handleLevelX(toBeForms, 1);
    }
    if (localStorage.getItem('level') === '2') {
        tic = +localStorage.getItem('level2_Error');
        localStorage.setItem('level2_Error',tic+1);
        handleLevelX(toBeSentences, 2);
    }
    
}
