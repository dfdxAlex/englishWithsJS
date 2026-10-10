import { SettingForProgram } from '../../models/SettingForProgram.js';
import { DataOk } from '../../services/data/DataOk.js';
import { hundleHelpPrime } from '../../controllers/forInitEventListeners/hundleHelpPrime.js';

export function scarbClick(xx=1)
{
    const selectScarb = document.querySelector('.scarb');
    const x = selectScarb.getBoundingClientRect().left + window.scrollX;
    const y = selectScarb.getBoundingClientRect().top + window.scrollY;
    
    selectScarb.remove();

    document.querySelector('#bonus-diamant')?.remove();

    const bonusForScarb = document.createElement("div");
    document.body.appendChild(bonusForScarb);
    bonusForScarb.classList.add("bonus-for-scarb");
    bonusForScarb.innerHTML = `<span class="text-about-scarb">${SettingForProgram.forBooble.diamant*xx}</span>`;
    
    bonusForScarb.style.left = x+'px';
    bonusForScarb.style.top = y+'px';

    DataOk.addOk(SettingForProgram.forBooble.diamant*xx);

    setTimeout(()=>{
        document.querySelector('.text-about-scarb').remove();
        
    }, 2500);

    hundleHelpPrime();
}
