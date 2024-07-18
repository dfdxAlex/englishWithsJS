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
        ret+=         `<option ${en} value="en">EN</option>`;
        ret+=         `<option ${pl} value="pl">PL</option>`;
        ret+=         `<option ${ua} value="ua">УК</option>`;
        ret+=         `<option ${ru} value="ru">РУ</option>`;
        ret+=       `</select>`;
        return ret;
    }
}
