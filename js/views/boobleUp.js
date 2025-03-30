function boobleUp()
{
    //
   // постоянная часть для всплывающего шарика
   let divCreate = document.createElement("div");
   divCreate.innerText = '💎';
   let divCreateForBonusBox = document.createElement("div");
   //divCreateForBonusBox.innerText = "🎁";

   let putEl = false;
   let arrayTic = (min=1, max=3) => {
       return Math.floor(Math.random() * max) - min ;
   }
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
               // Разрешить попытку выбить ящик
               //bonusBox = false;
           }
           // Здесь задается смещение вправо-влево
           if (lag < 0) {
               numberRand = arrayTic();
               lag = 16;
               // если приближаемся к правой стороне то скорректировать тренд в левую
               if (window.innerWidth - SettingForProgram.buttonCheckX < 100) {
                   numberRand = -1;
               }
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
               let randomInt = arrayTic(1,10);
               if (randomInt == 5) randomOk = true;
               //console.log(randomInt);
               //randomOk = true; // если раскомментировать, то ящик падает всегда
               if (randomOk) {
                   preBon = '<span onclick="scarbClick(2)" class="scarb">🎁</span>';
                   divCreateForBonusBox.innerHTML = preBon;
                   document.body.appendChild(divCreateForBonusBox);
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
           const signal = document.getElementById('fieldset-legend');
           signal.style.backgroundColor = '#a4f1b9';
       }
   }, 10);
}

function scarbClick(xx=1)
{
    const selectScarb = document.querySelector('.scarb');
    const x = selectScarb.getBoundingClientRect().left + window.scrollX;
    const y = selectScarb.getBoundingClientRect().top + window.scrollY;
    
    selectScarb.remove();

    const bonusForScarb = document.createElement("div");
    document.body.appendChild(bonusForScarb);
    bonusForScarb.classList.add("bonus-for-scarb");
    bonusForScarb.innerHTML = `<span class="text-about-scarb">${SettingForProgram.diamant*xx}</span>`;
    
    bonusForScarb.style.left = x+'px';
    bonusForScarb.style.top = y+'px';

    setTimeout(()=>{
        document.querySelector('.text-about-scarb').remove();
        DataOk.addOk(SettingForProgram.diamant*xx);

    }, 2500);

    //bonusForScarb.
    //console.log(bonusForScarb.style.left);
}
