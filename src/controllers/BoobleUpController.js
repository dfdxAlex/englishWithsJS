// контроллер для всплывающих кристалов

// Функция контролирует процесс всплытия кристала и падение ящика
// Цикл работает всегда, управление пузырями производится через изменение координат у адпления кристалов

import { getRandom } from '../services/getRandom.js';

export class BoobleUpController
{
    constructor({   SettingForProgram, 
                    boobleUpModel, 
                    boobleUpView,
                    boobleUpService}) {
        this.settingForProgram = SettingForProgram;
        this.forBooble = SettingForProgram.forBooble;
        this.boobleUpService = boobleUpService;

        this.boobleUpModel = boobleUpModel;
        this.boobleUpView = boobleUpView;
    }

    init() {
            const BOOBLE_FINISH_Y = 50;
            let ANIMATION_INTERVAL = 16;
            const RANDOM_SHIFT_DELAY = 16;
            let speedY = 2;

            // работа с шириной екрана, отскок от правой стороны екрана
            const screenWidth = window.innerWidth;
            const crystalWidth = 60;
            const BOOBLE_MARGIN = 10;

            let randomInt = undefined;

            // постоянная часть для всплывающего шарика
            let divCreate = document.createElement("div");
            divCreate.innerText = '💎';
            let divCreateForBonusBox = undefined;

            let selectBoobleUp = undefined;
           
        
            let lag = 6;
            let numberRand = 0;
            let randomOk = false;
            let hightOld;
            let buttonCheckYStart;

            // для ограничения времени всплытия когда не выпал ящик с призом
            let startTime;
        
            const id = setInterval(() => {
          
                // Если координата Y всё ещё ниже потолка то работаем
                // Если кристал ниже границы окончания всплытия
                if (this.forBooble.buttonCheckY > BOOBLE_FINISH_Y) {
                    // Если ещё не запоминали стартовую координату Y, то запомнить
                        if (buttonCheckYStart === undefined) {
                        buttonCheckYStart = this.forBooble.buttonCheckY;
                        hightOld = buttonCheckYStart;
                    }
            
                    // Здесь задается смещение вправо-влево
                    if (lag < 0) {
                        numberRand = this.boobleUpService.getBoobleDirection(   this.forBooble.buttonCheckX, 
                                                                                window.innerWidth);
                        lag = RANDOM_SHIFT_DELAY;
                    }
                    lag--;
        
                    // Изменение координаты влево-вправо.
                    this.forBooble.buttonCheckX+=numberRand;
                    this.forBooble.buttonCheckX = Math.max(
                        BOOBLE_MARGIN,
                        Math.min(this.forBooble.buttonCheckX, screenWidth - crystalWidth)
                    );
                    divCreate.style.left = this.forBooble.buttonCheckX + "px"; // Начальная позиция
                    divCreate.style.top = this.forBooble.buttonCheckY + "px";

                    // Нарисовать картинку пузыря, если ее ещё нет, алмаз, шапка или череп
                    if (!selectBoobleUp) {
                        selectBoobleUp = document.getElementById('boobleUp');
                        startTime = Date.now();

                        //если падал бонусный сундук то удалить его
                        this.boobleUpView.removeBonusBox();

                        //создать контейнер с кристалом
                        this.boobleUpView.setBoobleUp(this.forBooble.diamant, divCreate);
                    }
        
                    // сундук с сокровищами, одна попытка создать его. сброс попытки при окончании
                    // всплытия кристала
                    if (divCreateForBonusBox === undefined && randomInt === undefined) {
                        randomInt = getRandom(0, this.boobleUpModel.bonusRandomMax());
                        
                        if (randomInt == 1) randomOk = true;
                    //    randomOk = true; // если раскомментировать, то ящик падает всегда
                        if (randomOk) {

                            // если выпал ящик, то замедлить всплытие кристала
                            speedY = 1;

                            // создать бонусный ящик и накинуть событие клика
                            this.boobleUpView.createBoxScarb(this.forBooble);

        
                            divCreateForBonusBox = document.getElementById('scarb');
        
                            // вставляет в динамическое меню картинку алмаза умножить на 2
                            this.boobleUpView.createDiamandX2();
                        }
                    }
                    
                    if (divCreateForBonusBox) {
                        startTime = Date.now();
                    }
        
                    if (divCreateForBonusBox !== undefined && randomOk) {
                        divCreateForBonusBox.style.left = this.forBooble.buttonCheckX + "px"; // Начальная позиция
                        divCreateForBonusBox.style.top = buttonCheckYStart - this.forBooble.buttonCheckY + "px";
                    }
                    // Скорость всплытия
                    this.forBooble.buttonCheckY-=speedY;
            
                    // Пока пузырь нормально летит вверх его координата Y предыдущая на 1 больше новой
                    // Если приходит новый ответ раньше, чем пузырь долетел до верха, то его координата
                    // изменяется и перестает отличаться на 1 балл
                    // Для ресета картинки удаляем старый пузырь и система автоматически сгенерирует новый
                    // if (this.forBooble.buttonCheckY - hightOld !== -speedY) 
                    if (Math.abs((this.forBooble.buttonCheckY - hightOld) - (-speedY)) > 0.01) {
                            selectBoobleUp?.remove();
                            selectBoobleUp = undefined;
                        }



                    if (Date.now() - startTime > 3000) {
                        startTime = 0;
                        this.forBooble.buttonCheckY = 0;
                    }
            
                    // Запомнить текущую координату Y чтобы на следующей итерации сравнить её с текущей
                    // величиной следующей итерации.
                    // Если разница будет отличаться от -1, то пришел новый ответ отличный по тестам
                    hightOld = this.forBooble.buttonCheckY;
                   
               } else if (selectBoobleUp) {
                    selectBoobleUp?.remove();
                    selectBoobleUp = undefined;
                    divCreateForBonusBox?.remove();
                    divCreateForBonusBox = undefined;
                    divCreate.innerText = '';
                    randomOk = false;
                    this.boobleUpView.createBoxForInfoBonus();
                    document.querySelector('#bonus-diamant')?.remove();
                    buttonCheckYStart = undefined;
                    hightOld = undefined;
                    divCreateForBonusBox = undefined;
                    randomInt = undefined;
                    speedY = 1.5;
                    startTime = 0;
               }
           }, ANIMATION_INTERVAL);
    }
}