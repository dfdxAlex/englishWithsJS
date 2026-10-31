import './styles/emojeError.scss';
import './styles/renderErrorList.scss';
import { addElToDinamicMenu } from '../view/addElToDinamicMenu.js';

export class ButtonErrorView {
    #elements = {
        button: document.getElementById('search_error'),                // указатель на кнопку Сообщить об ошибке
        question: document.getElementById('question_old'),              // текст из поля Предыдущий вопрос
        questionClicked: document.getElementById('clicked_element'),    // текст из поля Предыдущий вопрос
    }

    #state = {
        errorsModaXClose: false,                        // наличие одного крестика закрытия списка ошибок
    }

    // накинуть событие на кнопку ошибки в динамическом меню
    handleButtonErrorDinamic(separateErrors, stateOfModel, translate) {
        const id = setInterval (async () => {
            const dinamicMenuError = document.getElementById('dinamic_menu_error');
            if (!dinamicMenuError) {
                alert('нет кнопки');
                return
            };

            dinamicMenuError.addEventListener('click', async () => {
                // метод помещает разделенные массивы в state Модели
                await separateErrors();
                // дальше нужна функция, которая сначала покажет мои ошибки, потом оставшиеся общие

                await stateOfModel();

                this.renderErrorList(stateOfModel, translate);
                this.handleButtonErrorDinamicEven();
  
                });
            
            if (dinamicMenuError) clearInterval(id);
        }, 200, separateErrors, stateOfModel, translate);
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

    getUlAnswerListError(arrayMy) {
        return `
            <ul class="test-error__answers">
                <li class="test-error__answer test-error__answer--correct">
                    Answer: ${arrayMy.option1 || arrayMy.option5 || arrayMy.option9}
                </li>
                <li class="test-error__answer">
                    Answer: ${arrayMy.option2 || arrayMy.option6 || arrayMy.option10}
                </li>
                <li class="test-error__answer">
                    Answer: ${arrayMy.option3 || arrayMy.option7 || arrayMy.option11}
                </li>
                <li class="test-error__answer">
                    Answer: ${arrayMy.option4 || arrayMy.option8 || arrayMy.option12}
                </li>
            </ul>
        `;
    }

    getButtonTestErrorRemove() {
        return `
            <button class="test-error__remove">
                ✕
            </button>
        `;
    }
//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
    renderErrorList(stateOfModel, translate) {
        const errorMy = stateOfModel().errorMy;
        const errorCommon = stateOfModel().errorCommon;

        // const arrayMy = JSON.parse(stateOfModel().errorMy[0]);
        //обнулить флаг наличие одного общего крестика закрытия
        this.#state.errorsModaXClose = false;

        let resultMyError = errorMy.map((arrayMy) => {
        arrayMy = JSON.parse(arrayMy);   
        return `
                    ${this.getHeaderListError(arrayMy)}
                    ${this.errorsModalXButton()}
                    </div>
                    <div class="errors-modal__body">
                        <div class="test-error">
                            <div class="test-error__content">
                                <div class="test-error__question">
                                    Question: ${arrayMy.question}
                                </div>
                            ${this.getUlAnswerListError(arrayMy)}
                            </div>
                            <div class="test-error__actions">
                                <button class="test-error__copy">
                                    📋
                                </button>
                                ${this.getButtonTestErrorRemove()}
                            </div>
                        </div>
                    </div>
                    <div class="errors-modal__footer">
            `;
        }).join('');

        let resultCommonError = errorCommon.map((arrayCommon) => {
        arrayCommon = JSON.parse(arrayCommon);  

        return `
                    ${this.getHeaderListError(arrayCommon)}
                    ${this.errorsModalXButton()}
                    </div>
                    <div class="errors-modal__body">
                        <div class="test-error">
                            <div class="test-error__content">
                                <div class="test-error__question">
                                    Question: ${arrayCommon.question}
                                </div>
                            ${this.getUlAnswerListError(arrayCommon)}
                            </div>
                            <div class="test-error__actions">
                                <button class="test-error__copy">
                                    📋
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="errors-modal__footer">
            `;
        }).join('');



        resultMyError = `
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

        document.getElementById('error_modal').innerHTML = resultMyError;
    }

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

    // кеш карточки заданий, на случай нажатия в будущем на ошибку
    preloadDataView() {

        // имя массива с заданием

        const fieldsetLegend = document.getElementById('fieldset-legend').innerText;
        const question = document.getElementById('question')?.innerText.replace('\n🔊', '');
        const option1 = document.getElementById('option1')?.innerText;
        const option2 = document.getElementById('option2')?.innerText;
        const option3 = document.getElementById('option3')?.innerText;
        const option4 = document.getElementById('option4')?.innerText;
        const option5 = document.getElementById('option5')?.innerText;
        const option6 = document.getElementById('option6')?.innerText;
        const option7 = document.getElementById('option7')?.innerText;
        const option8 = document.getElementById('option8')?.innerText;
        const option9 = document.getElementById('option9')?.innerText;
        const option10 = document.getElementById('option10')?.innerText;
        const option11 = document.getElementById('option11')?.innerText;
        const option12 = document.getElementById('option12')?.innerText;

        return {
            fieldsetLegend,
            question,
            option1,
            option2,
            option3,
            option4,
            option5,
            option6,
            option7,
            option8,
            option9,
            option10,
            option11,
            option12,
        }
    }
}