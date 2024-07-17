import { renderUserPage, renderProductPage } from './router.js';

export function initializeApp() {
    const appElement = document.getElementById('app');
    
    // Простая маршрутизация на основе хешей URL
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.substring(1);
        if (hash === 'users') {
            renderUserPage(appElement);
        } else if (hash === 'products') {
            renderProductPage(appElement);
        } else {
            appElement.innerHTML = '<h1>Home Page</h1>';
        }
    });

    // Начальная загрузка
    if (window.location.hash) {
        window.dispatchEvent(new HashChangeEvent('hashchange'));
    } else {
        appElement.innerHTML = '<h1>Home Page</h1>';
    }
}
