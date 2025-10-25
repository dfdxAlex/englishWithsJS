
import { arrayButtonForLevelTwoAndThree } from './arrayButtonForLevelTwoAndThree.js';
import { returnBorderRadius } from '../../services/setColorMenu/returnBorderRadius.js';
import { getContrastColorTwo } from './getContrastColorTwo.js';

export function setColorForLevelToAndThree()
{
    arrayButtonForLevelTwoAndThree().forEach((el)=>{
        getContrastColorTwo(el);
    });

    searchAllButton(['button-help-video-2',
                      'clicked_element',
                      'question_old',
                      'search_error',
                      'translate',
                      'button-ok',
                      'button-help',
                      'button-light',
                      'button-normal',
                      'button-hard'
                    ]);
}

function searchAllButton(arrayForElement)
{
    arrayForElement.forEach((arrayEl) => {
        let el = document.getElementById(arrayEl);
        if (el) {
            getContrastColorTwo(el);
            el.style.borderRadius = returnBorderRadius(10, 150); 
        }
    });
}