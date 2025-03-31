let DataOk = {
    level : {
        str : localStorage.getItem('level') || '9',                                // номер текущего уровня Строка
        int : parseInt(localStorage.getItem('level')) || 9,                                           // номер текущего уровня Число
        get levelNameOk() {return 'level' + this.str + '_Ok'},  // Имя переменной где хранится число ОК
        get levelNameError() {return 'level' + this.str + '_Error'},   // Имя переменной где хранится число Error
    },
    // Число баллов Ок
    get ok() {
        return parseFloat(localStorage.getItem(this.level.levelNameOk)) || 0;
    },      
    set ok(value) {
        localStorage.setItem(this.level.levelNameOk, value);
    },
    // Число баллов ошибок
    get error() {
        return parseFloat(localStorage.getItem(this.level.levelNameError)) || 0;
    },
    set error(value) {
        localStorage.setItem(this.level.levelNameError, value);
    },

    // Сеттер для levelX_Ok'; (для имени ячейки, в которой хранится число с OK)
    // Вместе с этим меняет и значение переменной level
    setLevelOk: function(value) {
        this.levelNameOk = value;
        value = value.replace(/level/,'');
        value = value.replace(/_Ok/,'');
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

    getOkIndex: (index) => {
        return parseFloat(localStorage.getItem('level'+index+'_Ok')) || 0;
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
