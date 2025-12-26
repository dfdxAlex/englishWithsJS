// // Функция показывает/скрывает блок по клику
// // Функция на 18.11.2025 запускается при событии load, - загрузка страницы


// export function hundleBlockMenu() {
//     // Найти первый элемент с классом .nav-item
//     const el = document.querySelector('.nav-item'); // контейнер

//     // Если удалось найти el, то поискать внутри него dropdown-content
//     const elM = el?.querySelector('.dropdown-content'); // содержимое

//     if (el && elM) {
//         el.addEventListener('click', (event) => {
//             event.stopPropagation(); // останавливаем всплытие клика с контейнера вверх

//             if (elM.style.display === 'none' || elM.style.display === '') {
//                 elM.style.display = 'block';
//             } else {
//                 elM.style.display = 'none';
//             }
//         });

//         // клики по содержимому меню не должны влиять
//         elM.addEventListener('click', (event) => {
//             event.stopPropagation();
//         });

//         // при клике вне контейнера — скрыть меню
//         document.addEventListener('click', () => {
//             elM.style.display = 'none';
//         });

//         return true;
//     }
// }
