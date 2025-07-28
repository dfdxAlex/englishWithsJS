import { viewLogOff } from './forActivatingLogs/viewLogOff.js';
import { viewLogOn } from './forActivatingLogs/viewLogOn.js';

// функция переключает блоки между работой и показом логов
export function activatingLogs(regim = false, ev = null)
{
    // Так как используется еффект всплытия для события возврата из логов
    // то контроллируется объект события
    // Если нажатие произошло по кривой стрелке возврата из логов,
    // то в функцию будет передан объект события с параметром 
    // класса class="button_return_log"
    // Если нажатие произошло по аккордиону, то класс будет другим и 
    // поэтому выходим из функции.
    if (ev !== null) {
        if (ev.target.className !== "button_return_log") {
            return null;
        }
    }

       // создать простой промис
       // Задача промиса просто закончиться в пользу появления или скрытия логов
       const workingForLogPromise = new Promise((logSee, logDontSee)=>{
         if (regim) logSee();
         else logDontSee();
       });
       workingForLogPromise.then(()=>{
            viewLogOff();
        },
        ()=>{
            viewLogOn();
        });
}





