import { hundleHelpPrime } from './forInitEventListeners/hundleHelpPrime.js';
import { initEventForMenuStatistic } from '../view/forStatistic/initEventForMenuStatistic.js';
import { hundleUpdateBurgerOrWord } from './forInitEventListeners/hundleUpdateBurgerOrWord.js';
import { hundleBlockMenu } from '../services/hundleBlockMenu.js';
import { setBackground } from '../view/styles/bodyImages/setBackground.js';
// import { DataSet } from '../services/data/DataSet.js';
import { setColorMenu } from '../view/styles/bodyImages/setColorMenu.js';
import { handleForSelectLangauge } from './forInitEventListeners/handleForSelectLangauge.js';

// Здесь функции, которые должны отработать когда загрузится статическая страница
window.addEventListener('load', () => {
    hundleBlockMenu();

    // После рендеринга накинуть событие для изменения фона на группы менюшек.
    // Группы берутся из классов MenuRight и потомков
    document.getElementById('pullItem1').addEventListener('click', setBackground);
    document.getElementById('pullItem2').addEventListener('click', setBackground);
    document.getElementById('pullItem6').addEventListener('click', setBackground);

    // C Цветом текста и фона работаем для менюшек
    setColorMenu();

    // Накидывает обработчик события для изменения языка
    handleForSelectLangauge();

});

// интервал проверяет все элементы и накладывает на них обработчики событий.
// если за один проход удалось зарегить все обработчики, то выходим
const id = setInterval(()=>{
    let test = true;

    // Событие клик для показа инфы про алмазы
    // если функция сделает всё что должна, то вернет true
    if (!hundleHelpPrime()) test = false;

    // функция находит кнопки меню Статистики и заполняет их содержимым
    // если не удалось найти все кнопки то вернет false
    if (!initEventForMenuStatistic()) test = false;

    // Если не удалось менюшке Burger или Word - выбор теста или учить слова, добавить событие обновления 
    // статистики то вернуть false statistic
    if (!hundleUpdateBurgerOrWord('burger')) test = false;
    if (!hundleUpdateBurgerOrWord('burger2')) test = false;
    if (!hundleUpdateBurgerOrWord('word')) test = false;
    if (!hundleUpdateBurgerOrWord('statistic')) test = false;


    if (test) {
        console.log('Все элементы получили свои события');
        clearInterval(id);}
},300);