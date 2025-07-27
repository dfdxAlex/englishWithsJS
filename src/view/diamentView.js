import { Help } from './Help.js';
import { helpForProgramRU } from './help/helpForProgramRU.js';
import './styles/diamentView.scss';

export function diamentView(diament, emodzi, smile)
{
    let strHeader = `
    <div class="diament-view">
        <div>
            <span>${diament}</span>
            <span data-bs-toggle="modal" data-bs-target="#diamondsModal">${emodzi}</span>
        </div>
        <div>
        <button type = "button" class="text-primary mb-3">&#10067;</button> 
            ${smile}  
        </div>
    </div>`;

    const diamantView = document.querySelector('#diament');
    diamantView.innerHTML = strHeader;
    diamantView.addEventListener('click', ()=>{
        Help.viewhandleHelpToTranslate(helpForProgramRU(),'RwzDBkaEwjI');
    });

}
