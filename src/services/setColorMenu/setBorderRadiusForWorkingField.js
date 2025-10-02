import { returnBorderRadius } from './returnBorderRadius.js';

export function setBorderRadiusForWorkingField(list)
{
    list.forEach((el)=>{
        const selectEl = document.getElementById(el);
        if (selectEl)
            selectEl.style.borderRadius = returnBorderRadius(10, 150); 
    });
}