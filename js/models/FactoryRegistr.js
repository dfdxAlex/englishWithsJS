// класс должен в конце принять на себя функцию создания объектов
// используется паттерн Singleton Registry

class FactoryRegistr
{
    constructor()
    {
        this.factoryArray = {};
    }

    addObject(nameClass, linkObject)
    {
        this.factoryArray[nameClass] = linkObject;
    }

    getObject(nameClass, property = false)
    {
        // если имя запрашиваемого класса уже есть в массиве-объекте
        // то вернуть его из массива.
        if (nameClass in this.factoryArray) {
            return this.factoryArray[nameClass];
        };
  
        // Если объекта нет, то создать, зарегистрировать и вернуть
        let obj;
        if (nameClass == 'LanguageController') {
            obj = new LanguageController();
        }

        this.addObject(nameClass, obj);
        return obj;
        
    }
}
