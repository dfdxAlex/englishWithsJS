export class CheatService {
    constructor() {

    }

    #CheatCodes = {
        saveDailyScore:true,           // сбросить дневной счёт для отладки
        maxDiamantToday:true,          // сбросить максимальное число набранных алмазов за все дни
    }

    #setup = {
        enabled:false,                  // Включить читер
        interval:500,                   // интервал обновления читера
        onConsoleLog: true,             // показать коменты от каждой функции в консоль
        oneShot: true,                  // отработать 1 раз
    }

    init() {
        if (!this.#setup.enabled) return;

        console.log('Запуск читера');
        const id = setInterval((cheatCodes, setup)=>{
            this.saveDailyScore(cheatCodes, setup);
            this.maxDiamantToday(cheatCodes, setup);
            this.outSetInterval(setup, cheatCodes, id);
        },this.#setup.interval, this.#CheatCodes, this.#setup);
    }

    // проверяет объект setup, если установлено что нужно сработать один раз,
    // то проверяет все ли флаги отработали, если да, то удаляет интервал
    outSetInterval(setup, cheatCodes, id) {
        if (!setup.oneShot) return;
            const hasActiveCheat =
                Object.values(cheatCodes)
                    .some(value => value);
            if (!hasActiveCheat) {
                clearInterval(id);
                console.log('Остановка читера');
            }
    }

    saveDailyScore(cheatCodes, setup) {
        if (!cheatCodes.saveDailyScore) return;
        if (setup.onConsoleLog) console.log('Удаление saveDailyScore');
        localStorage.removeItem('saveDailyScore');
        if (setup.oneShot) cheatCodes.saveDailyScore = false;
    }

    maxDiamantToday(cheatCodes, setup) {
        if (!cheatCodes.maxDiamantToday) return;
        if (setup.onConsoleLog) console.log('Удаление maxDiamantToday');
        localStorage.removeItem('maxDiamantToday');
        if (setup.oneShot) cheatCodes.maxDiamantToday = false;
    }
}