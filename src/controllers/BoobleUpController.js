// контроллер для всплывающих кристалов

// Функция контролирует процесс всплытия кристала и падение ящика
// Цикл работает всегда, управление пузырями производится через изменение координат у адпления кристалов

import { getRandom } from '../services/getRandom.js';
import { hundleHelpPrime } from '../view/hundleHelpPrime.js';

export class BoobleUpController
{
    constructor({   forBooble, 
                    boobleUpModel, 
                    boobleUpView,
                    boobleUpService,
                    DataOk,
                    Help,
                    statisticModel,
                    statisticController}) {
        this.forBooble = forBooble;
        this.boobleUpService = boobleUpService;
        this.DataOk = DataOk;
        this.boobleUpModel = boobleUpModel;
        this.boobleUpView = boobleUpView;
        this.statisticModel = statisticModel;
        this.statisticController = statisticController;

        // накинуть событие помощи на кристал вверху слева
        hundleHelpPrime(Help);
    }

    #setupController = {
        boobleFinishY:50,               // до куда долетает кристал если не отработает по времени
        animationInterval:16,           // время задержки таймера на каждом цыкле
        randomShiftDelay:16,            // длина смещения влево/вправо
        
        screenWidth:window.innerWidth,  // прочитать ширину екрана
        crystalWidth:60,                // ширина кристала, для вычисления отскока слева
        boobleMargin:10,                // отскок от правой стороны екрана
    }

    #state = {
        speedY:2,                       // скорость движения анимации
        randomInt:-1,                   // содержит цифру, если она 1, то выпадает ящик
        bonusBox:undefined,             // содержит ссылку на бонусный ящик
    }

    getBonusBox(state) {
        if (!state.bonusBox)
            state.bonusBox = document.getElementById('scarb') || undefined;
        return state.bonusBox;
    }

    removeBonusBox(state) {
        state.bonusBox?.remove();
        state.bonusBox = undefined;
    }

    init() {

            let selectBoobleUp = undefined;
        
            let lag = 6;
            let numberRand = 0;
            let hightOld;
            let buttonCheckYStart;

            // для ограничения времени всплытия когда не выпал ящик с призом
            let startTime;
        
            const id = setInterval(() => {
          
                // Если координата Y всё ещё ниже потолка то работаем
                // Если кристал ниже границы окончания всплытия
                if (this.forBooble.buttonCheckY > this.#setupController.boobleFinishY) {
                    // Если ещё не запоминали стартовую координату Y, то запомнить
                        if (buttonCheckYStart === undefined) {
                        buttonCheckYStart = this.forBooble.buttonCheckY;
                        hightOld = buttonCheckYStart;
                    }
            
                    // Здесь задается смещение вправо-влево
                    if (lag < 0) {
                        numberRand = this.boobleUpService.getBoobleDirection(   this.forBooble.buttonCheckX, 
                                                                                window.innerWidth);
                        lag = this.#setupController.randomShiftDelay;
                    }
                    lag--;
        
                    // Изменение координаты влево-вправо.
                    this.forBooble.buttonCheckX+=numberRand;
                    this.forBooble.buttonCheckX = Math.max(
                        this.#setupController.boobleMargin,
                        Math.min(this.forBooble.buttonCheckX, this.#setupController.screenWidth - this.#setupController.crystalWidth)
                    );

                    this.boobleUpView.createCristal(this.forBooble);

                    // Нарисовать картинку пузыря, если ее ещё нет, алмаз, шапка или череп
                    if (!selectBoobleUp) {
                        selectBoobleUp = document.getElementById('boobleUp');
                        startTime = Date.now();

                        //если падал бонусный сундук то удалить его
                        this.boobleUpView.removeBonusBox();

                        //создать контейнер с кристалом
                        this.boobleUpView.setBoobleUp(this.forBooble.diamant, this.boobleUpView.createCristal(this.forBooble));
                    }
        
                    // сундук с сокровищами, одна попытка создать его. сброс попытки при окончании
                    // всплытия кристала
                    if (this.#state.randomInt === -1) {
                        this.#state.randomInt = getRandom(0, this.boobleUpModel.bonusRandomMax());
                        
                    //    this.#state.randomInt = 1; // если раскомментировать, то ящик падает всегда
                        if (this.#state.randomInt === 1) {

                            // если выпал ящик, то замедлить всплытие кристала
                            this.#state.speedY = 1;

                            // создать бонусный ящик и накинуть событие клика
                            this.boobleUpView.createBoxScarb(this.forBooble, this.DataOk);
        
                            this.getBonusBox(this.#state);
        
                            // вставляет в динамическое меню картинку алмаза умножить на 2
                            this.boobleUpView.createDiamandX2();
                        }
                    }
                    
                    // Если выпал бонусный ящик, постоянно сбрасываем таймер,
                    // чтобы отключить ограничение всплытия в 3 секунды.
                    if (this.getBonusBox(this.#state)) {
                        startTime = Date.now();
                    }
        
                    if (this.getBonusBox(this.#state) && this.#state.randomInt === 1) {
                        this.getBonusBox(this.#state).style.left = this.forBooble.buttonCheckX + "px"; // Начальная позиция
                        this.getBonusBox(this.#state).style.top = buttonCheckYStart - this.forBooble.buttonCheckY + "px";
                    }
                    // Скорость всплытия
                    this.forBooble.buttonCheckY-=this.#state.speedY;
            

                    // Пока пузырь нормально летит вверх его координата Y предыдущая на 1 больше новой
                    // Если приходит новый ответ раньше, чем пузырь долетел до верха, то его координата
                    // изменяется и перестает отличаться на 1 балл
                    // Для ресета картинки удаляем старый пузырь и система автоматически сгенерирует новый
                    if (Math.abs((this.forBooble.buttonCheckY - hightOld) - (-this.#state.speedY)) > 0.01) {
                            selectBoobleUp?.remove();
                            selectBoobleUp = undefined;
                            // функция набора заработанных баллов за сегодня
                            this.boobleUpModel.correctStreak();

                            // функция контролля числа баллов заработанных сегодня
                            this.statisticModel.saveDailyScore(this.forBooble);
                            this.forBooble.bonusX2 = 0;

                            this.statisticController.init();
                        } else if (Date.now() - startTime > 3000) {
                                    startTime = 0;
                                    this.forBooble.buttonCheckY = 0;

                                    this.statisticModel.saveDailyScore(this.forBooble);
                                    this.forBooble.bonusX2 = 0;
                                }
            
                    // Запомнить текущую координату Y чтобы на следующей итерации сравнить её с текущей
                    // величиной следующей итерации.
                    // Если разница будет отличаться от -1, то пришел новый ответ отличный по тестам
                    hightOld = this.forBooble.buttonCheckY;
                   
               } else if (selectBoobleUp) {
                    selectBoobleUp?.remove();
                    selectBoobleUp = undefined;
                    this.removeBonusBox(this.#state);
                    
                    this.boobleUpView.createBoxForInfoBonus();
                    document.querySelector('#bonus-diamant')?.remove();
                    buttonCheckYStart = undefined;
                    hightOld = undefined;
                    this.#state.speedY = 2;
                    startTime = 0;
                    this.boobleUpModel.correctStreak();

                    if (this.#state.randomInt === 1) {
                        this.statisticModel.saveDailyScore(this.forBooble);
                        this.forBooble.bonusX2 = 0;
                    }

                    this.#state.randomInt = -1;
                    this.statisticController.init();
               }
           }, this.#setupController.animationInterval);
    }
}