
  // Функция создает разметку для кнопки "Проверить" 
  // во втором и третьем тесте
  export function buttonOk()
  {
    return `<div class='row mb-2'>
    <div class='col-12'>
      <button 
        style='width: 100%; 
               border: 1px solid rgba(0, 0, 0, 0.2); 
               box-shadow: 0 4px 8px rgba(0,0,0,0.2);'
        type='button' 
        id='button-ok'
        onclick = 'handleButtonOk(event)'
       >
        Проверить
      </button>
    </div>
   </div>`;
  }