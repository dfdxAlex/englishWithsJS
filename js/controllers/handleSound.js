// обработчик события для нажатия на динамик

const buttonSound = document.getElementById('sound');

buttonSound.addEventListener('click', ()=>{
    //console.log('нажали на динамик');
    const buttonQuestion = document.getElementById('question');
    // поместить ссылку на сервер в объект httpAsk 
    //(создается сразу под конструктором HttpClient)
    httpAsk.link = 'https://amatordd.webd.pro/amatorDed/DFDX/test.php';
    //Создать сам запрос к серверу
    const textRequest = buttonQuestion.innerText;
    const dataRequest = 'sound='+encodeURIComponent(textRequest);
    //Запрос отправляется когда сеттеру fetchData придать значение
    //Ответ будет в геттере fetchData
    httpAsk.fetchData = dataRequest;
    //console.log(httpAsk.fetchData);
});
