import { httpAsk } from '../../models/HttpClient.js';
import { normalizeLink } from './normalizeLink.js';
import { LanguageController } from '../LanguageController.js';
import { DataSet } from '../../services/data/DataSet.js';
import { is_notWord } from '../../view/WorkingField/is_notWord.js';
import { detectPlaceholder } from '../../view/WorkingField/detectPlaceholder.js';
import { clearStringToBeSentences } from '../../view/WorkingField/clearStringToBeSentences.js';

export function playSound(question = 'question_old', clicked = 'clicked_element')
{
        
        const translate = new LanguageController();
        let questionOld = document.getElementById(question);
        let clickedEl = document.getElementById(clicked);
        if (!questionOld || !clickedEl) return;

        // проверить если в блоке с вопроссом есть пропущенное слово, то добавить его
        // из индекса 1
        let buttonQuestion = questionOld.innerText.replace("🔊", "");
        let indexOne = clickedEl.innerText.replace("🔊", "");
        if (is_notWord([questionOld.innerText,'','','','','','',''])) {
            // console.log('поймали пропущенное слово');
            buttonQuestion = questionOld.innerText;
            buttonQuestion = buttonQuestion.replace("🔊", "");
            buttonQuestion = buttonQuestion.replace(detectPlaceholder([buttonQuestion,'','','','','','','']), indexOne);
            buttonQuestion = clearStringToBeSentences(buttonQuestion);
        }

        // Определяем источник текста
        const markers = ['...', '___', '/'];
        if (markers.some(m => buttonQuestion.includes(m))) {
            buttonQuestion = indexOne;
        }

        // Если на вход приходит false, то берем предложение для озвучки из объекта DataSet
        if (question === 'button-ok-word') {
            buttonQuestion = DataSet.questionDB;
        }
        const dataRequest = 'sound=' + encodeURIComponent(buttonQuestion);

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

