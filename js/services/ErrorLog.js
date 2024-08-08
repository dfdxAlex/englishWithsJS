// Класс-заглушка предназначен для фабрики объектов FactoryRegistr
// Если будет запрошен не существующий класс, то 
// этот класс выведет информацию в консоль

class ErrorLog
{
    constructor(nameClass, property = false)
    {
        console.log(`В фабрику FactoryRegistr был запрос на получение объекта из класса ${nameClass}`);
        console.log('Такого класса нет, либо он не зарегистрирован в фабрике.');
        console.log(`Входные параметры: ${property}`);
    }
}
