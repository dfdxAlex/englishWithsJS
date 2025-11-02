// функция помещает случайный фон на страницу
import { DataSet } from '../../../services/data/DataSet.js';
import { setColorMenu } from './setColorMenu.js';

export function setBackground()
{
    const path = 'css/images/';

    // Случайное число от 1 до 24
    const numberImg = Math.floor(Math.random() * 48) + 1;
    const tegBody = document.querySelector('body');
    tegBody.style.height = "100%";
    tegBody.style.margin = "0";
    tegBody.style.backgroundSize = "cover";
    tegBody.style.backgroundRepeat = "no-repeat";
    tegBody.style.backgroundPosition = "center";
    tegBody.style.backgroundImage = `url('${path}background${numberImg}.jpg')`;

    // Запомнить номер последнего выбранного фона
    DataSet.numberBackground = numberImg;

    setColorMenu();

    // Прикомандирована функция для закрытия пунктов гамбургер меню.
    closeNavbar();

};

function closeNavbar() {
  const navbarCollapse = document.getElementById('navbarNav');
  const toggler = document.querySelector('.navbar-toggler');

  if (navbarCollapse.classList.contains('show')) {
    navbarCollapse.classList.remove('show');
    toggler.classList.add('collapsed');
    toggler.setAttribute('aria-expanded', 'false');
  }
}
