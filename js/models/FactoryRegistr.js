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
        if (nameClass == 'LanguageController') {
            obj = new LanguageController();
        }

        FactoryRegistr.addObject(nameClass, obj);
        return obj;
        
    }
}
