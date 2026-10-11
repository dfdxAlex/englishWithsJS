

export class StatisticController{
    constructor({statisticModel, statisticView}) {
        this.statisticModel = statisticModel;
        this.statisticView = statisticView;
    }


init() {

    let procent = Number(this.statisticModel.loadSaveDailyScore().diamantToday)/Number(this.statisticModel.loadMaxDiamantToday())*100;
    if (procent > 100) procent = 100;
    if (Number.isNaN(procent)) procent = 0;

    this.statisticView.setDiamantProgress(procent);

    console.log(this.statisticModel.loadSaveDailyScore());
    console.log(this.statisticModel.loadMaxDiamantToday());
}

}