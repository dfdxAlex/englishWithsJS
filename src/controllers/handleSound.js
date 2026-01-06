import { httpAsk } from '../models/HttpClient.js';
import { LanguageController } from './LanguageController.js';

export function handleSound() {
    const soundBtn = document.getElementById('sound');
    if (!soundBtn) return;

    soundBtn.onclick = () => {
        const questionOld = document.getElementById('question_old');
        const clickedEl = document.getElementById('clicked_element');
        if (!questionOld || !clickedEl) return;

        // Определяем источник текста
        const markers = ['...', '___', '/'];
        let buttonQuestion = questionOld;
        if (markers.some(m => questionOld.innerText.includes(m))) {
            buttonQuestion = clickedEl;
        }

        const textRequest = buttonQuestion.innerText;
        const dataRequest = 'sound=' + encodeURIComponent(textRequest);

        // Запускаем запрос
        httpAsk.fetchData = dataRequest;

        // Проверяем результат через setInterval
        const check = setInterval(() => {
            if (!httpAsk.isLoading) {
                clearInterval(check);
                const result = httpAsk.fetchData;
// console.log(result);
// const audio = new Audio(result);
                // Если result — это строка, проверяем URL
                if (result === 'https://429') {
                    const translate = new LanguageController();
                    alert(translate.translate('Скорее всего закончились запросы.'));
                    return;
                }
                if (typeof result === 'string' && result.includes('http')) {
                    const audio = new Audio();
                    audio.src = result; // ссылка с сервера

                    audio.addEventListener('canplaythrough', () => {
                        audio.play();
                    });

                    audio.addEventListener('error', (e) => {
                        console.error('Не удалось воспроизвести аудио:', e);
                    });
                } else if (result && result.zapros !== undefined) {
                    console.log('Получен JSON:', result);
                } else {
                    console.log(result);
                    console.warn('Неверный формат ответа от сервера:', result);
                }
            }
        }, 100);
    };
}
