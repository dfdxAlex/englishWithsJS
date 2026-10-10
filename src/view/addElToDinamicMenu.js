
export function addElToDinamicMenu(str, className, idName)
{
    setTimeout(() => {
        // блокировка множественной установки элемента, если он уже есть, то просто выходим
          if (document.getElementById(idName)) return;

          const signal = document.getElementById('dinamic-menu');
          if (signal) {
           const box = document.createElement('span');
           box.id = idName;
           box.innerHTML = str;
           box.className = className;
           signal.appendChild(box);
          } 
    }, 0);
}