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






saveStatisticAll() {

    let nameLevel = localStorage.getItem('nameArrayDb');
    let diamant = this.forBooble;

    // console.log(this.SettingForProgram.testsOk);

    // console.log(this.resetSaveStatisticAll());

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