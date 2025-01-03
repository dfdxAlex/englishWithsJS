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

    // Третий бонус - самые малопройденные тесты дают больше баллов
    // Плюс создать массив с цифрами, сколько есть данных по числу
    // пройденных тестов
    const testsOk = []; // набить массив цифрами
    const testsError = []; // набить массив цифрами
    arrayNumberTest.forEach((element, index) => {
        let nameKey = 'level'+index+'_Ok';
        let maxOkLocal = parseFloat(localStorage.getItem(nameKey));
        if (isNaN(maxOkLocal)) maxOkLocal = 0;
        testsOk.push(maxOkLocal);

        nameKey = 'level'+index+'_Error';
        let maxErrorLocal = parseFloat(localStorage.getItem(nameKey));
        if (isNaN(maxErrorLocal)) maxErrorLocal = 0;
        testsError.push(maxErrorLocal);
    });

    const maxOk = Math.max(...testsOk);
    let maxError = Math.max(...testsError);

    if (maxError === maxOk) maxError+=1;
    log.maxError = maxError;
    log.testsOk = testsOk;
    log.maxOk = maxOk;
    log.testsError = testsError;

    const bonusThree = (1 - (ok + error)/(maxOk+maxError)) * 3;
    log.bonusThree = bonusThree;

    log.calculateMedian = calculateMedian(testsOk);

    let diferent;
    if (ok == 0 && calculateMedian(testsOk) == 0) diferent = 1;
    if (ok > calculateMedian(testsOk)) diferent = calculateMedian(testsOk)+1 / ok;
    // else if (ok > calculateMedian(testsOk) && ok==0) diferent = 1;
    else if (ok < calculateMedian(testsOk)) diferent = ok+1 / calculateMedian(testsOk);
    // else if (ok < calculateMedian(testsOk) && calculateMedian(testsOk)==0) diferent = 1;


    let bonusFour = diferent * 3;
    log.bonusFour = bonusFour;


    ticLocal = bonusOne + bonusTwo + bonusThree + bonusFour;
    log.ticLocalFull = ticLocal;
    // Если работаем с тестом word-assembly то удвоить баллы
    if (localStorage.getItem('user_select') === 'word-assembly') {
        ticLocal*=2;
        if (ticLocal > 6) return 6;
    }

    //console.log(localStorage.user_select);
    if (ticLocal < 0.4) return 0.4;
    if (ticLocal > 3) return 3;
    log.ticLocalRezult = ticLocal;
    if (propertyForBonus.log) {
        console.log('---calculateBonusMultiplier---');
        console.log(log);
        console.log('***************************');
    }

    return ticLocal;
}



function calculateMedian(array) {
    const sorted = [...array].sort((a, b) => a - b); // Сортируем массив
    const mid = Math.floor(sorted.length / 2);       // Находим середину

    if (sorted.length % 2 === 0) {
        // Если чётное количество элементов, среднее двух центральных
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        // Если нечётное, возвращаем центральный элемент
        return sorted[mid];
    }
}
