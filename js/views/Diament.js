function diament()
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

    let strHeader = `
    <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px; background-color: #f0f8ff; border-bottom: 2px solid #dcdcdc;">
    <!-- Отображение числа и иконка кристаллов -->
    <div style="display: flex; align-items: center;">
        <span style="font-size: 1.5rem; color: #333; margin-right: 8px;">${diament}</span>
        <span style="margin: 0 4px; font-size: 1.5rem;">${emodziDiament}</span>
    </div>
    <!-- Эмоции с использованием смайликов -->
    <div style="display: flex; align-items: center;">
        ${smile}  
    </div>
</div>`;
    document.querySelector('#diament').innerHTML = strHeader;
}
