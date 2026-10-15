import { scarbClick } from './scarbClick.js';
import { addElToDinamicMenu } from '../addElToDinamicMenu.js';
import { infoForPresentBox } from './infoForPresentBox.js';
import '../styles/renderBoxScarb.scss';

export class BonusBoxView {

    constructor() {
    }

    // рендерит подсказку что выпал бонусный ящик
    renderDiamandX2() {
        addElToDinamicMenu(
            '💎×2',
            'box-x-2',
            'bonus-diamant'
        );
    }
    
    // рендер ящика 
    renderBoxScarb(forBooble, objDataOk)
    {
        const divCreateForBonusBox = document.createElement("div");
        divCreateForBonusBox.innerHTML = '<span class="scarb" id="scarb">🎁</span>';
        divCreateForBonusBox.classList.add('div-for-scarb');
        document.body.appendChild(divCreateForBonusBox);

        divCreateForBonusBox.addEventListener('click', () => {

          //новый эффект для ящика
          document.querySelector('.div-for-scarb')?.classList.add('scarb-open');   

          scarbClick(2, forBooble, objDataOk);
          // обнулить координату Y кристала, чтобы контроллер подумал что кристал долетел до конца
          forBooble.buttonCheckY = 0;
        });
    }
    
    // рендер ящика в динамическое меню
    renderBoxForInfoBonus()
    {
        addElToDinamicMenu('🎁', 'box-for-info-bonus', 'box-for-info-bonus');
            setTimeout(() => {
                document
                    .getElementById('box-for-info-bonus')
                    ?.addEventListener('click', () => {infoForPresentBox(this.languageController)});
            }, 0);
    }

    getBonusBox(bonusBox) {
        if (!bonusBox) 
            return document.querySelector('.div-for-scarb') || undefined
        return bonusBox;
    }

    removeBonusBox(state) {
        state.bonusBox?.remove();
        state.bonusBox = undefined;
        document.getElementById('box-for-info-bonus')?.remove();
    }

    showBonusOverlay() {
        let overlay = document.getElementById('bonus-overlay');

        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'bonus-overlay';
            document.body.appendChild(overlay);
        }

        requestAnimationFrame(() => {
            overlay.classList.add('show');
        });
    }

    hideBonusOverlay() {
        const overlay = document.getElementById('bonus-overlay');

        if (!overlay) return;

        overlay.classList.remove('show');
        overlay.classList.add('hide');

        overlay.addEventListener('transitionend', () => {
            overlay.remove();
        }, { once: true });
    }
}