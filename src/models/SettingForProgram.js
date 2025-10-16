export class SettingForProgram
{
    // хранит тип теста, simple - это просто ответ на вопрос
    static selectTypeTestProperty = 'simple';

    // инфа для цены баллов
    static inputLightNormalHard = 'light';

    // ********* инфа для пузырьков
    // В эти переменные попадает стартовая координата для пузырька, определяется по клику
    static buttonCheckX;
    static buttonCheckY;
    // хранит число выбитых диамантов
    static diamant;
    // хранит дубликат стартовых координат для сравнения
    static buttonCheckXStart;
    static buttonCheckYStart;
    // хранит признак того, что падает ящик
    static randomOk = false;

    // массивы с данными по реальным пройденным тестам и ошибкам
    static testsOk;
    static testsError;

    // массив для хранения текущего и предыдущего перевода
    // некий конвейер по смещению данных
    static dataElevator = [];

    // хранит конвейер со значениями Речь примерно о: или пустая строка
    static commentPlus = [];

    static get selectTypeTest()
    {
        this.initializeToProperty();
        return this.selectTypeTestProperty;
    } 
    static set selectTypeTest(selectTypeTest)
    {
        this.selectTypeTestProperty = selectTypeTest;
        localStorage.setItem('user_select', selectTypeTest);
    }

    static initializeToProperty()
    {
        if (localStorage.getItem('user_select') !== null)
            this.selectTypeTestProperty = localStorage.getItem('user_select');
    }
}
