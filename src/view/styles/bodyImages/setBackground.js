// функция помещает случайный фон на страницу
import { DataSet } from '../../../services/data/DataSet.js';
import { setColorMenu } from './setColorMenu.js';
import { closeNavbar } from './setBackground/closeNavbar.js';

 // Асинхронно устанавливает случайный фоновый рисунок для страницы.
 // Ждёт полной загрузки изображения, чтобы избежать моргания или пустого фона.
export async function setBackground() {

  // Сформировать полный путь к изображению
  const numberImg = Math.floor(Math.random() * 48) + 1;
  const imageUrl = `css/images/background${numberImg}.jpg`;

  // Запомнить номер последнего выбранного фона, используется в других функциях
  DataSet.numberBackground = numberImg;

  // Получить ссылку на <body>
  const tegBody = document.body;

  // Добавить плавный переход между фонами
  tegBody.style.transition = "background-image 1s ease-in-out";

  // Предварительно загрузить картинку через объект Image
  // и ждать, пока она полностью загрузится. Картинка не используется на прямую
  // а вытягивается из кеша по ссылке из объекта Image. Это реализовано в браузере
  await new Promise((resolve, reject) => {
    const img = new Image(); // создать виртуальный <img>
    img.src = imageUrl;      // указать источник
    img.onload = resolve;    // при успешной загрузке -> завершить промис
    img.onerror = reject;    // при ошибке загрузки -> отклонить промис
  });

  // Когда загрузка завершена — применить фон к body
  tegBody.style.backgroundImage = `url('${imageUrl}')`;
  tegBody.style.backgroundSize = "contain";
  tegBody.style.backgroundRepeat = "no-repeat";
  tegBody.style.backgroundPosition = "center";
  
// устанавливаем фон
// tegBody.style.backgroundImage = `url('${imageUrl}')`;
// tegBody.style.backgroundSize = "auto 100vh"; // по высоте: 100vh, по ширине — сколько нужно
// tegBody.style.backgroundRepeat = "no-repeat";
// tegBody.style.backgroundPosition = "center";

// // слушаем движение мыши для смещения
// document.addEventListener("mousemove", (e) => {
//     const percent = e.clientX / window.innerWidth; // от 0 до 1
//     tegBody.style.backgroundPosition = `${percent * 100}% center`;
// });

// tegBody.style.backgroundImage = `url('${imageUrl}')`;
// tegBody.style.backgroundSize = "auto 100vh"; 
// tegBody.style.backgroundRepeat = "no-repeat";
// tegBody.style.backgroundPosition = "0% center";

// let pos = 0;          // начальная позиция
// let direction = 0.1;    // 1 — вправо, -1 — влево

// // авто-анимация
// setInterval(() => {
//     pos += direction * 1; // скорость (0.1 = медленно, можно увеличить)

//     if (pos >= 100) direction = -1; // дошли до правого края — обратно
//     if (pos <= 0) direction = 1;    // дошли до левого края — вперед

//     tegBody.style.backgroundPosition = `${pos}% center`;
// }, 20);

    setColorMenu();

    // Прикомандирована функция для закрытия пунктов гамбургер меню.
    closeNavbar();

};

// Описание функции (документационное свойство)
setBackground.help = `
Функция setRandomBackground(path):
  • Выбирает случайную картинку из 48 возможных;
  • Асинхронно загружает её в память (предзагрузка через Image);
  • После загрузки плавно меняет фон <body>;
  • Используется для динамичного оформления без визуальных задержек.
`;


