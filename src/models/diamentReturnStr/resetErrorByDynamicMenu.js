import { resetStatistic } from '../resetStatistic.js';

export function resetErrorByDynamicMenu()
{
    const idResetErrorByDynamicMenu = setInterval(()=>{
        // Дополнительный блок, сбразывает ошибки и если возможно удаляет грустную рожу из динамического меню
        const smileForDinamicMenu = document.getElementById('smile-for-dinamic-menu');
        // console.log(smileForDinamicMenu);
        if (smileForDinamicMenu) {
            smileForDinamicMenu.addEventListener('click', () => {
                resetStatistic();
                if (document.getElementById('smile-for-error').innerText.includes('😊'))
                {
                    const smile = document.getElementById('smile-for-dinamic-menu');
                    if (smile) {
                        smile.remove();
                    }
                }
            });
            clearInterval(idResetErrorByDynamicMenu);
        } 
    }, 200);
}