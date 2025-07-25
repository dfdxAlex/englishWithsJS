function htmlOldQuestions()
{
  const translate = FactoryRegistr.getObject('LanguageController');
  const yourQuestion = translate.translate('Предыдущий вопрос/ответ');
  const questionOld = translate.translate('Предыдущий вопрос здесь');
  const clickedElement = translate.translate('Последний ответ здесь');
  const searchError = translate.translate('Сообщить об ошибке');

    document.getElementById('html_old_questions').innerHTML = `
    <div class="card shadow-lg mb-3 mx-auto position-relative" style="width: 80vw; transform: translateY(-10px); transition: transform 0.3s, box-shadow 0.3s;">
      <div class="card-body">
        <fieldset class="border-0">
          <legend class="fs-4 text-primary mb-3" id="fieldset-legend-old">${yourQuestion}<button onclick = 'Help.viewhandleHelpToTranslate(helpForGreenPoleOneRU(),"VuUKoWdyu6Y")' type='button' id = 'button-help' class='button-help'>&#10067;</button></legend>
          
          <div class="row mb-3">
            <div class="col-12">
              <div class="p-2 border rounded text-white bg-warning" id="question_old">${questionOld}</div>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-12">
              <div class="p-2 border rounded text-white bg-warning" id="clicked_element">${clickedElement}</div>
            </div>
          </div>

          <div class="row">
            <div class="col-8">
              <button type="button" id="search_error" class="btn btn-warning w-100">${searchError}</button>
            </div>
            <div class="col-2">
              <button type="button" id="log" class="btn btn-light w-100" name="log">&#x1F4DC;</button>
            </div>
            <div class="col-2">
              <button type="button" id="sound" class="btn btn-light w-100" name="sound">&#x1F50A;</button>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
    `;
}
