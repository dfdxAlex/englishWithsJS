
// Функция добавляет ассинхронно обработчик события когда появится элемент
// Функция добавляет обработчик события, когда элемент появится в DOM
export function setEventAsync(callback, eventName, id) {
    const intervalId = setInterval(() => {
        const element = document.getElementById(id);

        if (element) {
            element.addEventListener(eventName, callback, { once: true });
            clearInterval(intervalId);
        }
    }, 200);
}
