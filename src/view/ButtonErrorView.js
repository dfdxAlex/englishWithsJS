import './styles/emojeError.scss';
import './styles/renderErrorList.scss';
import { addElToDinamicMenu } from '../view/addElToDinamicMenu.js';

export class ButtonErrorView {
    constructor({translate}) {
        this.translate = translate;
    }

    #elements = {
        button: document.getElementById('search_error'),                // указатель на кнопку Сообщить об ошибке
        question: document.getElementById('question_old'),              // текст из поля Предыдущий вопрос
        questionClicked: document.getElementById('clicked_element'),    // текст из поля Предыдущий вопрос
    }

    #state = {
        errorsModaXClose: false,                        // наличие одного крестика закрытия списка ошибок
        idForCopyButton: 0,                             // идентификатор для ошибок
        url: 'https://amatordd.webd.pro/amatorDed/DFDX/test.php', // ссылка для запроса на сервер, список ошибок
    }

    // накинуть событие на кнопку ошибки в динамическом меню
    handleButtonErrorDinamic(separateErrors, stateOfModel) {
        const id = setInterval (async () => {
            // выбрать кнопку ошибок в динамическом меню
            const dinamicMenuError = document.getElementById('dinamic_menu_error');
            // если нет, то выйти
            if (!dinamicMenuError) return;

            dinamicMenuError.addEventListener('click', async () => {
                // метод помещает разделенные массивы в state Модели
                await separateErrors();

                this.renderErrorList(stateOfModel);
                this.handleButtonErrorDinamicEven();
  
                });
            
            if (dinamicMenuError) clearInterval(id);
        }, 200, separateErrors, stateOfModel);
    }

// Навесить делегированное событие закрытия модального окна ошибок.
handleButtonErrorDinamicEven() {

    // Удалить модальное окно ошибок со страницы.
    const closeModal = () =>
        document.querySelector('.errors-modal')?.remove();

    document.addEventListener('click', event => {

        // Закрыть модальное окно:
        // - по крестику в заголовке;
        // - по кнопке Close внизу;
        // - по клику на затемнённый фон вокруг окна.
        if (
            event.target.closest('.errors-modal__close') ||
            event.target.closest('.errors-modal__button') ||
            event.target.classList.contains('errors-modal')
        ) {
            closeModal();
        }

    });
}

///////////////////////////////////// дробление renderErrorList ////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
    // кнопка для удаления ошибки
    errorsModalXButton() {
        if (!this.#state.errorsModaXClose) {
            this.#state.errorsModaXClose = true;
            return `
                <button class="errors-modal__close">
                    ✕
                </button>
            `;
        } 
        return '';
    }
    
    errorsModalButton() {
        return `
            <button class="errors-modal__button">
                Close
            </button>
        `;
    }

    // заголовок со служебной информацией в блоке с ошибками
    getHeaderListError(arrayMy) {
        return `
            <h2 class="errors-modal__title">
            ${arrayMy.date.trim().slice(0, 10)} / 
            ${arrayMy.nameArrayDb} / 
            level:${arrayMy.level} / 
            test:${arrayMy.userSelect} / 
            №${arrayMy.randomEl}
            </h2>
        `;
    }

    getUlAnswerListError(arrayMy, id) {
        return `
            <ul class="test-error__answers">
                <li class="test-error__answer test-error__answer--correct" id="test-error-answer-correct-${id}">
                    Answer: ${arrayMy.option1 || arrayMy.option5 || arrayMy.option9}
                </li>
                <li class="test-error__answer" id="test-error-answer-fulse1-${id}">
                    Answer: ${arrayMy.option2 || arrayMy.option6 || arrayMy.option10}
                </li>
                <li class="test-error__answer" id="test-error-answer-fulse2-${id}">
                    Answer: ${arrayMy.option3 || arrayMy.option7 || arrayMy.option11}
                </li>
                <li class="test-error__answer" id="test-error-answer-fulse3-${id}">
                    Answer: ${arrayMy.option4 || arrayMy.option8 || arrayMy.option12}
                </li>
            </ul>
        `;
    }

    getButtonTestErrorRemove(id) {
        return `
            <button class="test-error__remove" id="test-error-remove-${id}">
                ✕
            </button>
        `;
    }
//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
    renderErrorList(stateOfModel) {
        const errorMy = stateOfModel().errorMy;
        const errorCommon = stateOfModel().errorCommon;

        //обнулить флаг наличие одного общего крестика закрытия
        this.#state.errorsModaXClose = false;

        // обнуление счётчика ошибок
        this.#state.idForCopyButton = 0;

        const resultMyError = Array.isArray(errorMy)
            ? errorMy.map(error => this.renderErrorItem(error, true)).join('')
            : '';

        const resultCommonError = Array.isArray(errorCommon)
            ? errorCommon.map(error => this.renderErrorItem(error)).join('')
            : '';

        const resultError = `
        <div class="errors-modal">
            <div class="errors-modal__dialog">
                <div class="errors-modal__header">
                    ${resultMyError}
                    ${resultCommonError}
                    ${this.errorsModalButton()}
                </div>
            </div>
        </div>
        `;

        // рендер списка с ошибками
        document.getElementById('error_modal').innerHTML = resultError;

        // скопировать ошибку в буфер
        this.searchButtonCopy(errorMy, errorCommon);

        this.buttonCloseError(errorMy);
    }

