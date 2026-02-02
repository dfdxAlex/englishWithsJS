import { resetStatistic } from '../resetStatistic.js';
import { setEventAsync } from '../../services/set/setEventAsynс.js';

export function resetErrorByDynamicMenu()
{
    setEventAsync(()=>{
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