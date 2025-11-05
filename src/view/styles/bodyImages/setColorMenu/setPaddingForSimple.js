// По названию функция устанавливает бордер радиус, однако:
// удобно было к этой функции припарковать установку цвета фона и цвета текста

export function setPaddingForSimple(list, padding = '15px')
{
    list.forEach((el)=>{
        const selectEl = document.getElementById(el);
        if (selectEl) {
            selectEl.style.padding = '15px' + padding;
        }
    });
}