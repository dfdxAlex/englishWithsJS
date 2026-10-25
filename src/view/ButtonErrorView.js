import './styles/emojeError.scss';
import { addElToDinamicMenu } from '../view/addElToDinamicMenu.js';

export class ButtonErrorView {
    #elements = {
        button: document.getElementById('search_error'),                // указатель на кнопку Сообщить об ошибке
        question: document.getElementById('question_old'),              // текст из поля Предыдущий вопрос
        questionClicked: document.getElementById('clicked_element'),    // текст из поля Предыдущий вопрос
    }

    #state = {
        questionOld: '',
        questionOldClicked: '',
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

    // вернуть содержимое из question_old
    getQuestionOld() {
        this.#state.questionOld = this.#elements.question.textContent;
        return this.#state.questionOld;
    }

    //вернуть содержимое clicked_element
    getQuestionOldClicked() {
        this.#state.questionOldClicked = this.#elements.questionClicked.textContent;
        return this.#state.questionOldClicked;
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