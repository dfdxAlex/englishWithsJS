function Log(str, rezult) {
    this.str = str,
    this.level = localStorage.getItem('level'),
    this.rezult = rezult,
    this.index = localStorage.getItem('randomEl'),
    this.nameArray = localStorage.getItem('nameArrayDb'),
    Object.defineProperty(this, 'question', {
        get:function() {
            const array =  eval(this.nameArray);
            return array[parseInt(this.index)][0];
        }
    });
}


