import { SettingForProgram } from '../models/SettingForProgram.js';
import { scarbClick } from './boobleUp/scarbClick.js';
import { infoForPresentBox } from './boobleUp/infoForPresentBox.js';
import { removeBonusDiamant } from './boobleUp/removeBonusDiamant.js';
import { getRandom } from '../services/getRandom.js';
import { getNumberRand } from './boobleUp/getNumberRand.js';

export function boobleUp()
{
   // постоянная часть для всплывающего шарика
   let divCreate = document.createElement("div");
   divCreate.innerText = '💎';
   let divCreateForBonusBox = document.createElement("div");

   let putEl = false;


//    let arrayTic = (min=1, max=3) => {
//        return Math.floor(Math.random() * max) - min ;
//    }


   let lag = 6;
   let numberRand = 0;
   let propertyTest;
   let propertySrartXInitialise = false;
   let bonusBox = 0;
   let preBon = '';
   let randomOk = false;

   setInterval(() => {
       // Если координата Y всё ещё ниже потолка то работаем
       if (SettingForProgram.buttonCheckY > 50) {
           // Если ещё не запоминали стартовую координату Y, то запомнить
           if (!propertySrartXInitialise) {
               SettingForProgram.buttonCheckYStart = SettingForProgram.buttonCheckY;
               // признак того что уже запомнили стартовое значение
               propertySrartXInitialise = true;
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

           if (!putEl || propertyTest < SettingForProgram.buttonCheckY) {
               let pre = '<span class="diamond">💎</span>';
               let diamant = `<span class="score">${SettingForProgram.diamant}</span>`;
               if (SettingForProgram.diamant === '-1') {
                   pre = '<span class="diamond">💀</span>';
                   diamant = '';
               }
               if (SettingForProgram.diamant === '0') {
                   pre = '<span class="diamond">🎓</span>';
                   diamant = '';
               }

               // постоянные настройки пузырька
               divCreate.innerHTML = pre+diamant;
               divCreate.style.position = "absolute"; // Позволяет двигать элемент по координатам
               document.body.appendChild(divCreate);
               putEl = true;
           }

           // сундук с сокровищами
           if (SettingForProgram.buttonCheckYStart - SettingForProgram.buttonCheckY > 50 && !bonusBox) {
               bonusBox = true;
               let randomInt = getRandom(0,9);
               if (randomInt == 5) randomOk = true;
               //randomOk = true; // если раскомментировать, то ящик падает всегда
               if (randomOk) {
                   preBon = '<span class="scarb" id="scarb">🎁</span>';
                   divCreateForBonusBox.innerHTML = preBon;
                   document.body.appendChild(divCreateForBonusBox);

                   SettingForProgram.randomOk = true;

                   const dinamicMenuForDiamant = document.getElementById('dinamic-menu');

                   const box = document.createElement('div');
                   box.textContent = '💎×2'; // можно сразу вставить символ кристалла и удвоение
                   box.style.fontWeight = 'bold';
                   box.style.color = 'gold';
                   box.id = 'bonus-diamant';
                   dinamicMenuForDiamant.appendChild(box);
                   

                   const id = setInterval(() => {
                        const scarb = document.getElementById("scarb");
                        scarb.addEventListener('click',() => {
                              scarbClick(2)
                        });
                        if (scarb) {
                            clearInterval(id);
                        }
                   }, 0);

               }
           }

           if (bonusBox && randomOk) {
            divCreateForBonusBox.style.position = "absolute";
            SettingForProgram.buttonCheckX+=numberRand;
            divCreateForBonusBox.style.left = SettingForProgram.buttonCheckX + "px"; // Начальная позиция
            divCreateForBonusBox.style.top = SettingForProgram.buttonCheckYStart - SettingForProgram.buttonCheckY + "px";
           }
           // Скорость всплытия
           SettingForProgram.buttonCheckY-=1;

           // Переменняя propertyTest нужна для контроля факта
           // необходимости нового пузыря до окончания всплытия старого
           // Выше в коде проверяется, если фактический Y стал снова больше
           // то прекращаем старое всплытие и начинаем новое.
           propertyTest = SettingForProgram.buttonCheckY;
       } else if (putEl) {
           divCreate.innerText = '';
           putEl = false;
           propertySrartXInitialise = false;
           bonusBox = false;
           randomOk = false;
           const signal = document.getElementById('dinamic-menu');
           if (signal) {
            const box = document.createElement('div');
            box.id = 'box-for-info-bonus';
            box.textContent = '🎁';
            box.addEventListener('click', infoForPresentBox);
            signal.appendChild(box);
           }
           SettingForProgram.randomOk = false;
           removeBonusDiamant();
       }
   }, 10);
}






