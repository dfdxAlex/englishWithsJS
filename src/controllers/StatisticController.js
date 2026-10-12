

export class StatisticController{
    constructor({statisticModel, statisticView, languageController}) {
        this.statisticModel = statisticModel;
        this.statisticView = statisticView;
        this.languageController = languageController;

        

        const goalForTheDay = this.languageController.translate('Цель на день')
        const numberOfCrystals = this.languageController.translate('Количество кристаллов')
        const enterTheGoal = this.languageController.translate('Введите цель')
        const save = this.languageController.translate('Сохранить')
        const menuGoal = this.statisticView.createMenuGoal(goalForTheDay, numberOfCrystals, enterTheGoal, save);
        const goalForToday = document.getElementById('goal-for-today');
        document.getElementById('diament-view')
                .addEventListener('click', () => {
                    goalForToday.innerHTML = menuGoal;
                    document
                            .getElementById('save-goal-btn')
                            .addEventListener('click', () => {
                                this.statisticView.closeGoalModal();
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



init() {

const daily = Number(this.statisticModel.loadDailyScore().diamantToday);
const max = Number(this.statisticModel.loadMaxDiamantToday());

let procent = 0;

if (!Number.isNaN(daily) && !Number.isNaN(max) && max > 0) {
    procent = Math.trunc(daily / max * 100);
} 

if (procent > 100) 
        procent = 100;

this.statisticView.setDiamantProgress(procent);
}


}