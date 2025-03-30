let levelStr = localStorage.getItem('level'); 
let levelInt = parseInt(levelStr);

let levelNameOk = 'level' + levelStr + '_Ok';
let levelNameError = 'level' + levelStr + '_Error';


let DataOk = {
    level : {
        str : levelStr,                 // номер текущего уровня Строка
        int : levelInt,                 // номер текущего уровня Число
        levelNameOk : levelNameOk,      // Имя переменной где хранится число ОК
        levelNameError : levelNameError,// Имя переменной где хранится число Error
    },
    ok : parseFloat(localStorage.getItem(levelNameOk)) || 0,      // Число баллов Ок
    error : parseFloat(localStorage.getItem(levelNameError)) || 0,// Число баллов ошибок

    // Сеттер для levelX_Ok'; (для имени ячейки, в которой хранится число с OK)
    // Вместе с этим меняет и значение переменной level
    setLevelOk: function(value) {
        this.levelNameOk = value;
        value = value.replace(/level/,'');
        value = value.replace(/_Ok/,'');
        //console.log(value);
        this.setLevel(value);
    },
    // Сеттер для levelX_Ok'; (для имени ячейки, в которой хранится число с Error)
    // Вместе с этим меняет и значение переменной level
    setLevelError: function(value) {
        this.levelNameError = value;
        value = value.replace(/'level'/,'');
        value = value.replace(/'_Error'/,'');
        this.setLevel(value);
    },

    //Сеттер для level
    setLevel: function(value) {
        this.level.int = parseInt(value);
        this.level.str = value;
        localStorage.setItem('level', value);
    },

    // Сеттер для ok
    setOk: function(value) {
        this.ok = value;
        localStorage.setItem(this.level.levelNameOk, value);
    },
    getOk: () => {
        return this.ok
    },
    getOkIndex: (index) => {
        return parseFloat(localStorage.getItem('level'+index+'_Ok')) || 0;
    },

    // Сеттер для error
    setError: function(value) {
        this.error = value;
        localStorage.setItem(this.level.levelNameError, value);
    },
    getError: () => {
        return this.error
    },
    getErrorIndex: (index) => {
        return parseFloat(localStorage.getItem('level'+index+'_Error')) || 0;
    },
    // Сумматор для ok
    addOk: function(value) {
        this.ok += parseFloat(value) || 0;
        localStorage.setItem(this.level.levelNameOk, this.ok);
    },

     // Сумматор для error
    addError: function(value) {
        this.error += parseFloat(value) || 0;
        localStorage.setItem(this.level.levelNameError, this.error);
    },
}
