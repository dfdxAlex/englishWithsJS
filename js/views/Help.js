let Help = {
    translate: FactoryRegistr.getObject("LanguageController"),
    viewhandleHelpToTranslate: function() {
        const container = document.createElement('div');
        container.innerHTML = this.translate.translate(helpForGreenPoleOneRU());
        document.body.appendChild(container);
    },
}
