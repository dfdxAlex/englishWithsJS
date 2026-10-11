import { getRandom } from './getRandom.js';


export class BoobleUpService {



constructor({SettingForProgram}) {
    this.SettingForProgram = SettingForProgram;
    this.forBooble = this.SettingForProgram.forBooble;

}

getBoobleDirection(x, screenWidth) {
    if (screenWidth - x < 100) return -1;
    if (x < 20) return 1;

    return getRandom(-2, 2);
}






saveStatisticAll() {

    let nameLevel = localStorage.getItem('nameArrayDb');
    let diamant = this.forBooble;

    // console.log(this.SettingForProgram.testsOk);

    // console.log(this.resetSaveStatisticAll());

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

resetSaveStatisticAll()
{
    let objStatisticAll = JSON.parse(localStorage.getItem('objStatisticAll'));
    if (objStatisticAll === null) {
        objStatisticAll = {};
        localStorage.setItem('objStatisticAll',JSON.stringify(objStatisticAll));
    }
    return objStatisticAll;
}

}