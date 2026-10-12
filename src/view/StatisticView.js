import './styles/setDiamantProgress.scss';
import './styles/statisticView.scss';


export class StatisticView {

    constructor() {

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

renderMenuGoal(goalForTheDay, numberOfCrystals, enterTheGoal, save) {
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
                                localStorage.setItem('goalForToday', document.getElementById('goal-input').value);
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