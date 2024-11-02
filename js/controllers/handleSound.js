// обработчик события для нажатия на динамик

function buttonSound()
{
const buttonSound = document.getElementById('sound');

buttonSound.addEventListener('click', ()=>{

    const buttonQuestionOne = document.getElementById('question_old');
    const buttonQuestionTwo = document.getElementById('clicked_element');
    
    // по умолчанию источник текста 'question_old'
    let buttonQuestion = buttonQuestionOne;
    // если в 'question_old' есть троеточие, то предложение не полное
    // значит источником текста будет ответ 'clicked_element'
    if (buttonQuestionOne.innerText.includes('...')) {
        buttonQuestion = buttonQuestionTwo;
    }
    if (buttonQuestionOne.innerText.includes('___')) {
        buttonQuestion = buttonQuestionTwo;
    }
    if (buttonQuestionOne.innerText.includes('/')) {
        buttonQuestion = buttonQuestionTwo;
    }
    // Если не удалось выбрать источник текста то выйти
    if (buttonQuestion === null) return false;

    //Создать сам запрос к серверу
    const textRequest = buttonQuestion.innerText;
    const dataRequest = 'sound='+encodeURIComponent(textRequest);

    // создаю промис для асинхронной загрузки данных с сервера
    const sound = new Promise((onSuccess, onFailure) => {
        httpAsk.fetchData = dataRequest;

    // каждые 100 милисекунд проверка признака работы запроса
    // если запрос прекращается, то запускаем then
    const checkLoading = setInterval(() => {
        // Проверяем, когда загрузка завершится
        if (!httpAsk.isLoading) {
            clearInterval(checkLoading); // Останавливаем проверку
            onSuccess(httpAsk.fetchData); // Возвращаем успешный результат
        }
    }, 100); // Проверяем каждую 100 миллисекунд

    if (httpAsk.fetchData === null) {
        onFailure(null);
    }

    });

    sound.then((onSuccess) => {
        const audio = new Audio(onSuccess);
        audio.addEventListener('loadeddata', () => {
            audio.play(); // Воспроизведение звука после загрузки
            });
        audio.load();
    });

    sound.catch((error) => {
        return error;
    });

    sound.finally(() => {
        console.log('Запрос окончен');
    }); 
        
    
       
});

}
