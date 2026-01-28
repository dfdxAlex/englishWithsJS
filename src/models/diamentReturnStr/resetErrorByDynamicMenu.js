import { resetStatistic } from '../resetStatistic.js';
import { setEventAsynс } from '../../services/set/setEventAsynс.js';

// export function resetErrorByDynamicMenu()
// {
//     const idResetErrorByDynamicMenu = setInterval(()=>{
//         // Дополнительный блок, сбразывает ошибки и если возможно удаляет грустную рожу из динамического меню
//         const smileForDinamicMenu = document.getElementById('smile-for-dinamic-menu');
//         if (smileForDinamicMenu) {
//             smileForDinamicMenu.addEventListener('click', () => {
//                 resetStatistic();
//                 delToSmile();
//             });
//             clearInterval(idResetErrorByDynamicMenu);
//         } 
//     }, 200);
// }

export function resetErrorByDynamicMenu()
{
    setEventAsynс(()=>{
        resetStatistic(); 
        delToSmile();
    }, 'click' ,'smile-for-dinamic-menu');
}


function delToSmile()
{
    if (document.getElementById('smile-for-error').innerText.includes('😊'))
    {
        const smile = document.getElementById('smile-for-dinamic-menu');
        if (smile) {
            smile.remove();
        }
    }
}