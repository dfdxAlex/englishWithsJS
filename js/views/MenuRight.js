// класс показывает правое меню
// данный класс насследуется другими классами, поэтому проверяются категории 1 и 2, хотя
// в самом конструкторе фигурирует категория 1 this.numberMenu = 1;

class MenuRight
{
    constructor(nameButtons)
    {
        // Массив со всеми пунктами меню
        this.nameButtons = nameButtons;

        this.nameMenu = FactoryRegistr.getObject("LanguageController").translate('Выбрать тест.');
        // Это свойство содержит место, куда нужно припарковать 
        // меню. Вводится id того елемента, который примет меню.
        // используется как внутрри класса, так и за его пределами.
        this.seedMenu = 'burger';
        this.numberMenu = 1;

        // menu-specific parity counters
        // Переменные используются для счётчика чётности пунктов меню
        this.countItemOne=0;
        this.countItemTwo=0;
        // Свойство хранит номер категории, в которой должен быть конкретный пункт
        this.numberMenuLocal=0;
    }
    
    menuDropdown2()
    {
        let rez = `<div 
                    id="container-menu-up"
                    class="btn-group" 
                    role="group" 
                    aria-label="Button group with nested dropdown"
                   >`;
        rez+='<div class="btn-group" role="group">';
        
        // Here the main menu buttons are formed, Select test, Edit words...
        rez+=`<button 
                class="btn btn-light" 
                id="btnGroupDrop1" 
                type="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >`;

        rez+=this.nameMenu;
        rez+='</button>';

        rez+='<ul class="dropdown-menu" aria-labelledby="btnGroupDrop1" id = "itemSelectTest">';
        

        // перебрать массив с названиями пунктов для меню
        rez += this.nameButtons.map((element, index) => {
            // The method returns the location of a specific item. LevelDataModel.mapNameMenu()
            this.numberMenuLocal = LevelDataModel.mapNameMenu(index);
            if (this.numberMenuLocal !== this.numberMenu) {
                return;
            }

            return `<li><a class="dropdown-item ${this.addClass()}" id="level${index+1}">${element}</a></li>`;
        }).join(''); 

        rez+='</ul>';
        rez+='</div></div>';
        // returnPrimaryItemForUpMenu();
        return rez;
    }

    // Функция проанализирует какой категории принадлежит элемент меню. Это тесты или Учить слова
    // После этого функция вернет один из двух возможных классов, в зависимости от чётной или 
    // нечетной позиции конкретной кнопки
    addClass()
    {
        // Здесь будет храниться имя класса для конкретной кнопки
        let addClass = "";

        // Если рисуем меню с выбором тестов, назначение пункта меню = 1
        // Это необходимо потому, что меню главное формируется подряд, но не по очереди в каждом
        // подпункте. Поэтому просто менять класс через один не получается, нужно определить
        // сначала в какой категории будет пункт и потом его разукрашивать как чётный или нет 
        if (this.numberMenuLocal === 1) {
            this.countItemOne++;
            if (this.countItemOne % 2 == 1) 
            {
                addClass = "style-for-item-one";
            } else {
                addClass = "style-for-item-two";
            }
        }
        // Если рисуем меню с выбором учить слова, назначение пункта меню = 2
        // Это необходимо потому, что меню главное формируется подряд, но не по очереди в каждом
        // подпункте. Поэтому просто менять класс через один не получается, нужно определить
        // сначала в какой категории будет пункт и потом его разукрашивать как чётный или нет 
        if (this.numberMenuLocal === 2) {
            this.countItemTwo++;
            if (this.countItemTwo % 2 == 1) 
            {
                addClass = "style-for-item-one";
            } else {
                addClass = "style-for-item-two";
            }
        }   
        
        return " style-for-item-start " + addClass;
    }

    getSeedForMenu()
    {
        return document.getElementById(this.seedMenu);
    }
}

   // Функция должна спрятать лишнее при открытии меню выбора теста.
   function dellPrimaryItemForUpMenu()
    {
        let generalItem = document.getElementById('btnGroupDrop1');
        generalItem.addEventListener('click', ()=>{generalItem.style.display = 'none'; });
    }

   // Накидывает событие возврата категории меню при выборе любого теста. Событие на 
   // контейнере, который содержит в себе все тесты и срабатывает эффект всплытия.
   function returnPrimaryItemForUpMenu()
    {
        let generalItem = document.getElementById('itemSelectTest');
        generalItem.addEventListener('click', ()=>{
            let generalItemP = document.getElementById('btnGroupDrop1');
            generalItemP.style.display = 'block'; 
        });
    }