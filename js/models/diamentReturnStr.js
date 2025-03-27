function diamentReturnStr()
{
    let sumOk = 0;
    let sumError = 0;
    let sumTranslate = 0;
    let unitSum = 0;

    for(let key in localStorage) {
        unitSum = parseInt(localStorage.getItem(key));
        if (isNaN(unitSum) || unitSum == "") continue;

        if (key.includes('_Ok')) {
            sumOk += unitSum;
        }
        if (key.includes('_Error')) {
            sumError += unitSum;
        }
        if (key.includes('intTranslate')) {
            sumTranslate += unitSum;
        }
    }

    const diamandTime = sumOk - sumError*3 - sumTranslate/2;
    let diament = parseInt(diamandTime);

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
