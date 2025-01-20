function menuSettingView()
{
    const rez = `<div class="card" style="max-width: 400px; margin: auto; border: 2px solid #28a745; border-radius: 10px;">
  <!-- Заголовок карточки -->
  <div class="card-header" style="background-color: #e6f7e6; color: #28a745; font-weight: bold;">
    Settings
  </div>

  <!-- Содержимое карточки -->
  <div class="card-body" style="font-size: 1rem; line-height: 1.5; color: #333;">
    <form id="settingsForm">
      <!-- Заголовок списка -->
      <div class="mb-3">
        <label for="testType" class="form-label" style="font-weight: bold;">Test Type</label>
        <select class="form-select" id="testType" style="width: 95%; font-size: 1rem; padding: 0.375rem 0.75rem;">
          <option value="simple">Simple Test</option>
          <option value="word-assembly">Word Assembly</option>
          <option value="word-assembly-not-translate">Word Assembly (not translate)</option>
        </select>
      </div>
      
      <!-- Кнопка сохранить -->
      <button type="button" class="btn btn-success w-100" id="save-settings" style="font-size: 1rem; margin-top: 10px;">
        Save
      </button>
    </form>
  </div>
</div>
`;

    //вставить спрятанную разметку настроек
    document.querySelector('#div-for-setting').style.display = "none";
    document.querySelector('#div-for-setting').innerHTML = rez;

    // создать событие показа меню Сеттинг
    document.querySelector('#save-settings').onclick = () => {
        activationMenuSetting(false);
        // Получить информацию о выборе и записать в хранилище
        SettingForProgram.selectTypeTest = document.querySelector('#testType').value;
    };
}
