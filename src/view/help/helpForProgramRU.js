import './styles/helpForProgramRU.scss';

export function helpForProgramRU()
{
    return `
    <div class="modal help-for-program-ru" tabindex="-1" id="infoModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <h5>Учим английский</h5>
          </div>
          <div id='video-help'></div>
          <div class="modal-footer">
            <button id="button-close-info-modal" type="button" class="btn btn-primary">
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>    
    `;
}
