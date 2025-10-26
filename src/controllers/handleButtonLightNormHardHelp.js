// Функции обрабатывающие кнопки Light, Normal, Hard, Help

import { returnWorkArray } from './handleButtonLightNormHardHelp/returnWorkArray.js';


export function selectLightNormalHard(level = false)
{
    if (!setHard()) 
        if (localStorage.getItem('light_normal_hard') === 'hard') 
            localStorage.setItem('light_normal_hard', 'normal');

    // Условие позволяет функции работать обычным способом
    // без входящего параметра. Параметр тогда берется из
    // локального хранилища
    if (!level) {
        if (localStorage.getItem('light_normal_hard') !== null)
            level = localStorage.getItem('light_normal_hard');
        else {
            level = 'light';
        }
    }

    let buttonHard;
    const buttonLight = document.getElementById('button-light');
    const buttonNormal = document.getElementById('button-normal');
    if (setHard()) buttonHard = document.getElementById('button-hard');

    buttonLight.classList = 'btn mx-2';
    buttonNormal.classList = 'btn mx-2';
    if (setHard()) buttonHard.classList = 'btn mx-2';

    localStorage.setItem('light_normal_hard',level);
    if (level === "light") {
        window.SettingForProgram.inputLightNormalHard = 'light';
        buttonLight.classList.add('btn-custom-yellow-active');
        buttonNormal.classList.add('btn-custom-blue');
        if (setHard())
            buttonHard.classList.add('btn-custom-white');
    }
    if (level === "normal") {
        window.SettingForProgram.inputLightNormalHard = 'normal';
        buttonLight.classList.add('btn-custom-yellow');
        buttonNormal.classList.add('btn-custom-blue-active');
        if (setHard())
            buttonHard.classList.add('btn-custom-white');
    }
    if (level === "hard" && setHard()) {
        window.SettingForProgram.inputLightNormalHard = 'hard';
        buttonLight.classList.add('btn-custom-yellow');
        buttonNormal.classList.add('btn-custom-blue');
        buttonHard.classList.add('btn-custom-white-active');
    }

    // Подсветить нажатую кнопку
    selectButton(buttonLight, buttonNormal, buttonHard);
}

// Для повторного использования кода
// функция вернет true если есть причины ставить кнопку Hard
function setHard()
{
    if (returnWorkArray().lengthTrue !== undefined 
        && returnWorkArray().lengthTrue > 2)
            return true;
    return false;
}

// функция увеличивает нажатую кнопку из трёх, остальные две возвращает наза
function selectButton(light, normal, hard)
{
    // scanButton(light, normal, hard);
    // if (!window.indexQuestion.light)
        if (localStorage.getItem('light_normal_hard') === 'light') {
            if (getHeightButton(light) > 39) return false;
            bigButton(light);
            window.indexQuestion.light = true;
            returnNormButton(normal);
            returnNormButton(hard);
        }
    // if (!window.indexQuestion.normal)
        if (localStorage.getItem('light_normal_hard') === 'normal') {
            if (getHeightButton(normal) > 39) return false;
            bigButton(normal);
            window.indexQuestion.normal = true;
            returnNormButton(light);
            returnNormButton(hard);
        }
    // if (!window.indexQuestion.hard)
        if (localStorage.getItem('light_normal_hard') === 'hard') {
            if (getHeightButton(hard) > 39) return false;
            bigButton(hard);
            window.indexQuestion.hard = true;
            returnNormButton(light);
            returnNormButton(normal);
        }
}

function bigButton(id)
{
    let fonH = getComputedStyle(id).height;
    fonH = parseInt(fonH.match(/^\d+/)[0]);
    fonH = fonH * 1.7 + 'px';
    id.style.transition = 'height 0.3s ease';
    id.style.height = fonH;
    window.indexQuestion.light = false;
    window.indexQuestion.normal = false;
    window.indexQuestion.hard = false;
}

function returnNormButton(id)
{
    if (!id) return false;
    let fonH = getHeightButton(id);
    if (fonH > 39) {
    id.style.transition = 'height 0.3s ease';
    id.style.height = "39px";
    }
}

function getHeightButton(id)
{
    if (!id) return false;
    let fonH = getComputedStyle(id).height;
    fonH = parseInt(fonH.match(/^\d+/)[0]);
    return fonH;
}

