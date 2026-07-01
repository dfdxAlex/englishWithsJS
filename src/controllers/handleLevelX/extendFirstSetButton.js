import { delElToDinamicMenu } from '../../view/delElToDinamicMenu.js';
import { addElToDinamicMenu } from '../../view/addElToDinamicMenu.js';
import { setEventAsync } from '../../services/set/setEventAsynс.js';
import { extendOne } from './extendOne.js';
import { extendTwo } from './extendTwo.js';


export function extendFirstSetButton()
{
    if (localStorage.getItem('extend1') === "ok" || !localStorage.getItem('extend1')) {
        delElToDinamicMenu('extend-1');
        // addElToDinamicMenu('🤖','extend-1','extend-1');
        addElToDinamicMenu("<img src='css/images/ex1.png' style='width:27px;height:27px;'>",'extend-1','extend-1');
        setEventAsync(extendOne, 'click', 'extend-1');
    } else {
        delElToDinamicMenu('extend-1');
        addElToDinamicMenu('🚫','extend-1','extend-1');
        setEventAsync(extendOne, 'click', 'extend-1');
    }

    if (localStorage.getItem('extend2') === "ok" || !localStorage.getItem('extend2')) {
        delElToDinamicMenu('extend-2');
        addElToDinamicMenu("<img src='css/images/ex2.png' style='width:30px;height:30px;'>",'extend-2','extend-2');
        setEventAsync(extendTwo, 'click', 'extend-2');
    } else {
        delElToDinamicMenu('extend-2');
        addElToDinamicMenu('⛔','extend-2','extend-2');
        setEventAsync(extendTwo, 'click', 'extend-2');
    }

}