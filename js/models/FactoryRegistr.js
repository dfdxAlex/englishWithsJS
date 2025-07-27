// класс должен в конце принять на себя функцию создания объектов
// используется паттерн factory Registry
// Запускается фабрика:
// FactoryRegistr.getObject('name class')

// достать этот объект из модульной системы.
let LanguageController = window.LanguageController;

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
  
        // временное решение для некоторых объектов. Если у класса - регистратора запрашиваются 
        // эти объекты, то они берутся из глобальных переменных, которые созданы в специальном
        // контроллере bridgOldAndNewCode
        // по сути регистратор перестал работать для перенесенных в модули объектов
        if (nameClass == 'LanguageController') {
            // this.addObject('LanguageController', window.LanguageController);
            return window.LanguageController;
        }

        // Если объекта нет, то создать, зарегистрировать и вернуть
        // Получить имя класса, из которого нужно вернуть объект
        const className = eval(nameClass);
        let obj = '';

        if (!property) {
            obj = new className();
        } else {
            obj = new className(...property);
        }

        FactoryRegistr.addObject(nameClass, obj);
        return obj;
    }
}
