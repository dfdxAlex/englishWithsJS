import { activationMenuSetting } from '../controllers/activationMenuSetting.js';
import './styles/menuSettingView.scss';
import { SettingForProgram } from '../models/SettingForProgram.js';
import { setSelectForSimple } from './menuSettingView/setSelectForSimple.js';
import { setColorText } from './menuSettingView/setColorText.js';
import { setColorBack } from './menuSettingView/setColorBack.js';
import { setShadowBool } from './menuSettingView/setShadowBool.js';
import { setRadiusBool } from './menuSettingView/setRadiusBool.js';
import { setOpacity } from './menuSettingView/setOpacity.js';

export function menuSettingView()
{
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
          <option value="simple" ${setSelectForSimple("simple")}>Simple Test</option>
          <option value="simple-translate" ${setSelectForSimple("simple-translate")}>Simple Test Translate</option>
          <option value="word-assembly" ${setSelectForSimple("word-assembly")}>Word Assembly</option>
          <option value="word-assembly-translate" ${setSelectForSimple("word-assembly-translate")}>Word Assembly Translate</option>
          <option value="word-assembly-not-translate" ${setSelectForSimple("word-assembly-not-translate")}>Word Assembly (not translate)</option>
        </select>

        <p class="setting-color-p">Setting color work field</p>
        <label for="color-text-for-working-field" class="form-label">Color Text</label>
        <select class="form-select" id="color-text-for-working-field">
          <option value="color-white" ${setColorText("color-white")}>White</option>
          <option value="color-black" ${setColorText("color-black")}>Black</option>
          <option value="color-randome" ${setColorText("color-randome")}>Random</option>
        </select>
        <label for="color-for-back-working-field" class="form-label">Color BackGround</label>
        <select class="form-select" id="color-for-back-working-field">
          <option value="color-white" ${setColorBack("color-white")}>White</option>
          <option value="color-black" ${setColorBack("color-black")}>Black</option>
          <option value="color-randome" ${setColorBack("color-randome")}>Random</option>
        </select>
        <label for="shadow-working-field" class="form-label">Shadow</label>
        <select class="form-select" id="shadow-working-field">
          <option value="true" ${setShadowBool("true")}>True</option>
          <option value="false" ${setShadowBool("false")}>False</option>
        </select>
        <label for="border-radius-working-field" class="form-label">Border Radius</label>
        <select class="form-select" id="border-radius-working-field">
          <option value="true" ${setRadiusBool("true")}>True</option>
          <option value="false" ${setRadiusBool("false")}>False</option>
        </select>
        <label for="opacity-working-field" class="form-label">Opacity</label>
        <select class="form-select" id="opacity-working-field">
          <option value="10" ${setOpacity("10")}>10%</option>
          <option value="20" ${setOpacity("20")}>20%</option>
          <option value="30" ${setOpacity("30")}>30%</option>
          <option value="40" ${setOpacity("40")}>40%</option>
          <option value="50" ${setOpacity("50")}>50%</option>
          <option value="60" ${setOpacity("60")}>60%</option>
          <option value="70" ${setOpacity("70")}>70%</option>
          <option value="80" ${setOpacity("80")}>80%</option>
          <option value="90" ${setOpacity("90")}>90%</option>
          <option value="100" ${setOpacity("100")}>100%</option>
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

        SettingForProgram.selectColorText = document.querySelector('#color-text-for-working-field').value;
        localStorage.setItem('selectColorText', SettingForProgram.selectColorText);

        SettingForProgram.selectColorBackGround = document.querySelector('#color-for-back-working-field').value;
        localStorage.setItem('selectColorBackGround', SettingForProgram.selectColorBackGround);

        SettingForProgram.borderRadius = document.querySelector('#border-radius-working-field').value;
        localStorage.setItem('borderRadius', SettingForProgram.borderRadius);

        SettingForProgram.shadow = document.querySelector('#shadow-working-field').value;
        localStorage.setItem('shadow', SettingForProgram.shadow);

        SettingForProgram.opacity = document.querySelector('#opacity-working-field').value;
        localStorage.setItem('opacity', SettingForProgram.opacity);
    };
}
