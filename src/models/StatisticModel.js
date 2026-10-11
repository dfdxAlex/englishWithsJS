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
    if (localStorage.getItem('maxDiamantToday') === null
        || Number(diamantToday) > Number(this.forBooble.maxDiamantToday)) {
        localStorage.setItem('maxDiamantToday', diamantToday);
        this.forBooble.maxDiamantToday = diamantToday;
    }
}

loadMaxDiamantToday() {
    return Number(localStorage.getItem('maxDiamantToday')) || 0;
}
}