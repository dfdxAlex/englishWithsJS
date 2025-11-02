
// функция возвращает число определяющее сколько в массиве правильно
// созданных предложений
export function countValidOptions()
  {
    const nameArray = 'window.fileDB.'+localStorage.getItem('nameArrayDb');
    const workingArray = eval(nameArray);

    if (workingArray.lengthTrue === undefined) {
        return 1;
    } else {
        return workingArray.lengthTrue;
    }
  }