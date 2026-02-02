// Обработчик клика по кнопке Теории в разделе Помощь.
// С помощью Bind эта функция привязана к контексту из которого берет this и использует strLocal
// strLocal считается в статическом методе handleThoury() класса Thoury
// Данная функция рендерит полученный из класса Thoury Хелп в id=exercise
// так-же добавляет обработчик события для закрытия окна Хелп


export function renderThoury()
{
    document.getElementById('exercise').style.display='block';
    document.getElementById('exercise').innerHTML = this.strLocal;
    document.getElementById(this.idForButtonClosed).addEventListener('click', ()=>{
        document.getElementById('exercise').style.display='none';
        // document.getElementById('exercise').remove();
    });
}