// обработка нажатия на крестик конкретной ошибки
buttonCloseError(errorMy) {
    // test-error-remove-
    const arrayButtonCopy = document.querySelector('.errors-modal');

    arrayButtonCopy?.addEventListener('click', async e => {

        // если кликнули не в пиктограмку копирования, то выйти из обработки клика
        const button = e.target.closest('[id^="test-error-remove-"]');
        if (!button) return; 

        // индекс массива, который нужно удалить
        const idError = Number(e.target.id.replace('test-error-remove-', ''));

        // удалить строку из таблицы
        await this.deleteError(errorMy[idError-1]);

        // удалить эту же строку из массива
        const newArr = errorMy.filter(item => item !== errorMy[idError-1]);
        // console.log();

        // перезаписать локальный массив с своими и чужими ошибками
        localStorage.setItem('errorMessage', JSON.stringify(newArr));
        
        setTimeout(() => {
            button.innerText = '🗑️';
        }, 1000);

    });
}

async deleteError(error) {

    const formData = new FormData();

    formData.append('name', 'deleteError');
    formData.append('error', error);

    const response = await fetch(this.#state.url, {
        method: 'POST',
        body: formData
    });

    return response.json();
}

searchButtonCopy(arrayMy, arrayCommon) {
    const arrayButtonCopy = document.querySelector('.errors-modal');
    arrayButtonCopy?.addEventListener('click', e => {

        // если кликнули не в пиктограмку копирования, то выйти из обработки клика
        const button = e.target.closest('[id^="test-error-copy-"]');
        if (!button) return;

        const objForError = this.getObjForError(arrayMy, arrayCommon, e.target);

        //немного косметики, стрелка вместо this.translate.translate
        const translate = text => this.translate.translate(text);

        const commentForGPT = translate('Проверь задание из теста. Сначала тестовый вопрос или предложение. Потом правильный вариант ответа - пара к первому предложению или вопросу. После этого должны быть три не правильных варианта, которые не должны быть выбраны.');
        const question =  translate('Задание теста:') + ' ' + objForError.question;
        const option1 =  translate('Правильный вариант:') + ' ' + (objForError.option1 || objForError.option5 || objForError.option9);
        const option2 =   translate('Неправильный вариант:') + ' ' + (objForError.option2 || objForError.option6 || objForError.option10);
        const option3 =  translate('Неправильный вариант:') + ' ' + (objForError.option3 || objForError.option7 || objForError.option11);
        const option4 =  translate('Неправильный вариант:') + ' ' + (objForError.option4 || objForError.option8 || objForError.option12);

        const textForBuffer = `
            ${commentForGPT}
            ${question}
            ${option1}
            ${option2}
            ${option3}
            ${option4}
        `;

        navigator.clipboard.writeText(textForBuffer);

        // эффект для кнопки копирования
        this.effectForCopy(button);

    });
}

// эффект для кнопки копирования
effectForCopy(button) {
    const originalText = button.innerText;
    button.innerText = '✓';
    setTimeout(() => {
        button.innerText = originalText;
    }, 1000);
}

getObjForError(arrayMy, arrayCommon, target) {

        // выделить номер массива с ошибкой, используя клик.
        const numberArray = Number(target.id.replace('test-error-copy-', ''));

        // прочитать атрибут и понять моя ошибка или общая
        // Do-Not-My-Error или My-Error
        const getTypeError = target.closest('.errors-modal__body').dataset.errorType;

        // определить номер массива с ошибкой, если ошибка моя, то нумерация начинается с 1
        // если ошибка общая, то от номера ошибки нужно отнять длину массива с моими ошибками
        const indexError = getTypeError === 'My-Error' ? numberArray :  numberArray-arrayMy.length;

        if (getTypeError === 'My-Error') return JSON.parse(arrayMy[indexError-1]);
        if (getTypeError === 'Do-Not-My-Error') return JSON.parse(arrayCommon[indexError-1]);
}

renderErrorItem(error, withRemoveButton = false) {
    error = JSON.parse(error);
    this.#state.idForCopyButton++;
    return `
        ${this.getHeaderListError(error)}
        ${this.errorsModalXButton()}
        </div>

        <div class="errors-modal__body" 
             data-error-type = ${this.getDataAtributeMyErrorOrNo(withRemoveButton)}
        >
            <div class="test-error">
                <div class="test-error__content">
                    <div
                        class="test-error__question"
                        id="test-error-question-${this.#state.idForCopyButton}"
                    >
                        Question: ${error.question}
                    </div>

                    ${this.getUlAnswerListError(
                        error,
                        this.#state.idForCopyButton
                    )}
                </div>

                <div class="test-error__actions">
                    <button
                        class="test-error__copy"
                        id="test-error-copy-${this.#state.idForCopyButton}"
                    >
                        📋
                    </button>

                    ${withRemoveButton ? this.getButtonTestErrorRemove(this.#state.idForCopyButton) : ''}
                </div>
            </div>
        </div>

        <div class="errors-modal__footer">
    `;
}

// функция маркирует ошибки используя дата-атрибут. привязана к withRemoveButton, 
// определяющий будет ли крестик для удаления ошибки.
// крестик уже означает что ошибка моя, а не общая.
getDataAtributeMyErrorOrNo(withRemoveButton = false) {
    if (!withRemoveButton) return 'Do-Not-My-Error';
    return 'My-Error';
}
/////////////////////////////////////////////////////////////////////////////////////////\
////////////////////////////////////////////////////////////////////////////////////////
    async renderErrorEmoji(getErrorCount) {
        // вернуть число ошибок
        const { count } = await getErrorCount();
        
        if (Number(count<1)) return;

        const emoji = '⚠️<span>'+count+'</span>';
        addElToDinamicMenu(emoji, 'dinamic_menu_error', 'dinamic_menu_error');
    }

    // вернуть ссылку на кнопку search_error
    getButtonSearchError() {
        return this.#elements.button;
    }

}