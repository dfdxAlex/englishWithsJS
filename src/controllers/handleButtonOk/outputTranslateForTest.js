import { indexQuestion } from '../handleButtonLightNormHardHelp/indexQuestion.js';
import { LanguageController } from '../LanguageController.js';
import { SettingForProgram } from '../../models/SettingForProgram.js';

export function outputTranslateForTest()
{
    let commentPlus = '';
    if (localStorage.getItem('randomNumber') !== "1") {
        let transL = new LanguageController;
        commentPlus = transL.translate('Примерно:');
        SettingForProgram.commentPlus.push(commentPlus);
    } else {
        SettingForProgram.commentPlus.push('');
    }

    SettingForProgram.dataElevator.push(indexQuestion()[5]);
    const place = document.getElementById('clicked_element');
    if (SettingForProgram.dataElevator.length > 1) {
        commentPlus = SettingForProgram.commentPlus.shift();
        place.innerText = commentPlus+' '+SettingForProgram.dataElevator.shift();
    }
}