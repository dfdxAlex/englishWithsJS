// функция должна подсчитать коэффициент коррекции стоимости балла
// за правильный ответ.

function calculateBonusMultiplier(propertyForBonus)
{
    // На случай если произошел ошибочный ответ, то вернуть 1
    // Штрафы оставляю на будущее
    if (propertyForBonus.str === "Error") return 1;

    // вычислить нахождение числа ошибок
    let errorName = propertyForBonus.levexW.replace('Ok', "Error");
    // Узнать число правильных и не правильных ответов
    const ok = parseInt(localStorage.getItem(propertyForBonus.levexW));
    const error = parseInt(localStorage.getItem(errorName));

    // Узнать число существующих тестов
    const levelDataModel = FactoryRegistr.getObject("LevelDataModel");
    const numberTest = levelDataModel.getArrayNameButton().length;
    // Уровень текущего теста
    const levelTest = propertyForBonus.level;

    // для третьего бонуса
    // Массив с пунктами меню, нужен просто для обхода всех сохраненных 
    // данных касательно пройденных тестов. 
    const arrayNumberTest = levelDataModel.getArrayNameButton();

    // Стартовое значение коэффициента
    let ticLocal=1;

    // Первый бонус должен зависеть от числа непогашенных ошибок
    // если такие ошибки есть, то коэффициент считается по формуле снизу
    let bonusOne;
    if (ok !==0)
        bonusOne = ok / (error + ok);
    else 
        bonusOne = 1;

    // Второй бонус, попытка настройть раздачу балов в зависимости
    // от сложности. Сложным считается последний тест.
    const bonusTwo = levelTest / numberTest * 2;

    // Третий бонус - самые малопройденные тесты дают больше баллов
    let maxOk = 0, maxError = 0;
    arrayNumberTest.forEach((element, index) => {
        let nameKey = 'level'+index+'_Ok';
        let maxOkLocal = +localStorage.getItem(nameKey);
        if (maxOkLocal > maxOk) maxOk = maxOkLocal;
        nameKey = 'level'+index+'_Error';
        let maxErrorLocal = +localStorage.getItem(nameKey);
        if (maxErrorLocal > maxError) maxError = maxErrorLocal;
    });
    const bonusThree = (1 - (ok + error)/(maxOk+maxError)) * 3;
    

    if (propertyForBonus.log) {
        console.log(bonusOne * bonusTwo * bonusThree);
    }

    ticLocal = bonusOne * bonusTwo * bonusThree;

    // Если работаем с тестом word-assembly то удвоить баллы
    if (localStorage.getItem('user_select') === 'word-assembly') {
        ticLocal*=2;
        if (ticLocal > 6) return 6;
    }
    //console.log(localStorage.user_select);
    if (ticLocal < 0.4) return 0.4;
    if (ticLocal > 3) return 3;
    return ticLocal;
}
