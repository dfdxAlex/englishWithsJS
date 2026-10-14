import './styles/setDiamantProgress.scss';
import './styles/statisticView.scss';
import './styles/renderBonusLevel.scss';
import { addElToDinamicMenu } from './addElToDinamicMenu.js';


export class StatisticView {

    constructor() {

    }

    // рендер полосы активности в динамическое меню
    renderBonusLevel(levelInput)
    {
        const str = `<span class="level-create-bonus-level__fill"></span>`;
        addElToDinamicMenu(str,'level-create-bonus-level','level-create-bonus-level');
    
        setTimeout(() => {
            const level = document.getElementById('level-create-bonus-level');
             
            level.style.setProperty('--level', `${levelInput.percent}%`);
        
            level.style.setProperty('--level-color', `${levelInput.color}`);
        
        }, 0);
    
    }

    setDiamantProgress(percent) {
    document.querySelector('#diament-view .diament-view__fill')
        .style.width = `${percent}%`;

    document.getElementById('diament-view')
        .dataset.progress = `${Math.round(percent)}%`;
    }


closeGoalModal() {
    document.querySelector('.goal-modal')?.remove();
}

renderMenuGoal(goalForTheDay, numberOfCrystals, enterTheGoal, save, setGoalForToday, init) {
    let forRender = `
        <div class="goal-modal">
            <div class="goal-modal__content">

                <div class="goal-modal__title">
                    🎯 ${goalForTheDay}
                </div>

                <label class="goal-modal__label">
                    ${numberOfCrystals}
                </label>

                <input
                    id="goal-input"
                    class="goal-modal__input"
                    type="number"
                    min="1"
                    placeholder="${enterTheGoal}"
                >

                <button
                    id="save-goal-btn"
                    class="goal-modal__button"
                >
                    ${save}
                </button>

            </div>
        </div>
    `;

    const goalForToday = document.getElementById('goal-for-today');
        document.getElementById('diament-view')
                .addEventListener('click', () => {
                    goalForToday.innerHTML = forRender;
                    document
                            .getElementById('save-goal-btn')
                            .addEventListener('click', () => {
                                // localStorage.setItem('goalForToday', document.getElementById('goal-input').value);
                                setGoalForToday(document.getElementById('goal-input').value);
                                init();
                                this.closeGoalModal();
                            });
                    document
                            .querySelector('.goal-modal')
                            .addEventListener('click', (e) => {

                                if (e.target.classList.contains('goal-modal')) {
                                    e.currentTarget.remove();
                                }

                            });
                });
}
    

}