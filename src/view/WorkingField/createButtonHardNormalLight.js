import { countValidOptions } from './countValidOptions.js';

  export function createButtonHardNormalLight()
  {
    let button =`<div class="container text-center mt-5">
                       <button id="button-light" class="btn mx-2">Light</button>
                       <button id="button-normal" class="btn mx-2">Normal</button>`;
    if (countValidOptions() > 2) button += `<button id="button-hard" class="btn mx-2">Hard</button>`;
    button += `<button id="button-help" class="btn mx-2">Help</button></div>`;

    if (SettingForProgram.selectTypeTest === "word-assembly") {
        button =`<div class="container text-center mt-5">
                     <button id="button-help" class="btn btn-custom-help-big mx-2">Help</button>
                 </div>`;
    }
    return button;
  }

  createButtonHardNormalLight.help = `
  Функция создает кнопки light normal hard и возвращает их.
  `;