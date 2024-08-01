// Функция сбрасывает статистику по тому тесту, в котором 
// находитсяя пользователь.
// статистика и информация хранятся в локальном хранилище
// Две переменные resetOk и resetError создаются с использованием
// их постоянных чатей level, _Ok, _Error и уровня, который 
// хранится отдельно в хранилище.
// Соединив всё это получаются две переменные, которые используются
// как индекс, который нужно обнулить.
const resetStatistic = () => {

    const level = localStorage.getItem('level');
    const resetOk = 'level'+level+'_Ok';
    const resetError = 'level'+level+'_Error';
    localStorage.setItem(resetError,0);
    localStorage.setItem(resetOk,0); 
    handleLevelX(new LevelDataModel(+level));

}
