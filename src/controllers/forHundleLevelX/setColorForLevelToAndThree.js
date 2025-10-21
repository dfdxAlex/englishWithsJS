
import { arrayButtonForLevelTwoAndThree } from './arrayButtonForLevelTwoAndThree.js';
import { returnBorderRadius } from '../../services/setColorMenu/returnBorderRadius.js';
import { getContrastColorTwo } from './getContrastColorTwo.js';

export function setColorForLevelToAndThree()
{
    arrayButtonForLevelTwoAndThree().forEach((el)=>{
        getContrastColorTwo(el);
    });

    // Отдельно разукрасть кнопку Проверить
    // const buttonOk = document.getElementById('button-ok');
    // if (buttonOk) {
    //     getContrastColorTwo(buttonOk);
    //     buttonOk.style.borderRadius = returnBorderRadius(10, 150); 
    // }
    // // Отдельно разукрасть кнопку перевода
    // const translate = document.getElementById('translate');
    // if (translate) {
    //     getContrastColorTwo(buttonOk);
    //     translate.style.borderRadius = returnBorderRadius(10, 150); 
    // }

    // Отдельно разукрасть кнопку Отправить ошибку
    // const searchError = document.getElementById('search_error');
    // if (searchError) {
    //     getContrastColorTwo(searchError);
    //     searchError.style.borderRadius = returnBorderRadius(10, 150); 
    // }

    // Отдельно разукрасть кнопку Отправить ошибку
    // const clickedElement = document.getElementById('clicked_element');
    // const questionOld = document.getElementById('question_old');
    // if (clickedElement) {
    //     getContrastColorTwo(clickedElement);
    //     clickedElement.style.borderRadius = returnBorderRadius(10, 150); 
    //     getContrastColorTwo(questionOld);
    //     questionOld.style.borderRadius = returnBorderRadius(10, 150); 
    // }

    // const buttonHelp = document.getElementById('button-help');
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