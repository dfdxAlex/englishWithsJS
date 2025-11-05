import { returnBorderRadius } from './returnBorderRadius.js';
import { getContrastColorTwo } from '../../controllers/forHundleLevelX/getContrastColorTwo.js';

// По названию функция устанавливает бордер радиус, однако:
// удобно было к этой функции припарковать установку цвета фона и цвета текста

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

setBorderRadiusForWorkingField.help = `
По названию функция устанавливает бордер радиус, однако:
удобно было к этой функции припарковать установку цвета фона и цвета текста
`;