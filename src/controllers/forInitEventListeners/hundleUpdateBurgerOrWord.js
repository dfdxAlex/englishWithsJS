import { initEventForMenuStatistic } from '../../view/forStatistic/initEventForMenuStatistic.js';

export function hundleUpdateBurgerOrWord(id)
{
    // навесить событие обновления статистики на меню
    const updatesStatistic = document.getElementById(id);
    if (!updatesStatistic) return false;
    updatesStatistic.addEventListener('click', ()=>{
        // перерендерить статистику по уроку при смене урока
        initEventForMenuStatistic();
    });
    return true;
}