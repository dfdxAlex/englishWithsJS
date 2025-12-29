
// Не удалять, используется в EVAL
import  fileDB  from './filedb/indexForFileDB.js';

export function Log(str, rezult) {
    this.str = str,
    this.level = localStorage.getItem('level'),                      //номер текущего теста
    this.rezult = rezult,
    this.index = localStorage.getItem('randomEl'),                   //индекс текущего вопросса из массива.
    this.nameArray = 'fileDB.'+localStorage.getItem('nameArrayDb'),  //имя массива, который используется в текущем тесте
    this.translateRu = eval(this.nameArray)[this.index][5],
    this.translateUa = eval(this.nameArray)[this.index][6],
    this.translatePl = eval(this.nameArray)[this.index][7],
    Object.defineProperty(this, 'question', {
        get:function() {
            const array = eval(this.nameArray);
            return array[parseInt(this.index)][0];
        }
    });
}



