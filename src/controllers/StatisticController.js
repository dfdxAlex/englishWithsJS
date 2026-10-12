

export class StatisticController{
    constructor({statisticModel, statisticView, languageController}) {
        this.statisticModel = statisticModel;
        this.statisticView = statisticView;
        this.languageController = languageController;

        // рендер менюшки для ввода цели
        const goalForTheDay = this.languageController.translate('Цель на день')
        const numberOfCrystals = this.languageController.translate('Количество кристаллов')
        const enterTheGoal = this.languageController.translate('Введите цель')
        const save = this.languageController.translate('Сохранить')
        this.statisticView.renderMenuGoal(goalForTheDay, numberOfCrystals, enterTheGoal, save);
        



    }



init() {

const daily = Number(this.statisticModel.loadDailyScore().diamantToday);
let max = Number(this.statisticModel.loadMaxDiamantToday());

// проверить установлена ли цель в ручную
const goalForToday = this.statisticModel.getGoalForToday();
if (goalForToday > 0) max = goalForToday;

let procent = 0;

if (!Number.isNaN(daily) && !Number.isNaN(max) && max > 0) {
    procent = Math.trunc(daily / max * 100);
} 

if (procent > 100) 
        procent = 100;

this.statisticView.setDiamantProgress(procent);
}


}