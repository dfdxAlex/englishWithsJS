let Help = {
    // translate: FactoryRegistr.getObject("LanguageController"),
    translate: window.LanguageController,
    
    // Метод принимает функцию, которая возвращает текстовую инфу для помощи
    // и в результат этой функции вставляет видеоролик, код которого приходит
    // вторым параметром. 
    // Функция с русским вариантом помощи на момент создания объекта этого
    // создается в папке help, там же и остальные три функции для нормальной
    // работы системы переводов.
    // Чтобы всё работало в этой функции должен быть вставлен <div id='video-help'></div>
    // в место, где должен появиться ролик.
    viewhandleHelpToTranslate: function(funcForTranslateRu, codeVideoForYoutoobe) {
        const container = document.createElement('div');
        let helpStr = this.translate.translate(funcForTranslateRu);
        helpStr = helpStr.replace(/<div id='video-help'><\/div>/,this.addVideoHelp(codeVideoForYoutoobe));
        container.innerHTML = helpStr;
        document.body.appendChild(container);
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
