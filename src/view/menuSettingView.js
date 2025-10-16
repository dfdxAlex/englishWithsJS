import { activationMenuSetting } from '../controllers/activationMenuSetting.js';
import './styles/menuSettingView.scss';
import { SettingForProgram } from '../models/SettingForProgram.js';

export function menuSettingView()
{
  // let test1 = 
    const rez = 
`<div class="card menu-setting-view">
  <div class="card-header">
    Settings
  </div>

  <div class="card-body">
    <form id="settingsForm">
      <div class="mb-3">
        <label for="testType" class="form-label">Test Type</label>
        <select class="form-select" id="testType">
          <option value="simple">Simple Test</option>
          <option value="word-assembly">Word Assembly</option>
          <option value="word-assembly-not-translate">Word Assembly (not translate)</option>
        </select>

        <label for="testType" class="form-label">Setting Color</label>
        <select class="form-select" id="select-grafic">
          <option value="simple">Simple Test</option>
          <option value="word-assembly">Word Assembly</option>
          <option value="word-assembly-not-translate">Word Assembly (not translate)</option>
        </select>
      </div>
      
      <button type="button" class="btn btn-success w-100" id="save-settings">
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


function setSelectForSimple() //selected 
{
  return 
}