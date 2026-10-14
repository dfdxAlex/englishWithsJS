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
                    statisticController,
                    bonusBoxView}) {
        this.forBooble = forBooble;
        this.boobleUpService = boobleUpService;
        this.DataOk = DataOk;
        this.boobleUpModel = boobleUpModel;
        this.boobleUpView = boobleUpView;
        this.statisticModel = statisticModel;
        this.statisticController = statisticController;
        this.bonusBoxView = bonusBoxView;

        // накинуть событие помощи на кристал вверху слева
        hundleHelpPrime(Help);
    }

    #setupController = {
        forceBonusBox:false,            // если дать true то бонусный ящик падает всегда
        boobleFinishY:50,               // до куда долетает кристал если не отработает по времени
        animationInterval:16,           // время задержки таймера на каждом цыкле
        randomShiftDelay:16,            // длина смещения влево/вправо
        crystalWidth:60,                // ширина кристала, для вычисления отскока слева
        boobleMargin:10,                // отскок от правой стороны екрана
    }

    #state = {
        speedY:2,                       // скорость движения анимации
        randomInt:-1,                   // содержит цифру, если она 1, то выпадает ящик
        timeAnimation:3000,             // время работы анимации, если сундука нет то 3000, если есть 8200
        timeAnimationByBox:8200,        // время работы цикла при выпадении сундука 
        startTime:0,                    // хранит состояние таймера длительности анимации
        lag:6,                          // текущее значение отклонения для смещения вправо-влево
        numberRand:0,                   // случайно задает шаг изменения координав лево/право
        buttonCheckYStart:undefined,    // содержит стартовые координаты по Y
        hightOld:undefined,             // хранит предыдущее значение координаты Y, для сигнала на случай прихода нового клика по ответам
    }

    #elements = {
        bonusBox:undefined,             // содержит ссылку на бонусный ящик / используется во вьюхе
        selectBoobleUp:undefined,       // контейнер для пузыря хранится тут
    }

    init() {
            const id = setInterval(() => {

                // if (this.forBooble.buttonCheckY === 0) this.#state.buttonCheckYStart = undefined;
          
                // Если координата Y всё ещё ниже потолка то работаем
                // Если кристал ниже границы окончания всплытия
                if (this.forBooble.buttonCheckY > this.#setupController.boobleFinishY) {

                    // запоминает стартовую координату Y при нажатии на ответ
                    this.initAnimationState();
                    // занимается смещением влево/вправо
                    this.updateHorizontalPosition();

                    this.boobleUpView.createCristal(this.forBooble.buttonCheckX,
                                                    this.forBooble.buttonCheckY
                                                    );

                    // Нарисовать картинку пузыря, если ее ещё нет, алмаз, шапка или череп
                    // если нет контейнера, то создать его и вернуть ссылку в this.#elements.selectBoobleUp
                    this.#elements.selectBoobleUp = this.boobleUpView.getBoobleUpContainer(
                                                            this.#elements.selectBoobleUp, 
                                                            this.forBooble.diamant,
                                                            this.forBooble.buttonCheckX,
                                                            this.forBooble.buttonCheckY
                                                          );

                    // активирует бонусный ящик и подгоняет анимацию под его появление
                    this.activateBonusMode();

                    // Если выпал бонусный ящик, постоянно сбрасываем таймер,
                    // чтобы отключить ограничение всплытия в 3 секунды.
                    this.startAnimationTimer();
                    // всплытие кристаллов
                    this.moveUp();

                    // Пока пузырь нормально летит вверх его координата Y предыдущая на 1 больше новой
                    // Если приходит новый ответ раньше, чем пузырь долетел до верха, то его координата
                    // изменяется и перестает отличаться на 1 балл
                    // Для ресета картинки удаляем старый пузырь и система автоматически сгенерирует новый
                    if (Math.abs((this.forBooble.buttonCheckY - this.#state.hightOld) - (-this.#state.speedY)) > 0.01) {
                            // удалить контейнер с пузырем и обнулить таймер
                            this.boobleUpView.removeBoobleUpContainer(this.#elements);
                            // функция набора заработанных баллов за сегодня
                            this.boobleUpModel.correctStreak();
                            // функция контролля числа баллов заработанных сегодня
                            this.statisticModel.saveDailyScore(this.forBooble);
                            this.forBooble.bonusX2 = 0;

                            // сброс таймера длительности анимации
                            this.#state.startTime = 0;

                            this.statisticController.init();

                        } else if (Date.now() - this.#state.startTime > this.#state.timeAnimation) {
                                    this.#state.startTime = 0;
                                    this.forBooble.buttonCheckY = 0;

                                    this.statisticModel.saveDailyScore(this.forBooble);
                                    this.forBooble.bonusX2 = 0;
                                }
            
                    // Запомнить текущую координату Y чтобы на следующей итерации сравнить её с текущей
                    // величиной следующей итерации.
                    // Если разница будет отличаться от -1, то пришел новый ответ отличный по тестам
                    this.#state.hightOld = this.forBooble.buttonCheckY;
                   
               } else if (this.#elements.selectBoobleUp) {
                    // удалить контейнер с пузырем и обнулить таймер длительности анимации
                    this.boobleUpView.removeBoobleUpContainer(this.#elements);

                    this.bonusBoxView.removeBonusBox(this.#elements);
                    this.#state.startTime = 0;
                    // убрать затмение
                    this.bonusBoxView.hideBonusOverlay();
                    // сброс времени анимации
                    this.#state.timeAnimation = 3000;
                    
                    this.bonusBoxView.renderBoxForInfoBonus();
                    document.querySelector('#bonus-diamant')?.remove();
                    this.#state.buttonCheckYStart = undefined;
                    this.#state.hightOld = undefined;
                    this.#state.speedY = 2;
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

activateBonusMode() {
    // сундук с сокровищами, одна попытка создать его. сброс попытки при окончании
    // всплытия кристала
    if (this.#state.randomInt === -1) {
        this.#state.randomInt = getRandom(0, this.boobleUpModel.bonusRandomMax());
        
    // для принудительного появления ящика изменить случайное число
    if (this.#setupController.forceBonusBox) this.#state.randomInt = 1;

    if (this.#state.randomInt === 1 && Number(this.forBooble.diamant) > 0) {

        // если выпал ящик, то замедлить всплытие кристала
        this.#state.speedY = 1;

        // затемнить экран при выпадении бонусного ящика
        this.bonusBoxView.showBonusOverlay();

        // создать бонусный ящик и накинуть событие клика
        this.bonusBoxView.renderBoxScarb(this.forBooble, this.DataOk);

        this.#elements.bonusBox = this.bonusBoxView.getBonusBox(this.#elements.bonusBox);

        // вставляет в динамическое меню картинку алмаза умножить на 2
        this.bonusBoxView.renderDiamandX2();

        // увеличить время анимации если выпал ящик
        this.#state.timeAnimation = this.#state.timeAnimationByBox;
    }
}
}

updateHorizontalPosition() {
    // Здесь задается смещение вправо-влево
    if (this.#state.lag < 0) {
        this.#state.numberRand = this.boobleUpService.getBoobleDirection(this.forBooble.buttonCheckX, 
                                                                         window.innerWidth);
        this.#state.lag = this.#setupController.randomShiftDelay;
    }
    this.#state.lag--;

    // Изменение координаты влево-вправо.
    this.forBooble.buttonCheckX+=this.#state.numberRand;
    this.forBooble.buttonCheckX = Math.max(
        this.#setupController.boobleMargin,
        Math.min(this.forBooble.buttonCheckX, window.innerWidth - this.#setupController.crystalWidth)
    );
}

initAnimationState() {
    // Если ещё не запоминали стартовую координату Y, то запомнить
    if (this.#state.buttonCheckYStart === undefined) {
        this.#state.buttonCheckYStart = this.forBooble.buttonCheckY;
        this.#state.hightOld = this.#state.buttonCheckYStart;
    }
}

startAnimationTimer() {
    if (this.#state.startTime === 0) {
        this.#state.startTime = Date.now();
    }
}

moveUp() {
    const bonusBox = this.bonusBoxView.getBonusBox(this.#elements.bonusBox);
    if (bonusBox && this.#state.randomInt === 1) {
        bonusBox.style.left = this.forBooble.buttonCheckX + "px"; // Начальная позиция
        bonusBox.style.top = this.#state.buttonCheckYStart - this.forBooble.buttonCheckY + "px";
    }
    // процесс всплытия всплытия
    this.forBooble.buttonCheckY-=this.#state.speedY;
} 
}