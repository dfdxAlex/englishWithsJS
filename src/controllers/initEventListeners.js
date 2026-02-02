import { hundleHelpPrime } from './forInitEventListeners/hundleHelpPrime.js';
import { initEventForMenuStatistic } from '../view/forStatistic/initEventForMenuStatistic.js';
import { hundleUpdateBurgerOrWord } from './forInitEventListeners/hundleUpdateBurgerOrWord.js';
import { setBackground } from '../view/styles/bodyImages/setBackground.js';
import { setColorMenu } from '../view/styles/bodyImages/setColorMenu.js';
import { handleForSelectLangauge } from './forInitEventListeners/handleForSelectLangauge.js';
import { menuSettingView } from '../view/menuSettingView.js';
import { activationMenuSetting } from './activationMenuSetting.js';
import { DataSet } from '../services/data/DataSet.js';
import { nav } from '../view/nav.js';
import { MenuController } from './MenuController.js';
import { boobleUp } from '../view/boobleUp.js';
import { resetBottonError } from './resetBottonError.js';
import { handleSearchError } from './handleSearchError.js';
import { htmlHelp } from '../view/htmlHelp.js';
import { SettingForProgram } from '../models/SettingForProgram.js';
import { addElToDinamicMenu } from '../view/addElToDinamicMenu.js';

// Здесь функции, которые должны отработать когда загрузится статическая страница
window.addEventListener('load', () => {
    htmlHelp();
    nav();
    const menuC = new MenuController();
    menuC.init();

    // событие на кнопку "Сообщить об ошибке"
    handleSearchError();

    // После рендеринга накинуть событие для изменения фона на группы менюшек.
    // Группы берутся из классов MenuRight и потомков
    document.getElementById('pullItem1').addEventListener('click', setBackground);
    document.getElementById('pullItem2').addEventListener('click', setBackground);
    document.getElementById('pullItem6').addEventListener('click', setBackground);

    // C Цветом текста и фона работаем для менюшек
    setColorMenu();

    // Накидывает обработчик события для изменения языка
    handleForSelectLangauge();

    // обработчил для клика по одному из вариантов выбора теста 
    // присвоив свойство true принудительно обновляет вопрос
    document.getElementById('dropdownMenuburger').onclick = () => {
        DataSet.resetQuestion = true;
    }
    document.getElementById('dropdownMenuburger2').onclick = () => {
        DataSet.resetQuestion = true;
    }

    // принудительное изменение тестового вопосса при первом пуске или обновлении
    // срабатывает один раз.
    DataSet.resetQuestion = true;

    // нарисовать невидимое меню Сеттинг
    menuSettingView();
    // спрятать все ненужные блоки и показать меню Настроек
    document.querySelector('#setting').onclick = activationMenuSetting;

    // инициализация переменных, хранящихся в классе данных
    SettingForProgram.initializeToProperty();

    // функция отслеживает инфу по ответам и запускает процесс
    // всплытия кристала, шапки или черепа
    boobleUp();

    // Достать из регистра объект переводчика
    resetBottonError();
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


// // инициализация переменных, хранящихся в классе данных

// Что можно узнать из локального хранилища localStorage.getItem
// nameArrayDb - имя массива, который используется в текущем тесте
// level - номер текущего уровня - теста.
// randomEl - индекс текущего вопросса из массива.
// EnglishWithJs_lang - выбранный язык ru, en, pl, eu
// 'intTranslate_'+level - число заказанных подсказок на каждом уровне
// 'user_select' - информация о том, какой режим теста выбран
// 'indexMax' - число кнопок, которое получилось при разбитии предложения на отдельные слова

// sk_a0c451bdcbb8b32e659dca5f6fd1b3d5ff33e432e4d57b34


