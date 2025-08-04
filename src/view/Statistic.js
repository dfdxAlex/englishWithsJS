// Класс считает и хранит статистику по текущему уровню
// Класс Синглтон, реалезован средствами модулей, 
// при первой загрузке создается объект, дальше експортируется только ссылка на него
// сам класс не експортируется

import { notNull } from '../library/notNull.js';

class Statistic
{
    constructor()
    {
        this.count = 0;
        this.ok = 0;
        this.error = 0;
        this.level = 0;
        this.rez = 0;
    }

    init(okInput, errorInput)
    {
       // Проверяются значения правильных и не правильных ответов
       this.ok = parseFloat(okInput);
       this.ok = notNull(this.ok);

       this.error = parseFloat(errorInput);
       this.error = notNull(this.error);

       // считаются проценты только если сумма балов отлична от нуля
       let allPunkt = this.ok + this.error;
       if (allPunkt !== 0) {
           this.rez = (this.ok/(allPunkt))*100;
       }

       this.level = notNull(localStorage.getItem('level'));
       
       this.count = notNull(localStorage.getItem('intTranslate_'+this.level));
       if (!this.count) this.count = 0;
    }
}

const instanceStatistic = new Statistic();

export { instanceStatistic }


