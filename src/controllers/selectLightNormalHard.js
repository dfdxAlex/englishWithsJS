// Функции обрабатывающие кнопки Light, Normal, Hard, Help

import { selectButton } from './handleButtonLightNormHardHelp/selectButton.js';
import { SettingForProgram } from '../models/SettingForProgram.js';
import { setHard } from './handleButtonLightNormHardHelp/setHard.js';

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

    localStorage.setItem('light_normal_hard',level);
    if (level === "light") {
        SettingForProgram.inputLightNormalHard = 'light';
    }
    if (level === "normal") {
        SettingForProgram.inputLightNormalHard = 'normal';
    }
    if (level === "hard" && setHard()) {
        SettingForProgram.inputLightNormalHard = 'hard';
    }

    // Подсветить нажатую кнопку
    selectButton(buttonLight, buttonNormal, buttonHard);
}










