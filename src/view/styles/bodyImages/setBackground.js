// функция помещает случайный фон на страницу


export function setBackground()
{
    const path = 'css/images/';

    // Случайное число от 1 до 24
    const numberImg = Math.floor(Math.random() * 24) + 1;
    const tegBody = document.querySelector('body');
    tegBody.style.height = "100%";
    tegBody.style.margin = "0";
    tegBody.style.backgroundSize = "cover";
    tegBody.style.backgroundRepeat = "no-repeat";
    tegBody.style.backgroundPosition = "center";
    tegBody.style.backgroundImage = `url('${path}background${numberImg}.jpg')`;

    // const foColor = document.querySelector('.nav-item');
    // foColor.style.color = 'white';
};

