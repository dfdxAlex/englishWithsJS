export class StatisticModel {
constructor({SettingForProgram, boobleUpService}) {
    this.SettingForProgram = SettingForProgram;
    this.forBooble = this.SettingForProgram.forBooble;
    this.boobleUpService = boobleUpService;
}
// добавить число выбитых пунктов и записать(добавить к тем что уже есть)
saveDailyScore() {

    // получить данные по статистике сегодня из хранилища
    let statisticToday = this.boobleUpService.loadSaveDailyScore();

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
}