import { httpAsk } from '../models/HttpClient.js';
import { LanguageController } from './LanguageController.js';

export function handleSound() {
    const translate = new LanguageController();
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
                const soundLink = normalizeLink(result).url;
                if (soundLink === 'Cyrillic is not supported') {
                    alert(translate.translate('Попытка озвучить не английский текст.'));
                    return;
                }
                if (soundLink === 'https://429') {
                    alert(translate.translate('Скорее всего закончились запросы.'));
                    return;
                }
                if (typeof soundLink === 'string' && soundLink.includes('http')) {
                    const audio = new Audio(soundLink + '?v=' + Date.now());

                    audio.load();

                    audio.addEventListener('canplaythrough', () => {
                        audio.play();
                    });

                    audio.addEventListener('error', (e) => {
                        console.error('Не удалось воспроизвести аудио:', e);
                    });

                } else {
                    console.log(result);
                    console.warn('Неверный формат ответа от сервера:', result);
                }
            }
        }, 100);
    };
}


function normalizeLink(response) {
    try {

        // ожидаем { url, engine, voice, format }
        if (!response.url) {
            throw new Error("url отсутствует в ответе");
        }

        return {
            url: response.url,
            engine: response.engine ?? "unknown",
            format: response.format ?? "mp3"
        };


    } catch (e) {
        console.error("Неверный формат ответа от сервера:", e, response);
        return null;
    }
}
