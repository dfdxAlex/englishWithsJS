import { LanguageController } from '../controllers/LanguageController.js';

export function htmlOldQuestionsModels()
{
  const translate = new LanguageController();
  const obj = {
      yourQuestion:translate.translate('Предыдущий вопрос/ответ'),
      questionOld:translate.translate('Предыдущий вопрос здесь'),
      clickedElement:translate.translate('Последний ответ здесь'),
      searchError:translate.translate('Сообщить об ошибке')
  };
  
  return obj;
}

