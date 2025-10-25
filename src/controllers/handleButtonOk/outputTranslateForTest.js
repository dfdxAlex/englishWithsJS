import { indexQuestion } from '../handleButtonLightNormHardHelp/indexQuestion.js';

export function outputTranslateForTest()
{
    let commentPlus = '';
    if (localStorage.getItem('randomNumber') !== "1") {
        let transL = window.FactoryRegistr.getObject("LanguageController");
        commentPlus = transL.translate('Речь примерно о:');
        window.SettingForProgram.commentPlus.push(commentPlus);
    } else {
        window.SettingForProgram.commentPlus.push('');
    }

    window.SettingForProgram.dataElevator.push(indexQuestion()[5]);
    const place = document.getElementById('clicked_element');
    if (window.SettingForProgram.dataElevator.length > 1) {
        commentPlus = window.SettingForProgram.commentPlus.shift();
        place.innerText = commentPlus+' '+window.SettingForProgram.dataElevator.shift();
    }
}