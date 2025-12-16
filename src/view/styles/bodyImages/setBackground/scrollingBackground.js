export function scrollingBackground()
{
    // После загрузки накидывается класс SCSS для прокрутки фонового изображения вправо-влево
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.body.classList.add('addForBackground');
      }, 1000); // 1 секунд
    });
}