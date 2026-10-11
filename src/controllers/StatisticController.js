

export class StatisticController{
    constructor({statisticModel, statisticView}) {
        this.statisticModel = statisticModel;
        this.statisticView = statisticView;
    }


init() {
    this.statisticView.setDiamantProgress(50);
}

}