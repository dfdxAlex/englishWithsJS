import './styles/helpForProgramRU.scss';

export function helpForProgramPL()
{
    return `
    <div class="modal" tabindex="-1" id="infoModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <h5>Ucz się angielskiego</h5>
          </div>
          <div id='video-help'></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="button-close-info-modal">
              Zamknąć
            </button>
          </div>
        </div>
      </div>
    </div>    
    `;
}
