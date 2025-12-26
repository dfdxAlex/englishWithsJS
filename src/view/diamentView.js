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
        <div id="smile-for-error">
        <button id="prime-help" type="button" class="text-primary mb-3">&#10067;</button> 
            ${smile}  
        </div>
    </div>`;

}
