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
    
    menuDropdown3()
    {
        let rez = `<div 
                    class="btn-group" 
                    role="group" 
                    aria-label="Button group with nested dropdown"
                   >`;
        rez+='<div class="btn-group" role="group">';
        
        // Here the main menu buttons are formed, Select test, Edit words...
        rez+=`<button 
                class="btn btn-light" 
                id="btnGroupDrop1${this.seedMenu}" 
                type="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >`;

        rez+=this.nameMenu;
        rez+='</button>';

        // 

        rez+=`<ul 
                class="dropdown-menu" 
                aria-labelledby="btnGroupDrop1${this.seedMenu}" 
              >`;
        
        rez+=menuItem();
        // // перебрать массив с названиями пунктов для меню
        // rez += this.nameButtons.map((element, index) => {
        //     // The method returns the location of a specific item. LevelDataModel.mapNameMenu()
        //     this.numberMenuLocal = LevelDataModel.mapNameMenu(index);
        //     if (this.numberMenuLocal !== this.numberMenu) {
        //         return;
        //     }

        //     return `<li><a class="dropdown-item ${this.addClass()}" id="level${index+1}">${element}</a></li>`;
        // }).join(''); 

        // rez+='</ul>';


        rez+='</div></div>';
        return rez;
    }

    // Этот метод возвращает список пунктов для меню выбора теста
    menuItem()
    {
        let rez = '';
        // перебрать массив с названиями пунктов для меню
        // перебирается весь список всех пунктов всех категорий
        rez += this.nameButtons.map((element, index) => {
            
            // получить номер-принадлежность конкретного пункта, в какой категории должен быть текущий пункт
            this.numberMenuLocal = LevelDataModel.mapNameMenu(index);
            
            //Если конкретный пункт не подходит к текущему меню то выйти.
            // this.numberMenu при наследовании этого класса изменяется, таким образом происходит
            // передача конкретного пункта меню в свою категорию.
            if (this.numberMenuLocal !== this.numberMenu) {
                return;
            }

            // если дошли до этого места то пункт меню подходит для текущей категории и оформляем его
            return `<li><a class="dropdown-item ${this.addClass()}" id="level${index+1}">${element}</a></li>`;
        }).join(''); 

        rez+='</ul>';
        return rez;
    }

    // Этот метод возвращает список пунктов для меню выбора теста
    menuItem2()
    {
        let rez = '<ul id="pullItem" class="ul-for-menu">';
        // перебрать массив с названиями пунктов для меню
        // перебирается весь список всех пунктов всех категорий
        rez += this.nameButtons.map((element, index) => {
            
            // получить номер-принадлежность конкретного пункта, в какой категории должен быть текущий пункт
            this.numberMenuLocal = LevelDataModel.mapNameMenu(index);
            
            //Если конкретный пункт не подходит к текущему меню то выйти.
            // this.numberMenu при наследовании этого класса изменяется, таким образом происходит
            // передача конкретного пункта меню в свою категорию.
            if (this.numberMenuLocal !== this.numberMenu) {
                return;
            }

            // если дошли до этого места то пункт меню подходит для текущей категории и оформляем его
            return `<li><a  data-bs-dismiss="modal" class="btn ${this.addClass()}" id="level${index+1}">${element}</a></li>`;
        }).join(''); 

        rez+='</ul>';
        return rez;
    }

    menuDropdown2()
    { 
        
        return `
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal${this.seedMenu}">
            ${this.nameMenu}
          </button>

          <!-- Modal -->
          <div class="modal fade" id="exampleModal${this.seedMenu}" tabindex="-1" aria-labelledby="exampleModalLabel${this.seedMenu}" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel${this.seedMenu}">${this.nameMenu}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ${this.menuItem2()}
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          `;
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