// Класс ставит кнопки выбора языка

import './LanguageSelectorView.scss';

export class LanguageSelectorView
{
    init(lang)
    {
        const en = lang=='en' ? 'selected' : '';
        const pl = lang=='pl' ? 'selected' : '';
        const ua = lang=='ua' ? 'selected' : '';
        const ru = lang=='ru' ? 'selected' : '';

        let ret =   `<select id="languageSelect">`;
        ret+=         `<option ${en} id="selectEn"  class = "selectLang" value="en">EN</option>`;
        ret+=         `<option ${pl} id="selectPl"  class = "selectLang" value="pl">PL</option>`;
        ret+=         `<option ${ua} id="selectUa"  class = "selectLang" value="ua">UA</option>`;
        ret+=         `<option ${ru} id="selectRu"  class = "selectLang" value="ru">RU</option>`;
        ret+=       `</select>`;
        return ret;
    }
}
