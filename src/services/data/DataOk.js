let DataOk = {};

const levelStr = ()=>{
    return localStorage.getItem('level') || '9';
}
const countStr = ()=>{
    return localStorage.getItem('intTranslate_'+levelStr()) || '0'
}


DataOk = {
    //Данные касающиеся места и содержимого переменное Level
    level : {
        str : levelStr(),                    // номер текущего уровня Строка
        int : parseInt(levelStr()) || 9,     // номер текущего уровня Число
        get levelNameOk() {return 'level' + levelStr() + '_Ok'},  // Имя переменной где хранится число ОК
        get levelNameError() {return 'level' + levelStr() + '_Error'},   // Имя переменной где хранится число Error
    },
    //Данные касающиеся места и содержимого переменное Count
    count : {
        str : countStr(),           // Число заказанных переводов String
        int : parseInt(countStr()) || 0, // Число заказанных переводов Intager
    },
    // Число баллов Ок
    get ok() {
        return parseFloat(localStorage.getItem('level' + levelStr() + '_Ok')) || 0;
    },      
    set ok(value) {
        localStorage.setItem('level' + levelStr() + '_Ok', value);
    },
    // Число баллов ошибок
    get error() {
        return parseFloat(localStorage.getItem('level' + levelStr() + '_Error')) || 0;
    },
    set error(value) {
        localStorage.setItem('level' + levelStr() + '_Error', value);
    },
    get rezult() {
        let rez = this.ok + this.error;
        if (rez == 0) return 0;
        return this.ok/(this.ok + this.error)*100;
    },
    get countInt() {
        return parseInt(countStr());
    },
    get countStr() {
        return countStr();
    },
    set countInt(count) {
        localStorage.setItem('intTranslate_'+levelStr(), count);
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
        this.level.int = parseFloat(value);
        this.level.str = value;
        localStorage.setItem('level', value);
        return this.level.int;
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

export { DataOk };