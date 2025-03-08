// функция должна подсчитать коэффициент коррекции стоимости балла
// за правильный ответ.

function calculateBonusMultiplier(propertyForBonus)
{
    // Если была использована помощь, то обнулить балл
    if (localStorage.getItem('was_click_help') === 'true') 
        {
            localStorage.setItem('was_click_help','false');
            return 0;
        }

    // пока просто дублирую - деструктуризирую объект для
    // упрощения кода
    let {str, levexW, level, log:logView} = propertyForBonus;

    // объект для логов
    const log = {};
    log.propertyForBonus_input = propertyForBonus; //logs
    log.levelTest = level;

    // На случай если произошел ошибочный ответ, то вернуть 1
    // Штрафы оставляю на будущее
    if (str === "Error") {
        return 1;
    }

    // вычислить нахождение числа ошибок
    let errorName = levexW.replace('Ok', "Error");
    log.errorName = errorName;
    
    // Узнать число правильных и не правильных ответов
    let ok = parseFloat(localStorage.getItem(levexW));
    if (!Number.isFinite(ok)) ok = 0;
    log.ok = ok;
    
    let error = parseFloat(localStorage.getItem(errorName));
    if (!Number.isFinite(error)) error = 0;
    log.error = error;


    // Узнать число существующих тестов
    const levelDataModel = FactoryRegistr.getObject("LevelDataModel");
    const numberTest = levelDataModel.getArrayNameButton().length;
    log.numberTest = numberTest;

    // для третьего бонуса
    // Массив с пунктами меню, нужен просто для обхода всех сохраненных 
    // данных касательно пройденных тестов. 
    const arrayNumberTest = levelDataModel.getArrayNameButton();
    log.arrayNumberTest = arrayNumberTest;

    // Стартовое значение коэффициента
    let ticLocal=1;

    // Первый бонус должен зависеть от числа непогашенных ошибок
    // если такие ошибки есть, то коэффициент считается по формуле снизу
    // переделан 3.3.2025
    let bonusOne;
    if (error == 0) bonusOne = 1;
    if (error > 0 && ok == 0) bonusOne = 0 - error;
    if (error > 0 && ok > 0) bonusOne = ok / (error + ok);
    log.bonusOne = bonusOne;
    // Второй бонус, попытка настройть раздачу балов в зависимости
    // от сложности. Сложным считается последний тест.
    const bonusTwo = level / numberTest * 2;
    log.bonusTwo = bonusTwo;

    // Третий бонус - самые малопройденные тесты дают больше баллов
    // Плюс создать массив с цифрами, сколько есть данных по числу
    // пройденных тестов
    const testsOk = []; // набить массив цифрами
    const testsError = []; // набить массив цифрами
    arrayNumberTest.forEach((element, index) => {
        let nameKey = 'level'+index+'_Ok';
        let maxOkLocal = parseFloat(localStorage.getItem(nameKey));
        if (!Number.isFinite(maxOkLocal)) maxOkLocal = 0;
        testsOk.push(maxOkLocal);

        nameKey = 'level'+index+'_Error';
        let maxErrorLocal = parseFloat(localStorage.getItem(nameKey));
        if (!Number.isFinite(maxErrorLocal)) maxErrorLocal = 0;
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
    else if (ok < calculateMedian(testsOk)) diferent = ok+1 / calculateMedian(testsOk);


    let bonusFour = diferent * 3;
    log.bonusFour = bonusFour;


    ticLocal = bonusOne + bonusTwo + bonusThree + bonusFour;
    log.ticLocalFull = ticLocal;

    let koefForTypeTest = 1;

    // Если работаем с тестом word-assembly то удвоить баллы
    if (localStorage.getItem('user_select') === 'word-assembly') {
        koefForTypeTest = 2;
    }

    // Если работаем с тестом word-assembly-not-translate 
    // то умножить балы на 2,5
    if (localStorage.getItem('user_select') === 'word-assembly-not-translate') {
        koefForTypeTest = 2.5;
    }

    ticLocal *= koefForTypeTest;

    if (ticLocal < 0.4) ticLocal = 0.4;
    
    if (koefForTypeTest === 1)
        if (ticLocal > 3) ticLocal = 3;
    if (koefForTypeTest === 2)
        if (ticLocal > 6) ticLocal = 6;
    if (koefForTypeTest === 2.5)
        if (ticLocal > 7) ticLocal = 7;
    log.ticLocalRezult = ticLocal;
    
    
    //if (propertyForBonus.log) {
    if (logView) {
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
