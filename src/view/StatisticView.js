import './styles/setDiamantProgress.scss';

export class StatisticView {

    constructor() {

    }

    setDiamantProgress(percent) {
    document.querySelector('#diament-view .diament-view__fill')
        .style.width = `${percent}%`;

    document.getElementById('diament-view')
        .dataset.progress = `${Math.round(percent)}%`;
    }


}