// объект хранит в себе историю ответов
// Один из елементов логов
// const Log = {
//     str,
//     level : localStorage.getItem('level'),
//     rezult : '',
//     index : '',
//     nameArray : '',
//     get question() {
//         const array =  eval(this.nameArray);
//         return array[parseInt(this.index)][0];
//     }
// }

const Logs = {
    logSize : 100,
    logs : [],
    set addLog(log) {
        this.logs.unshift(log);
        if (this.logs.length > this.logSize) {
            this.logs.pop();
        }
    }
};


