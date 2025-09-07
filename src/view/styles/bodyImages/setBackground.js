// import background1 from './background1.jpg';
// import background2 from './background2.jpg';
// import background3 from './background3.jpg';
// import background4 from './background4.jpg';
// import background5 from './background5.jpg';
// import background6 from './background6.jpg';
// import background7 from './background7.jpg';
// import background8 from './background8.jpg';
// import background9 from './background9.jpg';
// import background10 from './background10.jpg';
// import background11 from './background11.jpg';
// import background12 from './background12.jpg';
// import background13 from './background13.jpg';
// import background14 from './background14.jpg';
// import background15 from './background15.jpg';
// import background16 from './background16.jpg';
// import background17 from './background17.jpg';
// import background18 from './background18.jpg';
// import background19 from './background19.jpg';
// import background20 from './background20.jpg';
// import background21 from './background21.jpg';
// import background22 from './background22.jpg';
// import background23 from './background23.jpg';
// import background24 from './background24.jpg';

export function setBackground()
{
    console.log('Выбрать случайный фон');
    const path = 'css/images/';

    // Случайное число от 1 до 24
    const numberImg = Math.floor(Math.random() * 24) + 1;;
    const tegBody = document.querySelector('body');
    tegBody.style.backgroundImage = `url('${path}background${numberImg}.jpg')`;
    tegBody.style.backgroundSize = "cover";   // растянуть по экрану
    tegBody.style.backgroundRepeat = "no-repeat"; // без повторов
}