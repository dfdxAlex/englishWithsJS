// обработчик события для нажатия на динамик

const buttonSound = document.getElementById('sound');

buttonSound.addEventListener('click', ()=>{
    //console.log('нажали на динамик');
    const buttonQuestion = document.getElementById('question');
    if (buttonQuestion === null) return false;

    // поместить ссылку на сервер в объект httpAsk 
    //(создается сразу под конструктором HttpClient)
    httpAsk.link = 'https://amatordd.webd.pro/amatorDed/DFDX/test.php';
    
    //Создать сам запрос к серверу
    const textRequest = buttonQuestion.innerText;
    if (textRequest === '...') {
        return false;
    }
    const dataRequest = 'sound='+encodeURIComponent(textRequest);

    //Запрос отправляется когда сеттеру fetchData придать значение
    //Ответ будет в геттере fetchData
    httpAsk.fetchData = dataRequest;
    //console.log(httpAsk.fetchData);

    const audio = new Audio(httpAsk.fetchData);
    // Обработчик события 'loadeddata', который срабатывает, когда метаданные о загруженном аудио готовы
    audio.addEventListener('loadeddata', () => {
        audio.play(); // Воспроизведение звука после загрузки
    });
    audio.load();
});


