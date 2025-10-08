import { returnBorderRadius } from '../../services/setColorMenu/returnBorderRadius.js';
import { arrayButtonForLevelTwoAndThree } from './arrayButtonForLevelTwoAndThree.js';

export function borderRadiusForLevelTwoAndThree()
{
    const elements = arrayButtonForLevelTwoAndThree();
    elements.forEach((el)=>{
        el.style.borderRadius = returnBorderRadius(10, 150);  
    });
    
}