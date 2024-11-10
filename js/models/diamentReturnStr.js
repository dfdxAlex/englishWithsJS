function diamentReturnStr()
{
    let sumOk = 0;
    let sumError = 0;
    let sumTranslate = 0;

    for(let key in localStorage) {
        if (key.includes('_Ok')) {
            sumOk += parseInt(localStorage.getItem(key));
        }
        if (key.includes('_Error')) {
            sumError += parseInt(localStorage.getItem(key));
        }
        if (key.includes('intTranslate')) {
            sumTranslate += parseInt(localStorage.getItem(key));
        }
    }

    let diament = parseInt(sumOk - sumError*3 - sumTranslate/2);

    let emodziDiament = '💎';
    if (diament<0) emodziDiament = '💀';
    let smile = '<span style="margin: 0 4px; font-size: 1.5rem;">😊</span>';
    if (sumError/sumOk <= 0.5 && sumError/sumOk > 0) {
        smile = '<span style="margin: 0 4px; font-size: 1.5rem;">😔</span>';
    }
    if (sumError/sumOk <= 0.8 && sumError/sumOk > 0.5) {
        smile = '<span style="margin: 0 4px; font-size: 1.5rem;">😭</span>';
    }
    return [emodziDiament, smile, diament];
}
