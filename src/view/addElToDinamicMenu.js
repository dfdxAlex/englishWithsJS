
export function addElToDinamicMenu(str, className, idName)
{
    setTimeout(() => {
          if (document.getElementById(idName)) return;

          const signal = document.getElementById('dinamic-menu');
          if (signal) {
           const box = document.createElement('span');
           box.id = idName;
           box.textContent = str;
           box.className = className;
           signal.appendChild(box);
          } 
    }, 0);
}