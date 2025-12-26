import { SettingForProgram } from '../../models/SettingForProgram.js';

export function getBonusBooble()
{
    
    if (SettingForProgram.diamant === '-1' || SettingForProgram.diamant === '0') {
        return '';
    }

    return `<span class="score">${SettingForProgram.diamant}</span>`;
}