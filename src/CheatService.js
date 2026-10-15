export class CheatService {
    constructor({statisticModel}) {

        if (this.#CheatCode.resetDailyScore) {
            statisticModel.getSetup().resetDailyScore = true;
            statisticModel.servisForThisModel();
            // console.log('сбросить');
        }
        if (this.#CheatCode.resetMaxDiamantToday) 
            statisticModel.getSetup().resetMaxDiamantToday = true;
    }

    #CheatCode = {
        resetDailyScore:false,          // сбросить дневной счёт для отладки
        resetMaxDiamantToday:false,     // сбросить максимальное число набранных алмазов за сегодня
    }
}