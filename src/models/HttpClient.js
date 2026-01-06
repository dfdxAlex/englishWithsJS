
import { defineFetchData } from './HttpClient/defineFetchData.js';
import { defineIsLoading } from './HttpClient/defineIsLoading.js';
import { fetchData } from './HttpClient/fetchData.js';

function HttpClient(link = '') {
    this.link = link;
    this._response = null;
    this._isLoading = false;
    this.request = '';

    // Добавить свойство с гетером и сеттером fetchData
    defineFetchData(this);

    // Добавить свойство с гетером и сеттером isLoading
    defineIsLoading(this);
}

// Добавить функцию _fetchData() в прототип
HttpClient.prototype._fetchData = fetchData;

// Объект для использования
export const httpAsk = new HttpClient('https://amatordd.webd.pro/amatorDed/DFDX/test.php');





