// объект хранит в себе историю ответов


export const Logs = {
    logSize : 100,
    logs : [],
    set addLog(log) {
        this.logs.unshift(log);
        if (this.logs.length > this.logSize) {
            this.logs.pop();
        }
    }
};


