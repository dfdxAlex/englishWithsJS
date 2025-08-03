import './styles/diamentView.scss';
import { diamentReturnStr } from '../models/diamentReturnStr.js';

export function diamentView(diament, emodzi, smile)
{
    [emodzi, smile, diament] = diamentReturnStr();
    return `
    <div class="diament-view">
        <div>
            <span>${diament}</span>
            <span data-bs-toggle="modal" data-bs-target="#diamondsModal">${emodzi}</span>
        </div>
        <div>
        <button id="prime-help" type="button" class="text-primary mb-3">&#10067;</button> 
            ${smile}  
        </div>
    </div>`;

    // // const diamantView = document.querySelector('#diament');
    // const diamantView = document.querySelector('#diament');
    // diamantView.innerHTML = strHeader;
    // diamantView.addEventListener('click', (event)=>{
    //     event.stopPropagation();
    //     Help.viewhandleHelpToTranslate(helpForProgramRU(),'RwzDBkaEwjI');
    // });

}
