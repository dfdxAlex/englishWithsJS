import './styles/setDiamantProgress.scss';

export class StatisticView {

    constructor() {

    }
    
    setDiamantProgress(percent) {
        document.querySelector('#diament-view .diament-view__fill')
            .style.width = `${Math.max(0, Math.min(100, percent))}%`;
    }

}