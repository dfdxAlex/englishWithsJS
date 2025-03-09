function selectLightNormalHard(level)
{
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
    const respons = document.getElementById('clicked_element');
    respons.innerText = indexQuestion()[0];
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
