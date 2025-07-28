   // Функция возвращает массив с выбранными элементами из ДОМА
   // которые нужно скрыть при показе логов или показать при работе с тестами
   export const sellect = ()=>{
     return [document.getElementById('search_error'), 
             document.getElementById('log'), 
             document.getElementById('working_field'), 
             document.getElementById('log_for_div')];
        }