import { delElToDinamicMenu } from '../../view/delElToDinamicMenu.js';
import { addElToDinamicMenu } from '../../view/addElToDinamicMenu.js';
import { setEventAsync } from '../../services/set/setEventAsynс.js';


export function extendOne()
{
    if (localStorage.getItem('extend1') === "ok" || !localStorage.getItem('extend1')) {
        localStorage.setItem('extend1', 'not');
        delElToDinamicMenu('extend-1');
        addElToDinamicMenu('🚫','extend-1','extend-1');
        setEventAsync(extendOne, 'click', 'extend-1');
    } else {
        localStorage.setItem('extend1', 'ok');
        delElToDinamicMenu('extend-1');
        addElToDinamicMenu('🤖','extend-1','extend-1');
        setEventAsync(extendOne, 'click', 'extend-1');
    }
}