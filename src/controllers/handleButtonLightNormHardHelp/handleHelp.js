import { indexQuestion } from './indexQuestion.js';

export function handleHelp()
{
    let randomNumber = parseFloat(localStorage.getItem('randomNumber'));
    const respons = document.getElementById('clicked_element');
    // Если работаем со вторым тестом, то там всегда выбирается только главный вопрос
    if (window.SettingForProgram.selectTypeTest === "word-assembly") randomNumber = 1;
    respons.innerText = indexQuestion()[randomNumber-1];
    respons.classList.remove('bg-success');
    respons.classList.remove('bg-warning');
    respons.classList.remove('bg-danger');
    respons.style.backgroundColor = "#062654";
    //признак того что был запрос на подсказку, блокирует добавление баллов
    localStorage.setItem('was_click_help','true');
}