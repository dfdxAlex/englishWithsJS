
export class StatisticController{
    constructor({statisticModel, 
                 statisticView, 
                 languageController, 
                 boobleUpService}) {
        this.statisticModel = statisticModel;
        this.statisticView = statisticView;
        this.languageController = languageController;
        this.boobleUpService = boobleUpService;

        // рендер менюшки для ввода цели
        const goalForTheDay = this.languageController.translate('Цель на день');
        const numberOfCrystals = this.languageController.translate('Количество кристаллов');
        const enterTheGoal = this.languageController.translate('Введите цель');
        const save = this.languageController.translate('Сохранить');
        this.statisticView.renderMenuGoal(goalForTheDay, 
                                          numberOfCrystals, 
                                          enterTheGoal, 
                                          save,
                                          statisticModel.setGoalForToday,
                                          () => this.init()
                                        );
    }

#setupController = {
    
}

#state = {
    procent:0,                  // число процентов относительно заданной цели
    goalLevel:100,              // следующая цель, по достиженю цель растёт до 120, 150, 200
}

#elements = {

}

init() {

const daily = Number(this.statisticModel.loadDailyScore().diamantToday);
let max = Number(this.statisticModel.loadMaxDiamantToday());

// проверить установлена ли цель в ручную
const goalForToday = this.statisticModel.getGoalForToday();
if (goalForToday > 0) max = goalForToday;
// console.log(goalForToday);

if (!Number.isNaN(daily) && !Number.isNaN(max) && max > 0) {
    this.#state.procent = Math.trunc(daily / max * 100);
} 

if (this.#state.procent < this.#state.goalLevel) {
    this.boobleUpService.setGoalCompletedTodayOne(0);
}

if (this.#state.procent >= this.#state.goalLevel  && this.boobleUpService.isGoalCompletedTodayOne() === 0) {
    
    // эффекты при достижении уровней
    if (this.#state.goalLevel === 100) this.statisticView.goal100();
    if (this.#state.goalLevel === 120) this.statisticView.goal120();
    if (this.#state.goalLevel === 150) this.statisticView.goal150();
    if (this.#state.goalLevel === 200) this.statisticView.goal200();

    this.boobleUpService.setGoalCompletedTodayOne(1);

    if (this.#state.procent >= 100) this.#state.goalLevel = 120;
    if (this.#state.procent >= 120) this.#state.goalLevel = 150;
    if (this.#state.procent >= 150) this.#state.goalLevel = 200;
} 

const goalString = this.languageController.translate('Цель');

let next = '';
if (this.#state.goalLevel > 100)
    next = this.languageController.translate('Дальше')+`:${this.#state.goalLevel}%`;

if (this.#state.procent > 200) next = '';

this.statisticView.setDiamantProgress(this.#state.procent, 
                                      goalForToday, 
                                      goalString, 
                                      next);
}


}