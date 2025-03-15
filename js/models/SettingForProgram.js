class SettingForProgram
{
    // хранит тип теста, simple - это просто ответ на вопрос
    static selectTypeTestProperty = 'simple';

    static buttonCheckX;
    static buttonCheckY;
    static diamant;

    // массивы с данными по реальным пройденным тестам и ошибкам
    static testsOk;
    static testsError;

    // массив для хранения текущего и предыдущего перевода
    // некий конвейер по смещению данных
    static dataElevator = [];

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
