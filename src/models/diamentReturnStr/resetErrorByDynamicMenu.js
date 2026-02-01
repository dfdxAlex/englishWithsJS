import { resetStatistic } from '../resetStatistic.js';
import { setEventAsynс } from '../../services/set/setEventAsynс.js';

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