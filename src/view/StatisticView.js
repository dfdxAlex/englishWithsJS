import './styles/setDiamantProgress.scss';
import './styles/statisticView.scss';
import './styles/renderBonusLevel.scss';
import './styles/goal200.scss';

import confetti from 'canvas-confetti';
import { addElToDinamicMenu } from './addElToDinamicMenu.js';

export class StatisticView {
    // рендер полосы активности в динамическое меню
    renderBonusLevel(levelData)
    {
        const str = `<span class="level-create-bonus-level__fill"></span>`;
        addElToDinamicMenu(str,'level-create-bonus-level','level-create-bonus-level');
        setTimeout(() => {
            const level = document.getElementById('level-create-bonus-level');
            level.style.setProperty('--level', `${levelData.percent}%`);
            level.style.setProperty('--level-color', `${levelData.color}`);
        }, 0);
    }

setDiamantProgress(percent) {
    document.querySelector('#diament-view .diament-view__fill').style.width = `${percent}%`;
    document.getElementById('diament-view').dataset.progress = `${Math.round(percent)}%`;
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
    
goal100() {
    confetti({particleCount: 200, spread: 150, origin: { y: 0.6 }});
}

goal120() {
    confetti({particleCount: 200, angle: 60, spread: 80, origin: { x: 0 }});
    confetti({particleCount: 200, angle: 120, spread: 80, origin: { x: 1 }});
}

goal150() {
        const duration = 3000;
        const end = Date.now() + duration;
        const interval = setInterval(() => {
            if (Date.now() > end) {
                return clearInterval(interval);
            }
            confetti({particleCount: 30, 
                      spread: 360, 
                      startVelocity: 40, 
                      origin: {x: Math.random(), y: Math.random() * 0.5
                }
            });
        }, 200);
}

goal200() {
    const shots = 9;
    for (let shot = 0; shot < shots; shot++) {
        setTimeout(() => {
            const centerX =
                window.innerWidth / 2 + (Math.random() - 0.5) * 150;
            const centerY =
                window.innerHeight / 2 + (Math.random() - 0.5) * 100;
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.className = 'goal-particle';
                particle.textContent = '💎';
                particle.style.fontSize =
                    `${16 + Math.random() * 20}px`;
                document.body.appendChild(particle);
                particle.style.left = `${centerX}px`;
                particle.style.top = `${centerY}px`;
                const angle = Math.random() * Math.PI * 2;
                const distance = 150 + Math.random() * 250;
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;
                particle.animate([
                        {transform: 'translate(0,0) scale(1)',
                         opacity: 1},
                        {transform: `translate(${x}px, ${y}px) scale(0.3)`,
                         opacity: 0}
                    ],
                    {   duration: 2200,
                        easing: 'cubic-bezier(.17,.84,.44,1)'}
                );
                setTimeout(() => particle.remove(), 2200);
            }
        }, shot * 350);
    }
}

}