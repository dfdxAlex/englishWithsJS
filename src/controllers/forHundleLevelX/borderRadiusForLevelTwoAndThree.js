import { returnBorderRadius } from '../../services/setColorMenu/returnBorderRadius.js';

export function borderRadiusForLevelTwoAndThree()
{
    const elements = Array.from(document.querySelectorAll('[id^="word"]'))
                     .filter(el => /^\s*word\d/.test(el.id));
    elements.forEach((el)=>{
        el.style.borderRadius = returnBorderRadius(10, 150);  
    });
    
}