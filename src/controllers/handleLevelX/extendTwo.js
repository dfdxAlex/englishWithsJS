import { delElToDinamicMenu } from '../../view/delElToDinamicMenu.js';
import { addElToDinamicMenu } from '../../view/addElToDinamicMenu.js';
import { setEventAsync } from '../../services/set/setEventAsynс.js';

export function extendTwo()
{
    if (localStorage.getItem('extend2') === "ok" || !localStorage.getItem('extend2')) {
        localStorage.setItem('extend2', 'not');
        delElToDinamicMenu('extend-2');
        addElToDinamicMenu('⛔','extend-2','extend-2');
        setEventAsync(extendTwo, 'click', 'extend-2');
    } else {
        localStorage.setItem('extend2', 'ok');
        delElToDinamicMenu('extend-2');
        addElToDinamicMenu("<img src='css/images/ex2.png' style='width:30px;height:30px;'>",'extend-2','extend-2');
        setEventAsync(extendTwo, 'click', 'extend-2');
    }
}