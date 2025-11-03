// функция помещает случайный фон на страницу
import { DataSet } from '../../../services/data/DataSet.js';
import { setColorMenu } from './setColorMenu.js';
import { closeNavbar } from './setBackground/closeNavbar.js';

   

    // Случайное число от 1 до 48
    // const numberImg = Math.floor(Math.random() * 48) + 1;
    // const tegBody = document.querySelector('body');
    // tegBody.style.height = "100%";
    // tegBody.style.margin = "0";
    // tegBody.style.backgroundSize = "cover";
    // tegBody.style.backgroundRepeat = "no-repeat";
    // tegBody.style.backgroundPosition = "center";
    // tegBody.style.backgroundImage = `url('${path}background${numberImg}.jpg')`;

    /**
 * Асинхронно устанавливает случайный фоновый рисунок для страницы.
 * Ждёт полной загрузки изображения, чтобы избежать моргания или пустого фона.
 */
export async function setBackground() {

  // Место со всеми картинками
  const path = 'css/images/';

  // Генерируем случайное число от 1 до 48 для выбора картинки
  const numberImg = Math.floor(Math.random() * 48) + 1;

  // Запомнить номер последнего выбранного фона, используется в других функциях
  DataSet.numberBackground = numberImg;

  // Формируем полный путь к изображению
  const imageUrl = `${path}background${numberImg}.jpg`;

  // Получаем ссылку на <body>, к которому будем применять фон
  const tegBody = document.body;

  // Добавляем плавный переход между фонами
  tegBody.style.transition = "background-image 1s ease-in-out";

  // Предварительно загружаем картинку через объект Image
  // и ждём, пока она полностью загрузится. Картинка не используется на прямую
  // а вытягивается типа из кеша по ссылке из объекта Image. Это реализовано в браузере
  await new Promise((resolve, reject) => {
    const img = new Image(); // создаём виртуальный <img>
    img.src = imageUrl;      // указываем источник
    img.onload = resolve;    // при успешной загрузке -> завершить промис
    img.onerror = reject;    // при ошибке загрузки -> отклонить промис
  });

  // Когда загрузка завершена — применяем фон к body
  tegBody.style.backgroundImage = `url('${imageUrl}')`;
  tegBody.style.backgroundSize = "cover";
  tegBody.style.backgroundRepeat = "no-repeat";
  tegBody.style.backgroundPosition = "center";

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
  Параметр:
    path — путь к папке, где хранятся изображения (например: "/img/").
`;


