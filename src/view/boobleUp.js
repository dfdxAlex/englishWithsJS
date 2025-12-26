import { SettingForProgram } from '../models/SettingForProgram.js';
// import { infoForPresentBox } from './boobleUp/infoForPresentBox.js';
import { removeBonusDiamant } from './boobleUp/removeBonusDiamant.js';
import { getRandom } from '../services/getRandom.js';
import { getNumberRand } from './boobleUp/getNumberRand.js';
import { getImageBooble } from './boobleUp/getImageBooble.js';
import { getBonusBooble } from './boobleUp/getBonusBooble.js';
import { createDiamandX2 } from './boobleUp/createDiamandX2.js';
import { createBoxScarb } from './boobleUp/createBoxScarb.js';
import { createBoxForInfoBonus } from './boobleUp/createBoxForInfoBonus.js';

export function boobleUp()
{
   // постоянная часть для всплывающего шарика
   let divCreate = document.createElement("div");
   divCreate.innerText = '💎';
   let divCreateForBonusBox;
   

   let lag = 6;
   let numberRand = 0;
   let propertySrartXInitialise = false;
   let bonusBox = false;
   let randomOk = false;
   let hightOld;
   let buttonCheckYStart;

   const id = setInterval(() => {
       const selectBoobleUp = document.getElementById('boobleUp');

       // Если координата Y всё ещё ниже потолка то работаем
       // Если кристал ниже отметки в 50 пиксел
       if (SettingForProgram.buttonCheckY > 50) {

           // Если ещё не запоминали стартовую координату Y, то запомнить
           if (!propertySrartXInitialise) {
               buttonCheckYStart = SettingForProgram.buttonCheckY;
               // признак того что уже запомнили стартовое значение
               propertySrartXInitialise = true;
               hightOld = SettingForProgram.buttonCheckY;
           }

           // Здесь задается смещение вправо-влево
           if (lag < 0) {
               numberRand = getNumberRand();
               lag = 16;
           }

           lag--;

           // Изменение координаты влево-вправо.
           SettingForProgram.buttonCheckX+=numberRand;
           divCreate.style.left = SettingForProgram.buttonCheckX + "px"; // Начальная позиция
           divCreate.style.top = SettingForProgram.buttonCheckY + "px";

           // Нарисовать картинку пузыря, если ее ещё нет, алмаз, шапка или череп
           if (!selectBoobleUp) {
               // постоянные настройки пузырька
               divCreate.innerHTML = getImageBooble() + getBonusBooble();
               divCreate.style.position = "absolute"; // Позволяет двигать элемент по координатам
               divCreate.id = 'boobleUp';
               document.body.appendChild(divCreate);
           }

           // сундук с сокровищами
           if (buttonCheckYStart - SettingForProgram.buttonCheckY > 50 && !bonusBox) {
               bonusBox = true;
               let randomInt = getRandom(0,9);
               if (randomInt == 5) randomOk = true;
            //    randomOk = true; // если раскомментировать, то ящик падает всегда
               if (randomOk) {
                   // создать бонусный ящик и накинуть событие клика
                   createBoxScarb();

                   divCreateForBonusBox = document.getElementById('scarb');

                   // вставляет в динамическое меню картинку алмаза умножить на 2
                   createDiamandX2();
               }
           }

           if (bonusBox && randomOk) {
            SettingForProgram.buttonCheckX+=numberRand;
            divCreateForBonusBox.style.left = SettingForProgram.buttonCheckX + "px"; // Начальная позиция
            divCreateForBonusBox.style.top = buttonCheckYStart - SettingForProgram.buttonCheckY + "px";
           }
           // Скорость всплытия
           SettingForProgram.buttonCheckY-=1;

           // Пока пузырь нормально летит вверх его координата Y предыдущая на 1 больше новой
           // Если приходит новый ответ раньше, чем пузырь долетел до верха, то его координата
           // изменяется и перестает отличаться на 1 балл
           // Для ресета картинки удаляем старый пузырь и система автоматически сгенерирует новый
           if (SettingForProgram.buttonCheckY - hightOld !== -1) {
               if (selectBoobleUp) {
                   selectBoobleUp.remove();
               }
           }

           // Запомнить текущую координату Y чтобы на следующей итерации сравнить её с текущей
           // величиной следующей итерации.
           // Если разница будет отличаться от -1, то пришел новый ответ отличный по тестам
           hightOld = SettingForProgram.buttonCheckY;
           
       } else if (selectBoobleUp) {
           selectBoobleUp.remove();
           divCreate.innerText = '';
           propertySrartXInitialise = false;
           bonusBox = false;
           randomOk = false;
           createBoxForInfoBonus();
           removeBonusDiamant();
       }
   }, 12);
}