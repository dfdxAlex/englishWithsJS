import { returnBorderRadius } from './returnBorderRadius.js';
import { getContrastColorTwo } from '../../controllers/forHundleLevelX/getContrastColorTwo.js';
import { SettingForProgram } from '../../models/SettingForProgram.js';

export function setBorderRadiusForWorkingField(list)
{
    list.forEach((el)=>{
        const selectEl = document.getElementById(el);
        if (selectEl) {
            selectEl.style.borderRadius = returnBorderRadius(10, 150); 
            getContrastColorTwo(selectEl);
            if (SettingForProgram.selectTypeTestProperty === 'simple') {
                selectEl.style.padding = '15px';
            }
        }
    });
}