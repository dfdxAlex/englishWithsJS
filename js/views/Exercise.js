// Класс помещает вопрос для урока

class Exercise
{
    init(str)
    {
        const transL = FactoryRegistr.getObject("LanguageController");
        const cartTitle = transL.translate('Задание для теста');
        this.strLocal = `
        <div class="card shadow-lg rounded-3" style="width: 18rem;  position: relative;">
         <button type="button" class="btn-close" aria-label="Close" style="position: absolute; top: 10px; right: 10px;"  onclick="document.getElementById('exercise').style.display='none'"></button>
          <div class="card-body">
            <h5 class="card-title">${cartTitle}</h5>
            <p class="card-text">${str}</p>
          </div>
        </div>
        `;
        document.getElementById('level29').onclick = cardHelp.bind(null, this);
    }
}

function cardHelp(thisS)
{
    document.getElementById('exercise').style.display='block';
    document.getElementById('exercise').innerHTML = thisS.strLocal;
}
