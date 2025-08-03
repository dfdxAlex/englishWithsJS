import { Help } from '../../view/Help.js';
import { helpForProgramRU } from '../../view/help/helpForProgramRU.js';
import { diamentView } from '../../view/diamentView.js';

export function hundleHelpPrime()
{
    let diamantView = document.querySelector('#diament');
    diamantView.innerHTML = diamentView();
    
    diamantView = document.querySelector('#prime-help');
    diamantView.addEventListener('click', (event)=>{
        event.stopPropagation();
        Help.viewhandleHelpToTranslate(helpForProgramRU(),'RwzDBkaEwjI');
    });
}