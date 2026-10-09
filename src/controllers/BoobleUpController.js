// контроллер для всплывающих кристалов

// Функция контролирует процесс всплытия кристала и падение ящика
// Цикл работает всегда, управление пузырями производится через изменение координат у адпления кристалов

import { removeBonusDiamant } from '../view/boobleUp/removeBonusDiamant.js';
import { getRandom } from '../services/getRandom.js';
import { getNumberRand } from '../view/boobleUp/getNumberRand.js';
import { createDiamandX2 } from '../view/boobleUp/createDiamandX2.js';
import { createBoxScarb } from '../view/boobleUp/createBoxScarb.js';
import { createBoxForInfoBonus } from '../view/boobleUp/createBoxForInfoBonus.js';

export class BoobleUpController
{
    constructor({SettingForProgram, boobleUpModel, boobleUpView}) {
        this.settingForProgram = SettingForProgram;
        this.forBooble = SettingForProgram.forBooble;

        this.boobleUpModel = boobleUpModel;
        this.boobleUpView = boobleUpView;
    }

    init() {
            const BOOBLE_FINISH_Y = 50;
            let animation_Interval = 8;
            const RANDOM_SHIFT_DELAY = 16;

            // работа с шириной екрана, отскок от правой стороны екрана
            const screenWidth = window.innerWidth;
            const crystalWidth = 60;
            const BOOBLE_MARGIN = 10;

            let randomInt = undefined;

            // постоянная часть для всплывающего шарика
            let divCreate = document.createElement("div");
            divCreate.innerText = '💎';
            let divCreateForBonusBox;
           
        
            let lag = 6;
            let numberRand = 0;
            let randomOk = false;
            let hightOld;
            let buttonCheckYStart;
        
            const id = setInterval(() => {

                // выбрать контейнер для алмаза
                const selectBoobleUp = document.getElementById('boobleUp');
                
                // Если координата Y всё ещё ниже потолка то работаем
                // Если кристал ниже границы окончания всплытия
                if (this.forBooble.buttonCheckY > BOOBLE_FINISH_Y) {
        
                    // Если ещё не запоминали стартовую координату Y, то запомнить
                        if (buttonCheckYStart === undefined) {
                        buttonCheckYStart = this.forBooble.buttonCheckY;
                        hightOld = this.forBooble.buttonCheckY;
                    }
            
                    // Здесь задается смещение вправо-влево
                    if (lag < 0) {
                        numberRand = getNumberRand();
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
                        //если падал бонусный сундук то удалить его
                        this.boobleUpView.removeBonusBox();
                        //создать контейнер с кристалом
                        this.boobleUpView.setBoobleUp(this.forBooble.diamant, divCreate);
                    }
        
                    // сундук с сокровищами, одна попытка создать его. сброс попытки при окончании
                    // всплытия кристала
                    // прикомандировка сюда счётчика правильных ответов подряд
                    if (divCreateForBonusBox === undefined && randomInt === undefined) {
                        randomInt = getRandom(0, this.boobleUpModel.bonusRandomMax());
                        
                        if (randomInt == 1) randomOk = true;
                    //    randomOk = true; // если раскомментировать, то ящик падает всегда
                        if (randomOk) {
                            // если выпал ящик, то замедлить выполнение цикла пока он не пролетит
                            animation_Interval = 15;

                            // создать бонусный ящик и накинуть событие клика
                            createBoxScarb();
        
                            divCreateForBonusBox = document.getElementById('scarb');
        
                            // вставляет в динамическое меню картинку алмаза умножить на 2
                            createDiamandX2();
                        }
                    }
        
                    if (divCreateForBonusBox !== undefined && randomOk) {
                        this.forBooble.buttonCheckX+=numberRand;
                        divCreateForBonusBox.style.left = this.forBooble.buttonCheckX + "px"; // Начальная позиция
                        divCreateForBonusBox.style.top = buttonCheckYStart - this.forBooble.buttonCheckY + "px";
                    }
                    // Скорость всплытия
                    this.forBooble.buttonCheckY-=1;
            
                    // Пока пузырь нормально летит вверх его координата Y предыдущая на 1 больше новой
                    // Если приходит новый ответ раньше, чем пузырь долетел до верха, то его координата
                    // изменяется и перестает отличаться на 1 балл
                    // Для ресета картинки удаляем старый пузырь и система автоматически сгенерирует новый
                    if (this.forBooble.buttonCheckY - hightOld !== -1) {
                        if (selectBoobleUp) {
                            selectBoobleUp.remove();
                        }
                    }
            
                    // Запомнить текущую координату Y чтобы на следующей итерации сравнить её с текущей
                    // величиной следующей итерации.
                    // Если разница будет отличаться от -1, то пришел новый ответ отличный по тестам
                    hightOld = this.forBooble.buttonCheckY;
                   
               } else if (selectBoobleUp) {
                    selectBoobleUp.remove();
                   if (document.getElementById('scarb'))
                       document.getElementById('scarb').remove();
                    divCreate.innerText = '';
                    randomOk = false;
                    createBoxForInfoBonus();
                    removeBonusDiamant();
                    buttonCheckYStart = undefined;
                    hightOld = undefined;
                    divCreateForBonusBox = undefined;
                    randomInt = undefined;
                    animation_Interval = 15;
               }
           }, ANIMATION_INTERVAL);
    }
}