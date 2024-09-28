// обработчик события для нажатия на динамик

const buttonSound = document.getElementById('sound');

buttonSound.addEventListener('click', ()=>{
    //console.log('нажали на динамик');

    const buttonQuestionOne = document.getElementById('question_old');
    const buttonQuestionTwo = document.getElementById('clicked_element');
    
    // по умолчанию источник текста 'question_old'
    let buttonQuestion = buttonQuestionOne;
    // если в 'question_old' есть троеточие, то предложение не полное
    // значит источником текста будет ответ 'clicked_element'
    if (buttonQuestionOne.innerText.includes('...')) {
        buttonQuestion = buttonQuestionTwo;
    }
    if (buttonQuestion === null) return false;

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


