export function helpForHomeMenuEN()
{
    return `
    <div class="modal" tabindex="-1" id="infoModal" style="display: block; background-color: rgba(0,0,0,0.5);">
      <div class="modal-dialog" style="max-width: 600px; margin: 10% auto;">
        <div class="modal-content" style="border-radius: 12px; padding: 20px; font-family: sans-serif;">
          <div class="modal-body" style="color: #333;">
            <h5 style="margin-bottom: 16px;">Navigation Guide</h5>
            <p><strong>First menu item</strong> — lets you choose a grammar test.</p>
            <p><strong>Second menu item</strong> — allows you to select vocabulary tests.</p>
            <p><strong>Third menu item</strong> — <em>help section</em>. Here, you can find both an explanation of the task and grammar rules related to the test topic.</p>
            <p><strong>"Statistics" section</strong> — shows your progress in the current test.</p>
            <p><strong>"Setting" section</strong> — allows you to choose the type of test.</p>
          </div>
          <div id='video-help'></div>
          <div class="modal-footer" style="border-top: none; text-align: right;">
            <button type="button" class="btn btn-primary" onclick="document.getElementById('infoModal').style.display='none';">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    `;
}
