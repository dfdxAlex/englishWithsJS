import { returnBorderRadius } from './returnBorderRadius.js';
import { generateColorPair } from '../../controllers/forHundleLevelX/generateColorPair.js';
import { getContrastColor } from '../../controllers/forHundleLevelX/getContrastColor.js';

export function setBorderRadiusForWorkingField(list)
{
    list.forEach((el)=>{
        const selectEl = document.getElementById(el);
        if (selectEl) {
            selectEl.style.borderRadius = returnBorderRadius(10, 150); 
            selectEl.style.backgroundColor = generateColorPair();
            selectEl.style.color = getContrastColor(generateColorPair());
        }
    });


}