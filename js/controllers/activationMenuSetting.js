// Функция переключает между режимом настроек и рабочим режимом
// если входит true, то активировать режим настроек
function activationMenuSetting(active = true)
{
    let setArray = ['none','none','none','block'];
    if (!active) {
        setArray = ['block','block','block','none'];
    } 

    document.querySelector('#nav').style.display = setArray[0];
    document.querySelector('#container-all').style.display = setArray[1];
    document.querySelector('#html_old_questions').style.display = setArray[2];
    document.querySelector('#div-for-setting').style.display = setArray[3];
}
