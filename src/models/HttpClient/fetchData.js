import { LanguageController } from '../../controllers/LanguageController.js';

export function fetchData()
{
    if (this._isLoading) return;
    // console.log('проскочили');
    this._isLoading = true;

    const xhr = new XMLHttpRequest();
    xhr.timeout = 160000; 
    // xhr.timeout = 6000; 
    xhr.open('POST', this.link, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = () => {
        this._isLoading = false;
        let response = xhr.responseText;
        // console.log(response);
        let responseObj = null;
        try {
            responseObj = JSON.parse(response);
        } catch (e) {
            responseObj = null; // просто строка, возможно URL
        }

        this._response = responseObj || response;

        if (responseObj && responseObj.zapros !== undefined) {
            const translate = new LanguageController();
            if (!responseObj.zapros) {
                const el = document.getElementById('search_error');
                if(el) el.textContent = translate.translate('Ошибка зафиксирована');
            } else {
                const el = document.getElementById('search_error');
                if(el) el.textContent = translate.translate('Упс. Кто-то уже сообщил об этой ошибке.');
            }
        }
    };

    xhr.onerror = () => {
        this._isLoading = false;
        console.error('Ошибка сети.');
    };

    xhr.ontimeout = () => {
      console.error('Таймаут запроса');
    };

    xhr.send(this.request);
};

