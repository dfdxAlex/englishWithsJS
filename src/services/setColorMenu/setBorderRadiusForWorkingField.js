import { returnBorderRadius } from './returnBorderRadius.js';
import { getContrastColorTwo } from '../../controllers/forHundleLevelX/getContrastColorTwo.js';

export function setBorderRadiusForWorkingField(list)
{
    list.forEach((el)=>{
        const selectEl = document.getElementById(el);
        if (selectEl) {
            selectEl.style.borderRadius = returnBorderRadius(10, 150); 
            getContrastColorTwo(selectEl);
        }
    });
}