import { SettingForProgram } from '../../models/SettingForProgram.js';

export function getImageBooble()
{
    
    if (SettingForProgram.diamant === '-1') {
        return '<span class="diamond">💀</span>';
    }
    
    if (SettingForProgram.diamant === '0') {
        return '<span class="diamond">🎓</span>';
    }

    return '<span class="diamond">💎</span>';
}