// Функция накидывает событие на контейнер с кнопками - словами
// Если не было выбрано ни одного камня, или ошибочный ответ
import { LanguageController } from '../../controllers/LanguageController.js';

export function buttonOkBlockNoon(button = false)
{
        if (!document.querySelector('#button-ok')) return;
        
        const boxForWords = document.querySelector('[data-select="initWord"]');
        boxForWords?.addEventListener('click', () => {
            const translate = new LanguageController();
            document.querySelector('#button-ok').innerText = translate.translate('Проверить');
            if (button)
                button.style.display = '';
        }, { once: true }); 
}