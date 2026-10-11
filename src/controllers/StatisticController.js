

export class StatisticController{
    constructor({statisticModel, statisticView}) {
        this.statisticModel = statisticModel;
        this.statisticView = statisticView;
    }


init() {

const daily = Number(this.statisticModel.loadSaveDailyScore().diamantToday);
const max = Number(this.statisticModel.loadMaxDiamantToday());

// document.getElementById('console').dataset.progress =
//     `d:${daily} m:${max}`;

let procent = 0;

if (!Number.isNaN(daily) &&
        !Number.isNaN(max) &&
            max >= 0) {

    procent = daily / max * 100;
}

if (procent > 100) procent = 100;

    this.statisticView.setDiamantProgress(max);

    console.log(this.statisticModel.loadSaveDailyScore());
    console.log(this.statisticModel.loadMaxDiamantToday());
}

}