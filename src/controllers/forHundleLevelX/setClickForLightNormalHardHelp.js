import { selectLightNormalHard } from '../handleButtonLightNormHardHelp.js';
import { handleHelp } from '../handleButtonLightNormHardHelp/handleHelp.js';

export function setClickForLightNormalHardHelp()
{
                setTimeout(()=>{
                const buttonLight = document.getElementById('button-light');
                const buttonNormal = document.getElementById('button-normal');
                const buttonHard = document.getElementById('button-hard');
                const buttonHelp = document.getElementById('button-help');
                if (buttonLight) buttonLight.addEventListener('click', ()=>{
                    selectLightNormalHard('light');
                });
                if (buttonNormal) buttonNormal.addEventListener('click', ()=>{
                    selectLightNormalHard('normal');
                });
                if (buttonHard) buttonHard.addEventListener('click', ()=>{
                    selectLightNormalHard('hard');
                });
                if (buttonHelp) buttonHelp.addEventListener('click', ()=>{
                    handleHelp();
                });
            },1);
}