// Класс запускает функцию появления кнопок и обрабатывает их
// нажатие, записывает выбор пользователя в локал сторадж

class LanguageController
{
    init() 
    {
        // Поставить кнопки выбора языка
        // --создать объект меню выбора языка
        const langSelector = new LanguageSelectorView();
        // --выбрать место на странице, куда поместить меню
        const rez = document.getElementById("button_lang_selected");
        // --поместить меню, в метод передается значение 
        // --по умолчанию положения меню выбора языка
        rez.innerHTML = langSelector.init('en');

        // Добавление события изменения выбора языка
        // выбрать меню по id
        const langEn = document.getElementById("languageSelect");
        // Добавить событие изменения выбора
        langEn.addEventListener('change', (event) => {

            const selectedValue = event.target.value;

            switch(selectedValue) {
                case 'en':
                    console.log('Выбран английский');
                    break;
                case 'pl':
                    console.log('Выбран польский');
                    break;
                case 'ua':
                    console.log('Выбран украинский');
                    break;
                case 'ru':
                    console.log('Выбран русский');
                    break;
            }
        });
    }
}
