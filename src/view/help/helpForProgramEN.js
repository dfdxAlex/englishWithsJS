import './styles/helpForProgramRU.scss';

export default helpForProgramEN;

function helpForProgramEN()
{
    return `
    <div class="modal" tabindex="-1" id="infoModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <h5>Learn English</h5>
          </div>
          <div id='video-help'></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="button-close-info-modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>    
    `;
}
