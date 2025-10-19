import { activationMenuSetting } from '../controllers/activationMenuSetting.js';
import './styles/menuSettingView.scss';
import { SettingForProgram } from '../models/SettingForProgram.js';

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
          <option value="word-assembly" ${setSelectForSimple("word-assembly")}>Word Assembly</option>
          <option value="word-assembly-not-translate" ${setSelectForSimple("word-assembly-not-translate")}>Word Assembly (not translate)</option>
        </select>


        <p class="setting-color-p">Setting color work field</p>
        <label for="color-for-working-field" class="form-label">Color Text</label>
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
        // console.log(SettingForProgram.selectColorText);

        SettingForProgram.selectColorBackGround = document.querySelector('#color-for-back-working-field').value;
        localStorage.setItem('selectColorBackGround', SettingForProgram.selectColorBackGround);

        SettingForProgram.borderRadius = document.querySelector('#border-radius-working-field').value;
        localStorage.setItem('borderRadius', SettingForProgram.borderRadius);
        console.log(SettingForProgram.borderRadius);

        SettingForProgram.shadow = document.querySelector('#shadow-working-field').value;
        localStorage.setItem('shadow', SettingForProgram.shadow);
    };


}


// import { SettingForProgram } from '../models/SettingForProgram.js';
// функция проверяет признак активности теста 
function setSelectForSimple(nameTest) //selected 
{
    if (nameTest == SettingForProgram.selectTypeTest) return 'selected';
    else return '';
}

// import { SettingForProgram } from '../models/SettingForProgram.js';
// функция проверяет признак цвета текста
function setColorText(nameTest) //selected 
{
    if (nameTest == SettingForProgram.selectColorText) return 'selected';
    else return '';
}

// import { SettingForProgram } from '../models/SettingForProgram.js';
// функция проверяет признак цвета текста
function setColorBack(nameTest) //selected 
{
    if (nameTest == SettingForProgram.selectColorBackGround) return 'selected';
    else return '';
}

// import { SettingForProgram } from '../models/SettingForProgram.js';
// функция проверяет признак цвета текста
function setShadowBool(nameTest) //selected 
{
    if (nameTest == SettingForProgram.shadow) return 'selected';
    else return '';
}

// import { SettingForProgram } from '../models/SettingForProgram.js';
// функция проверяет признак цвета текста
function setRadiusBool(nameTest) //selected 
{
    if (nameTest == SettingForProgram.borderRadius) return 'selected';
    else return '';
}