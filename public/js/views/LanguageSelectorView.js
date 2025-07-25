// Класс ставит кнопки выбора языка

class LanguageSelectorView
{
    init(lang)
    {
        const en = lang=='en' ? 'selected' : '';
        const pl = lang=='pl' ? 'selected' : '';
        const ua = lang=='ua' ? 'selected' : '';
        const ru = lang=='ru' ? 'selected' : '';

        let ret =   `<select id="languageSelect">`;
        ret+=         `<option ${en} id="selectEn"  value="en">EN</option>`;
        ret+=         `<option ${pl} id="selectPl"  value="pl">PL</option>`;
        ret+=         `<option ${ua} id="selectUa"  value="ua">UA</option>`;
        ret+=         `<option ${ru} id="selectRu"  value="ru">RU</option>`;
        ret+=       `</select>`;
        return ret;
    }
}
