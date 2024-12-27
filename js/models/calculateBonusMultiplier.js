// функция должна подсчитать коэффициент коррекции стоимости балла
// за правильный ответ.

function calculateBonusMultiplier(propertyForBonus)
{
    // объект для логов
    const log = {};
    log.propertyForBonus_input = propertyForBonus;
    // На случай если произошел ошибочный ответ, то вернуть 1
    // Штрафы оставляю на будущее
    if (propertyForBonus.str === "Error") return 1;

    // вычислить нахождение числа ошибок
    let errorName = propertyForBonus.levexW.replace('Ok', "Error");
    log.errorName = errorName;
    
    // Узнать число правильных и не правильных ответов
    let ok = parseFloat(localStorage.getItem(propertyForBonus.levexW));
    if (isNaN(ok)) ok = 0;
    log.ok = ok;
    
    let error = parseFloat(localStorage.getItem(errorName));
    if (isNaN(error)) error = 0;
    log.error = error;

    // Узнать число существующих тестов
    const levelDataModel = FactoryRegistr.getObject("LevelDataModel");
    const numberTest = levelDataModel.getArrayNameButton().length;
    log.numberTest = numberTest;

    // Уровень текущего теста
    const levelTest = propertyForBonus.level;
    log.levelTest = levelTest;

    // для третьего бонуса
    // Массив с пунктами меню, нужен просто для обхода всех сохраненных 
    // данных касательно пройденных тестов. 
    const arrayNumberTest = levelDataModel.getArrayNameButton();
    log.arrayNumberTest = arrayNumberTest;

    // Стартовое значение коэффициента
    let ticLocal=1;

    // Первый бонус должен зависеть от числа непогашенных ошибок
    // если такие ошибки есть, то коэффициент считается по формуле снизу
    let bonusOne;
    if (ok !==0)
        bonusOne = ok / (error + ok);
    else 
        bonusOne = 1;
    log.bonusOne = bonusOne;
    // Второй бонус, попытка настройть раздачу балов в зависимости
    // от сложности. Сложным считается последний тест.
    const bonusTwo = levelTest / numberTest * 2;
    log.bonusTwo = bonusTwo;

    //log.maxOkLocal = {};
    // Третий бонус - самые малопройденные тесты дают больше баллов
    let maxOk = 0, maxError = 0;
    arrayNumberTest.forEach((element, index) => {
        let nameKey = 'level'+index+'_Ok';
        
        let maxOkLocal = parseFloat(localStorage.getItem(nameKey));
        if (isNaN(maxOkLocal)) maxOkLocal = 0;
        if (maxOkLocal > maxOk) maxOk = maxOkLocal;
        nameKey = 'level'+index+'_Error';
        let maxErrorLocal = parseFloat(localStorage.getItem(nameKey));
        if (isNaN(maxErrorLocal)) maxErrorLocal = 0;
        if (maxErrorLocal > maxError) maxError = maxErrorLocal;
    });
    if (maxError === maxOk) maxError+=1;
    log.maxError = maxError;
    log.maxOk = maxOk;

    const bonusThree = (1 - (ok + error)/(maxOk+maxError)) * 3;
    log.bonusThree = bonusThree;

    if (propertyForBonus.log) {
        console.log('---calculateBonusMultiplier---');
        console.log(log);
        console.log('***************************');
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
