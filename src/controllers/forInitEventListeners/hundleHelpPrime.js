import { Help } from '../../view/Help.js';
import  indexForThoury  from '../../controllers/forThoury/indexForThoury.js';
import { diamentView } from '../../view/diamentView.js';

export function hundleHelpPrime()
{
    // переменная при старте 1 и изменится только если что-то не получится найти
    let test = true;

    let diamantView = document.querySelector('#diament');
    if (!diamantView) test = false;
    diamantView.innerHTML = diamentView();
    
    diamantView = document.querySelector('#prime-help');
    if (!diamantView) test = false;
    diamantView.addEventListener('click', (event)=>{
        event.stopPropagation();
        Help.viewhandleHelpToTranslate(indexForThoury.helpForProgramRU(),'RwzDBkaEwjI');
    });

    return test;
}