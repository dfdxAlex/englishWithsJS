

export function setBackground()
{
    console.log('Выбрать случайный фон');
    const path = 'src/view/styles/bodyImages/';

    // Случайное число от 1 до 24
    const numberImg = Math.floor(Math.random() * 24) + 1;;
    const tegBody = document.querySelector('body');
    tegBody.style.backgroundImage = `url('${path}background${numberImg}.jpg')`;
    tegBody.style.backgroundSize = "cover";   // растянуть по экрану
    tegBody.style.backgroundRepeat = "no-repeat"; // без повторов
}