import { LanguageController } from './../controllers/LanguageController.js';

export const Help = {
    translate: new LanguageController(),
    
    // Метод принимает функцию, которая возвращает текстовую инфу для помощи
    // и в результат этой функции вставляет видеоролик, код которого приходит
    // вторым параметром. 
    // Функция с русским вариантом помощи на момент создания объекта этого
    // создается в папке help, там же и остальные три функции для нормальной
    // работы системы переводов.
    // Чтобы всё работало в этой функции должен быть вставлен <div id='video-help'></div>
    // в место, где должен появиться ролик.
    viewhandleHelpToTranslate: function(funcForTranslateRu, codeVideoForYoutoobe) {
        // создать контейнер div
        const container = document.createElement('div');
        container.id = 'container-for-video-help';
        // получить текстовое описание помощи для сопровождения видео
        let helpStr = this.translate.translate(funcForTranslateRu);
        // вставить в тег видео ссылку
        helpStr = helpStr.replace(/<div id='video-help'><\/div>/,this.addVideoHelp(codeVideoForYoutoobe));
        // поместить конечный вариант разметки в контейнер
        container.innerHTML = helpStr;
        // поместить разметку с контейнеров на главную страницу
        document.body.appendChild(container);
        // найти кнопку для закрытия окна
        const buttonClose = document.getElementById('button-close-info-modal');
        // После вставки найти кнопку и накинуть события для скрытия окна
        buttonClose.addEventListener('click', () => { 
            document.getElementById('container-for-video-help').remove();
        });
    },
    // Метод принимает код видеоролика и возвращает ссылку с ним.
    addVideoHelp(code) 
    {
        return `
        <div class="embed-responsive embed-responsive-16by9">
          <iframe showinfo=1 class="embed-responsive-item" src="https://www.youtube.com/embed/${code}" allowfullscreen></iframe>
        </div>
        `;
    }
}
