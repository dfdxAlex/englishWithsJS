import '../styles/createBonusLevel.scss';
import { addElToDinamicMenu } from '../addElToDinamicMenu.js';

export class BoobleUpView {
    removeBonusBox()
    {
        document.getElementById('box-for-info-bonus')?.remove();
    }

    createBonusLevel(levelInput)
    {
        const str = `<span class="level-create-bonus-level__fill"></span>`;
        addElToDinamicMenu(str,'level-create-bonus-level','level-create-bonus-level');
    
        setTimeout(() => {
            const level = document.getElementById('level-create-bonus-level');
             
            level.style.setProperty('--level', `${levelInput.percent}%`);
        
            level.style.setProperty('--level-color', `${levelInput.color}`);
        
        }, 0);
    
    }

    getBonusBooble(diamant)
    {
        
        if (diamant === '-1' || diamant === '0') {
            return '';
        }

        return `<span class="score">${diamant}</span>`;
    }

    // Запускается при ответе на тест
    // удаляет картинку бонусного ящика, если она есть
    // возвращает одну из картинок в зависимости от результата ответа
    getImageBooble(diamantInput)
    {
        const diamant = Number(diamantInput);
    
        if (diamant === -1) {
            return '<span class="diamond">💀</span>';
        }
        
        if (diamant === 0) {
            return '<span class="diamond">🎓</span>';
        }

        return '<span class="diamond">💎</span>';
    }

    setBoobleUp(diamant, divCreate) {
        // постоянные настройки пузырька
        divCreate.innerHTML = this.getImageBooble(diamant) + this.getBonusBooble(diamant);
        divCreate.style.position = "absolute"; // Позволяет двигать элемент по координатам
        divCreate.id = 'boobleUp';
        document.body.appendChild(divCreate);
    }
}