// функция проверяет что написано на кнопке заказа перевода, если не написан стартовый текст
// значит перевод был заказан.
export function isClickTranslate()
{
   const searchButtonTranslate = document.getElementById('translate');
   if (!searchButtonTranslate) return false;

   const buttonText = searchButtonTranslate.textContent;

    if (buttonText !== "Перевести вопрос" 
        && buttonText !== "Перекласти питання"
          && buttonText !== "Przetłumacz pytanie"
            && buttonText !== "Translate question"
    ) {
        return true;
    }
    return false;
}
isClickTranslate.help = `
функция проверяет что написано на кнопке заказа перевода, если не написан стартовый текст
значит перевод был заказан.
`;