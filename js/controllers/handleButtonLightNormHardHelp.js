function selectLightNormalHard(level = false)
{
    // Условие позволяет функции работать обфчным способом
    // без входящего параметра. Параметр тогда берется из
    // локального хранилища
    if (!level) {
        if (localStorage.getItem('light_normal_hard') !== null)
            level = localStorage.getItem('light_normal_hard');
        else {
          level = 'light';
        }
    }

    const buttonLight = document.getElementById('button-light');
    const buttonNormal = document.getElementById('button-normal');
    const buttonHard = document.getElementById('button-hard');

    buttonLight.classList = 'btn mx-2';
    buttonNormal.classList = 'btn mx-2';
    buttonHard.classList = 'btn mx-2';

    localStorage.setItem('light_normal_hard',level);
    if (level === "light") {
        buttonLight.classList.add('btn-custom-yellow-active');
        buttonNormal.classList.add('btn-custom-blue');
        buttonHard.classList.add('btn-custom-white');
    }
    if (level === "normal") {
        buttonLight.classList.add('btn-custom-yellow');
        buttonNormal.classList.add('btn-custom-blue-active');
        buttonHard.classList.add('btn-custom-white');
    }
    if (level === "hard") {
        buttonLight.classList.add('btn-custom-yellow');
        buttonNormal.classList.add('btn-custom-blue');
        buttonHard.classList.add('btn-custom-white-active');
    }
}

function handleHelp()
{
    let randomNumber = parseFloat(localStorage.getItem('randomNumber'));
    const respons = document.getElementById('clicked_element');
    // Если работаем со вторым тестом, то там всегда выбирается только главный вопрос
    if (SettingForProgram.selectTypeTest === "word-assembly") randomNumber = 1;
    respons.innerText = indexQuestion()[randomNumber-1];
    respons.classList.remove('bg-success');
    respons.classList.remove('bg-warning');
    respons.style.backgroundColor = "#062654";
    //признак того что был запрос на подсказку, блокирует добавление баллов
    localStorage.setItem('was_click_help','true');
}


function returnWorkArray()
{
    const nameArray = localStorage.getItem('nameArrayDb');
    const workingArray = eval(nameArray);
    return workingArray;
}

function indexQuestion()
{
    const index = localStorage.getItem('randomEl');
    return returnWorkArray()[index];
}
