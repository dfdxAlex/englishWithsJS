import { sellect } from './sellect';

export function viewLogOff()
{
      let props = sellect();
          props[0].style.display = 'none';     // спрятать кнопку Сообщить ошибку
          props[1].style.display = 'none';     // спрятать кнопку Логов
          props[2].style.display = 'none';     // спрятать рабочее поле с тестами
          props[3].style.display = 'block';
}