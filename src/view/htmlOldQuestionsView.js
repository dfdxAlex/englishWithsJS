import './styles/htmlOldQuestionsView.scss';

export function htmlOldQuestionsView(obj) {
  
  return `
      <div class="card shadow-lg mb-3 mx-auto position-relative html-old-questions-view">
      <div class="card-body">
        <fieldset class="border-0">
          <legend 
            class="fs-3 mb-3 your-question" 
            id="fieldset-legend-old"
          >
            ${obj.yourQuestion}
            <button 
              type='button' 
              id='button-help' 
              class='button-help'
            >
              &#10067;
            </button>
          </legend>
          
          <div class="row mb-3">
            <div class="col-12">
              <div 
                class="p-2 
                       border 
                       question-old" 
                id="question_old"
              >
                ${obj.questionOld}
              </div>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-12">
              <div class="
                     p-2 
                     border 
                     question-old" 
                   id="clicked_element">${obj.clickedElement}</div>
            </div>
          </div>

          <div class="row">
            <div class="col-8">
              <button 
                type="button" 
                id="search_error" 
                class="btn btn-warning w-100"
              >
                ${obj.searchError}
              </button>
            </div>
            <div class="col-2">
              <button 
                type="button" 
                id="log" 
                class="btn" 
                name="log"
              >
                &#x1F4DC;
              </button>
            </div>
            <div class="col-2">
              <button 
                type="button" 
                id="sound" 
                class="btn" 
                name="sound"
              >
                &#x1F50A;
              </button>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
    `;
}