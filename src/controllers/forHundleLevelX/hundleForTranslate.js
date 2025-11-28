import { handleTranslateQuestion } from './hundleForTranslate/handleTranslateQuestion.js';

export function hundleForTranslate()
{
            // Здесь можно накидывать на кнопки события, по мере появления кнопок
        // Когда все кнопки получат свои события, таймер уничтожается
        const id = setInterval(()=>{
            // Если значение сохраняется до конца блока, то уничтожить таймер
            let test = true;

            // Добавить обработчик события по кнопке с переводом.
            // Перевод должен появиться только после клика на кнопку
            let translate = document.getElementById('translate');  // выбрать кнопку перевода
            if (translate) {
                translate.addEventListener('click', (event)=>{
                    // поместить перевод на кнопку
                    handleTranslateQuestion(event);

                    // увеличиь счётчик на 1
                    if (!window.DataOk.translateStop) {
                        window.DataOk.countInt+=1;
                        // Признак того что перевод уже показан
                        window.DataOk.translateStop = true;
                    }
                });
            } else {
                // если не удалось накинуть событие, то делаем false для отработки следующей итерации
                test = false;
            }

            if (test) {
                clearInterval(id);
            }
        },300);
}