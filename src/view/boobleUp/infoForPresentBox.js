import { cleanupBootstrapModals }  from './cleanupBootstrapModals.js';
import { LanguageController } from '../../controllers/LanguageController.js';

export function infoForPresentBox()
{
    cleanupBootstrapModals();

    const lang = new LanguageController();


    if (!document.getElementById('exampleModal1')) {
        const ret = `
        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" id="close-modal-for-box">
            <div class="modal-content">

              <div class="modal-header">
                <h5 class="modal-title">${lang.translate('О призовом ящике...')}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div class="modal-body">
                🎁 ${lang.translate('Призовой ящик выпадает с некоторой вероятностью. Если его поймать, то добавится удвоенное число кристалов.')}
              </div>

              <div class="modal-footer">
              </div>

            </div>
          </div>
        </div>
        `;
        document.body.insertAdjacentHTML('beforeend', ret);
    }

    const modalEl = document.getElementById('exampleModal1');
    const modal = new bootstrap.Modal(modalEl);
    modal.show();

    const closeModalForBox = document.getElementById('close-modal-for-box');
    document.addEventListener('click', ()=>{
        document.activeElement?.blur();
        modal.hide();
    });

}