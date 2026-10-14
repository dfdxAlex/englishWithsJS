


export class BoobleUpView {

    constructor({languageController, settingForProgram}) {
        this.languageController = languageController;
        this.SettingForProgram = settingForProgram;
    }


    // возвращает html для выбитого кристалла
    getCrystalScore(diamant)
    {
        if (Number(diamant) === -1 || Number(diamant) === 0) {
            return '';
        }

        return `<span class="score">${diamant}</span>`;
    }

    // Запускается при ответе на тест
    // удаляет картинку бонусного ящика, если она есть
    // возвращает одну из картинок в зависимости от результата ответа
    getImageBooble(diamantInput)
    {
        const diamant = Number(diamantInput);
    
        if (diamant === -1) {
            return '<span class="diamond">💀</span>';
        }
        
        if (diamant === 0) {
            return '<span class="diamond">🎓</span>';
        }

        return '<span class="diamond">💎</span>';
    }

    setBoobleUp(diamant, divCreate) {
        // постоянные настройки пузырька
        divCreate.innerHTML = this.getImageBooble(diamant) + this.getCrystalScore(diamant);
        divCreate.style.position = "absolute"; // Позволяет двигать элемент по координатам
        divCreate.id = 'boobleUp';
        document.body.appendChild(divCreate);
    }

    createCristal(x,y) {

        // ссылка на поле divCreate специально не описывается, может создаваться в любом классе
        // используется контекст чтобы не создавалось много запросов в дом
        if (this.divCreate === undefined) {
            this.divCreate = document.createElement("div");
            this.divCreate.innerText = '💎';
        } 
        this.divCreate.style.left = x + "px"; // Начальная позиция
        this.divCreate.style.top = y + "px";

        return this.divCreate;
    }

    getBoobleUpContainer(selectBoobleUp, diamant, x,y) {
        let boobleUp = selectBoobleUp;
        if (!boobleUp)
            boobleUp = document.getElementById('boobleUp');

        //создать контейнер с кристалом
        this.setBoobleUp(diamant, this.createCristal(x,y));

        return boobleUp;
    }

    removeBoobleUpContainer(state) {
        state.selectBoobleUp?.remove();
        state.selectBoobleUp = undefined;
        // при удалении кристалов щбнулить и таймер длительности анимации
        state.startTime = 0;
    }

}