import './styles/helpForHomeMenuRU.scss';

export function helpForHomeMenuEN()
{
    return `
    <div class="modal modal-container" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <h5>Navigation Guide</h5>
            <p><strong>First menu item</strong> — lets you choose a grammar test.</p>
            <p><strong>Second menu item</strong> — allows you to select vocabulary tests.</p>
            <p><strong>Third menu item</strong> — <em>help section</em>. Here, you can find both an explanation of the task and grammar rules related to the test topic.</p>
            <p><strong>"Statistics" section</strong> — shows your progress in the current test.</p>
            <p><strong>"Setting" section</strong> — allows you to choose the type of test.</p>
          </div>
          <div id='video-help'></div>
          <div class="modal-footer">
            <button id="button-close-info-modal" type="button" class="btn btn-primary">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    `;
}
