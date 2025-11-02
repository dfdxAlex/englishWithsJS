
// Функция возвращает разметку кнопки с предложением Вопросом.
export function getButtonQuestion(question)
{
    return `<br><div class='row mb-2'>
                 <div class='col-12'>
                   <button 
                     class="working-field-button-translate"
                     type='button' 
                     id='question'>${question}
                   </button>
                 </div>
               </div>
            <br>`;
}

getButtonQuestion.help = `
Функция возвращает разметку кнопки с предложением Вопросом.
`;