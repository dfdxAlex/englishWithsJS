// Модуль подключает все файлы, которые находятся в папках 1 и 2 тестов
// Полученный объект экспортируется и делается костыль для работы со старыми файлами

// modules — это объект, где:
// ключи → пути к файлам (относительно текущей папки)
// значения → объекты с экспортами этих файлов (поскольку { eager: true })
let modules = import.meta.glob('./1/*.js', { eager: true });
let modulesTwo = import.meta.glob('./2/*.js', { eager: true });

// Создать результирующий объект
const fileDB = {};

// Добавить в результирующий объект все экспорты, где 
// поле - это имя массива, а значение - это сам массив с тестами
for (const module of Object.values(modules)) {
  Object.assign(fileDB, module); // добавляем все экспорты из модуля
}
for (const module of Object.values(modulesTwo)) {
  Object.assign(fileDB, module); // добавляем все экспорты из модуля
}

// костыль для старого импорта
window.fileDB = fileDB;

export default fileDB;