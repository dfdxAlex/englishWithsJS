

export class StatisticController{
    constructor({statisticModel, statisticView}) {
        this.statisticModel = statisticModel;
        this.statisticView = statisticView;
    }


init() {

    let procent = Number(this.statisticModel.loadSaveDailyScore().diamantToday)/this.statisticModel.loadMaxDiamantToday()*100;
    if (procent > 100) procent = 100;

    this.statisticView.setDiamantProgress(procent);

    console.log(this.statisticModel.loadSaveDailyScore());
    console.log(this.statisticModel.loadMaxDiamantToday());
}

}