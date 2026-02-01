import { delElToDinamicMenu } from '../../view/delElToDinamicMenu.js';
import { addElToDinamicMenu } from '../../view/addElToDinamicMenu.js';
import { setEventAsynс } from '../../services/set/setEventAsynс.js';
import { extendOne } from './extendOne.js';
import { extendTwo } from './extendTwo.js';


export function extendFirstSetButton()
{
    if (localStorage.getItem('extend1') === "ok" || !localStorage.getItem('extend1')) {
        delElToDinamicMenu('extend-1');
        addElToDinamicMenu('🤖','extend-1','extend-1');
        setEventAsynс(extendOne, 'click', 'extend-1');
    } else {
        delElToDinamicMenu('extend-1');
        addElToDinamicMenu('🚫','extend-1','extend-1');
        setEventAsynс(extendOne, 'click', 'extend-1');
    }

    if (localStorage.getItem('extend2') === "ok" || !localStorage.getItem('extend2')) {
        delElToDinamicMenu('extend-2');
        addElToDinamicMenu('🧠','extend-2','extend-2');
        setEventAsynс(extendTwo, 'click', 'extend-2');
    } else {
        delElToDinamicMenu('extend-2');
        addElToDinamicMenu('⛔','extend-2','extend-2');
        setEventAsynс(extendTwo, 'click', 'extend-2');
    }

}