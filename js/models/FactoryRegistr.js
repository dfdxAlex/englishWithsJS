// класс должен в конце принять на себя функцию создания объектов
// используется паттерн factory Registry
// объе

class FactoryRegistr
{
    static factoryArray = {};

    static addObject(nameClass, linkObject)
    {
        FactoryRegistr.factoryArray[nameClass] = linkObject;
    }

    static getObject(nameClass, property = false)
    {
        // если имя запрашиваемого класса уже есть в массиве-объекте
        // то вернуть его из массива.
        if (nameClass in FactoryRegistr.factoryArray) {
            return FactoryRegistr.factoryArray[nameClass];
        };
  
        // Если объекта нет, то создать, зарегистрировать и вернуть
        let obj;
        switch (nameClass) {
            case 'LanguageController':
                obj = new LanguageController();
                break;
            case 'Statistic':
                obj = new Statistic();
                break;

            default:
                // обработка случая, если класс не найден
                obj = new ErrorLog(nameClass, property);
                break;
        }
        FactoryRegistr.addObject(nameClass, obj);
        return obj;
        
    }
}
