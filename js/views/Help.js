let Help = {
    translate: FactoryRegistr.getObject("LanguageController"),
    viewhandleHelpToTranslate: function() {
        const container = document.createElement('div');
        let helpStr = this.translate.translate(helpForGreenPoleOneRU());
        helpStr = helpStr.replace(/<div id='video-help'><\/div>/,this.addVideoHelp('VuUKoWdyu6Y'));
        container.innerHTML = helpStr;
        document.body.appendChild(container);
    },
    addVideoHelp(code) 
    {
        return `
        <div class="embed-responsive embed-responsive-16by9">
          <iframe showinfo=1 class="embed-responsive-item" src="https://www.youtube.com/embed/${code}" allowfullscreen></iframe>
        </div>
        `;
    }
}
