import { LanguageController } from './LanguageController.js';

export function resetBottonError()
{
        // Достать из регистра объект переводчика
        const translate = new LanguageController;

        // Сброс состояния кнопки
        document.getElementById('search_error').textContent = translate.translate('Сообщить об ошибке');
}
