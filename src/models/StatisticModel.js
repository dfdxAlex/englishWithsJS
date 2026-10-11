export class StatisticModel {
constructor({SettingForProgram, boobleUpService}) {
    this.SettingForProgram = SettingForProgram;
    this.forBooble = this.SettingForProgram.forBooble;
    this.boobleUpService = boobleUpService;
}

// если нет переменной в локадсторедже, то создать ее на день сегодняшний, или вернуть false
loadSaveDailyScore() {

    let objDaily = JSON.parse(localStorage.getItem('saveDailyScore'));
    if (objDaily === null) {
        objDaily = this.resetSaveDailyScore();
    }

    if (objDaily.data === undefined 
        || objDaily.diamantToday === undefined
            || objDaily.data !== new Date().toDateString()) {
                localStorage.removeItem('saveDailyScore');
                objDaily=this.resetSaveDailyScore();
    }
 
    return objDaily;
}

// создает объект с полями и записывает в localStorage
resetSaveDailyScore() {
        
        let objDaily = {data: new Date().toDateString(), 
                        diamantToday: this.forBooble.diamantToday};

        localStorage.setItem('saveDailyScore',JSON.stringify(objDaily));
        return objDaily;
}

// добавить число выбитых пунктов и записать(добавить к тем что уже есть)
saveDailyScore() {

    // получить данные по статистике сегодня из хранилища
    let statisticToday = this.loadSaveDailyScore();

        statisticToday.diamantToday = Number(statisticToday.diamantToday) 
                                        + Number(this.forBooble.diamant)
                                           + Number(this.forBooble.bonusX2);

        localStorage.setItem('saveDailyScore',JSON.stringify(statisticToday));

        // записать данные, если они выросли по сравнению с другими днями
        this.saveMaxDiamantToday(statisticToday.diamantToday);

        // console.log(statisticToday.diamantToday);

        this.forBooble.bonusX2 = 0;

}

saveMaxDiamantToday(diamantToday) {
    if (localStorage.getItem('maxDiamantToday') === null
        || Number(diamantToday) > Number(this.forBooble.maxDiamantToday)) {
        localStorage.setItem('maxDiamantToday', diamantToday);
        this.forBooble.maxDiamantToday = diamantToday;
    }
}

loadMaxDiamantToday() {
    if (localStorage.getItem('maxDiamantToday') !== null) {
        return Number(localStorage.getItem('maxDiamantToday'));
    } else {
        return 0;
    }
}
}