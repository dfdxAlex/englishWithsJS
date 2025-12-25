// функция помещает случайный фон на страницу
import { DataSet } from '../../../services/data/DataSet.js';
import { setColorMenu } from './setColorMenu.js';
import { closeNavbar } from './setBackground/closeNavbar.js';
import { scrollingBackground } from './setBackground/scrollingBackground.js';

 // Асинхронно устанавливает случайный фоновый рисунок для страницы.
 // Ждёт полной загрузки изображения, чтобы избежать моргания или пустого фона.
export async function setBackground() {

  // Сформировать полный путь к изображению
  const numberImg = Math.floor(Math.random() * 48) + 1;
  const imageUrl = `css/images/background${numberImg}.jpg`;
  console.log(imageUrl);

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
tegBody.style.backgroundSize = "cover";
tegBody.style.backgroundRepeat = "no-repeat";
tegBody.style.backgroundPosition = "center center";

    scrollingBackground();

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


