import { returnBorderRadius } from './returnBorderRadius.js';
// import { generateColorPair } from '../../controllers/forHundleLevelX/generateColorPair.js';
import { getContrastColorTwo } from '../../controllers/forHundleLevelX/getContrastColorTwo.js';
import { getBoxShadow } from '../../controllers/forHundleLevelX/getBoxShadow.js';

export function setBorderRadiusForWorkingField(list)
{
    list.forEach((el)=>{
        const selectEl = document.getElementById(el);
        if (selectEl) {
            selectEl.style.borderRadius = returnBorderRadius(10, 150); 
            getContrastColorTwo(selectEl);
            selectEl.style.boxShadow = getBoxShadow();
        }
    });


}