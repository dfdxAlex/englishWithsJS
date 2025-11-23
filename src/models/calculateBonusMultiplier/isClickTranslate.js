// функция проверяет что написано на кнопке заказа перевода, если не написан стартовый текст
// значит перевод был заказан.
export function isClickTranslate()
{
   const buttonText = document.getElementById('translate').innerText;
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