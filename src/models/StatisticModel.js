export class StatisticModel {
constructor({forBooble}) {
    this.forBooble = forBooble;
}

normalizeGoalLevel(procent) {
    if (procent >= 100) return 120;
    if (procent >= 120) return 150;
    if (procent >= 150) return 200;
    return 100;
}

getSetup() {
    return this.#setupThisModel;
}

#setupThisModel = {
    resetDailyScore:false,          // сбросить дневной счёт для отладки
    resetMaxDiamantToday:false,     // сбросить максимальное число набранных алмазов за сегодня
}

// принудительное обновление набранных за день очков и максимальное всего набранное
// работает для отладки
servisForThisModel() {
    if (this.#setupThisModel.resetDailyScore)
        localStorage.removeItem('saveDailyScore');
    if (this.#setupThisModel.resetMaxDiamantToday)
        localStorage.removeItem('maxDiamantToday');
}

// если нет переменной в локадсторедже, то создать ее на день сегодняшний, или вернуть false
loadDailyScore() {
    let objDaily = JSON.parse(localStorage.getItem('saveDailyScore'));
    if (objDaily === null) {
        objDaily = this.resetDailyScore();
    }

    if (objDaily.data === undefined 
        || objDaily.diamantToday === undefined
            || objDaily.data !== new Date().toDateString()) {
                localStorage.removeItem('saveDailyScore');
                objDaily=this.resetDailyScore();
    }
 
    return objDaily;
}

// создает объект с полями и записывает в localStorage
resetDailyScore() {
        let objDaily = {data: new Date().toDateString(), 
                        diamantToday: this.forBooble.diamantToday};

        localStorage.setItem('saveDailyScore',JSON.stringify(objDaily));
        return objDaily;
}

// добавить число выбитых пунктов и записать(добавить к тем что уже есть)
saveDailyScore() {

    // получить данные по статистике сегодня из хранилища
    let statisticToday = this.loadDailyScore();

        statisticToday.diamantToday = Number(statisticToday.diamantToday) 
                                        + Number(this.forBooble.diamant)
                                           + Number(this.forBooble.bonusX2);

        localStorage.setItem('saveDailyScore',JSON.stringify(statisticToday));

        // записать данные, если они выросли по сравнению с другими днями
        this.saveMaxDiamantToday(statisticToday.diamantToday);
}

saveMaxDiamantToday(diamantToday) {
    // если нет переменной в локальном хранилище то создать ее.
    if (localStorage.getItem('maxDiamantToday') === null) {
        localStorage.setItem('maxDiamantToday', diamantToday);
    }

    // если в объекте хранения максимального числа 0, то прочитать число из хранилища
    // должно работать при обновлении страницы
    if (this.forBooble.maxDiamantToday < Number(localStorage.getItem('maxDiamantToday'))) {
        this.forBooble.maxDiamantToday = Number(localStorage.getItem('maxDiamantToday'));
    }

    // если пришло число большее, чем было в объекте с данными, то изменить максимальное значение
    // в объекте и в хранилище
    if (Number(diamantToday) > Number(this.forBooble.maxDiamantToday)) {
        localStorage.setItem('maxDiamantToday', diamantToday);
        this.forBooble.maxDiamantToday = diamantToday;


    }
}

// вернуть цель на сегодня если она задана или 0
getGoalForToday() {
    return Number(localStorage.getItem('goalForToday')) || 0;
}

// записать цель на сегодня в хранилище
setGoalForToday(goal) {
    localStorage.setItem('goalForToday', goal);
}

loadMaxDiamantToday() {
    return Number(localStorage.getItem('maxDiamantToday')) || 0;
}

}