
import LanguageSelectorView from '../../js/views/LanguageSelectorView.js';

test ("Проверка установки меню выбора языка", () => {
    const languageSelector = new LanguageSelectorView();
    const returnStr = languageSelector.init('pl');

    expect(returnStr).toContain('option selected id="selectPl"');
}
);

