// Класс управляет работой правого меню

class MenuController
{
    init() 
    {
        // создать объект правого меню
        const menu = new MenuRight();
        // найти точку для публикации правого меню
        const point = document.getElementById('menu');
        // поместить меню на выбранное место.
        point.innerHTML = menu.menu();

        const unit1 = document.getElementById('level1');
        const unit2 = document.getElementById('level2');
        const unit3 = document.getElementById('level3');
        const unit4 = document.getElementById('level4');
        const unit5 = document.getElementById('level5');

        unit1.addEventListener('click', handleLevel1);
    }
}
