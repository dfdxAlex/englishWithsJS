import { getRandom } from './getRandom.js';


export class BoobleUpService {



constructor({forBooble}) {
    this.forBooble = forBooble;

}

getBoobleDirection(x, screenWidth) {
    if (screenWidth - x < 100) return -1;
    if (x < 20) return 1;

    return getRandom(-2, 2);
}

// проверить выполнялась ли цель сегодня
isGoalCompletedTodayOne() {
    return Number(localStorage.getItem('isGoalCompletedTodayOne')) || 0;
}

// установить что цель выполнена на сегодня
setGoalCompletedTodayOne(set) {
    localStorage.setItem('isGoalCompletedTodayOne', set);
}

}