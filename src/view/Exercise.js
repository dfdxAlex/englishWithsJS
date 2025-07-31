// Класс помещает вопрос для урока

import { getWorkPlace } from '../view/thoury/getWorkPlace.js';

export class Exercise
{
    init(str)
    {
        const transL = FactoryRegistr.getObject("LanguageController");
        this.cartTitle = transL.translate('Задание для теста');
        this.strLocal = getWorkPlace(this.cartTitle, str, 'help-for-test');
        document.getElementById('level29').onclick = cardHelp.bind(null, this);

    }
}

function cardHelp(thisS)
{
    document.getElementById('exercise').style.display='block';
    document.getElementById('exercise').innerHTML = thisS.strLocal;
    document.getElementById('help-for-test').addEventListener('click', ()=>{
        document.getElementById('exercise').style.display='none';
    });
}
