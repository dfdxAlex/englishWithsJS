class SettingForProgram
{
    // хранит тип теста, simple - это просто ответ на вопрос
    static selectTypeTestProperty = 'simple';

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
