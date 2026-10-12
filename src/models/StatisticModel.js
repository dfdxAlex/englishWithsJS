export class StatisticModel {
constructor({forBooble}) {
    this.forBooble = forBooble;
}

// если нет переменной в локадсторедже, то создать ее на день сегодняшний, или вернуть false
loadDailyScore() {
    // localStorage.removeItem('saveDailyScore');
    // localStorage.removeItem('maxDiamantToday');

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
        console.log('добавить кристал');

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

getGoalForToday() {
    if (localStorage.getItem('goalForToday') === null) this.setGoalForToday(0);;
    const goalForToday = Number(localStorage.getItem('goalForToday'));
    if (goalForToday > 0) {
        this.forBooble.dailyGoal = goalForToday;
        return goalForToday;
    }
    return 0;
}

setGoalForToday(goal) {
    localStorage.setItem('goalForToday', goal);
}



loadMaxDiamantToday() {
    return Number(localStorage.getItem('maxDiamantToday')) || 0;
}

}