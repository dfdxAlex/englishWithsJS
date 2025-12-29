// Функция выбирает из логов нужный перевод и возвращает его для вставки в логи

export function getTranslate(el)
{
    switch(localStorage.getItem('EnglishWithJs_lang')) {
      case 'ua': return el.translateUa;
      case 'pl': return el.translatePl;
      default: return el.translateRu;
    }
}